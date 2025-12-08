
import { GoogleGenAI, Type, FunctionDeclaration, Chat } from "@google/genai";

const apiKey = process.env.API_KEY;

// --- System Instruction & Knowledge Base ---
const SYSTEM_INSTRUCTION = `
You are CoaxiaAI, the advanced virtual interface for Coaxia.
Your goal is to assist potential clients, explain services, and navigate the website.

Identity:
- Name: CoaxiaAI
- Tone: Professional, futuristic, confident, slightly witty, and helpful.
- Company: Coaxia (Software Development Agency).
- Core Value: "Smart software for travel, transport & logistics".

Knowledge Base:
1. Services: Custom Software, Mobile Apps, Cloud/DevOps, AI & Data, Cybersecurity, Product Strategy.
2. Products: "GearMaster" (Garage Management System) - helping auto shops manage inventory, invoicing, and jobs.
3. Industries: Travel, Retail, Legal, Logistics, Finance, Healthcare.
4. Pages Available: 
   - Home ('/')
   - About Us ('/about')
   - Services ('/services')
   - Products / GearMaster ('/products')
   - Careers ('/careers')
   - Blog ('/blog')
   - Contact ('/contact')

Capabilities:
- You can Navigate the user to specific pages using the 'navigateToPage' tool.
- If a user asks to "go to contact", "see gearmaster", "read blog", use the tool.

Formatting:
- Use bullet points for lists.
- Be concise.
`;

// --- Tool Definitions ---
const navigateToPageTool: FunctionDeclaration = {
  name: "navigateToPage",
  description: "Navigates the user to a specific route/page on the website.",
  parameters: {
    type: Type.OBJECT,
    properties: {
      path: {
        type: Type.STRING,
        description: "The URL path to navigate to (e.g., '/contact', '/products', '/about', '/services').",
      },
    },
    required: ["path"],
  },
};

// --- Service Class ---
export class GeminiService {
  private ai: GoogleGenAI | null = null;
  private chat: Chat | null = null;
  private onNavigateCallback: ((path: string) => void) | null = null;

  constructor() {
    if (apiKey) {
      this.ai = new GoogleGenAI({ apiKey });
    }
  }

  setNavigateCallback(cb: (path: string) => void) {
      this.onNavigateCallback = cb;
  }

  initializeChat() {
    if (!this.ai) return;

    this.chat = this.ai.chats.create({
      model: "gemini-2.5-flash",
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        tools: [{ functionDeclarations: [navigateToPageTool] }],
        temperature: 0.7,
      },
    });
  }

  /**
   * Sends a message and yields chunks of text.
   * Automatically handles tool calls (client-side execution).
   */
  async *sendMessageStream(message: string): AsyncGenerator<string, void, unknown> {
    if (!this.chat) {
      if (!apiKey) {
        yield "System: API Key missing. Please configure process.env.API_KEY.";
        return;
      }
      this.initializeChat();
    }

    try {
      // 1. Send user message
      let result = await this.chat!.sendMessageStream({ message });

      // 2. Process stream
      for await (const chunk of result) {
        // Yield text if present
        if (chunk.text) {
            yield chunk.text;
        }

        // Check for function calls
        const functionCalls = chunk.functionCalls;
        if (functionCalls && functionCalls.length > 0) {
          
          const functionResponses = [];

          for (const call of functionCalls) {
            if (call.name === "navigateToPage") {
              const { path } = call.args as { path: string };
              
              // Execute Client Side Logic
              if (this.onNavigateCallback) {
                  this.onNavigateCallback(path);
              }
              
              functionResponses.push({
                name: call.name,
                id: call.id, // Important: match the ID
                response: { result: `Successfully navigated to path: ${path}` }
              });
            }
          }

          // Send tool response back to model to get the final text confirmation
          if (functionResponses.length > 0) {
             const toolResult = await this.chat!.sendMessageStream({
                message: functionResponses.map(fr => ({ functionResponse: fr }))
             });
             
             // Yield the model's response to the tool execution
             for await (const toolChunk of toolResult) {
                if (toolChunk.text) yield toolChunk.text;
             }
          }
        }
      }
    } catch (error) {
      console.error("Gemini Error:", error);
      yield "\n[Connection Error: Unable to reach CoaxiaAI mainframe]";
    }
  }
}

export const geminiService = new GeminiService();