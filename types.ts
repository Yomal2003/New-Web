export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
}

export interface TechChallenge {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface Industry {
  id: string;
  name: string;
  image: string;
  description: string;
}

export interface BlogPost {
  id: string;
  category: string;
  title: string;
  date: string;
  image: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isStreaming?: boolean;
  isError?: boolean;
  timestamp: number;
}
