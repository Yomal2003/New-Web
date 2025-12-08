import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

class APIClient {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: API_URL,
      headers: {
        'Content-Type': 'application/json'
      }
    });

    // Request interceptor to add token
    this.client.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem('admin_token');
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // Response interceptor to handle errors
    this.client.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response?.status === 401) {
          localStorage.removeItem('admin_token');
          localStorage.removeItem('admin_user');
          window.location.href = '/admin/login';
        }
        return Promise.reject(error);
      }
    );
  }

  // Auth
  async login(email: string, password: string) {
    const response = await this.client.post('/auth/login', { email, password });
    return response.data;
  }

  async register(data: any) {
    const response = await this.client.post('/auth/register', data);
    return response.data;
  }

  async getMe() {
    const response = await this.client.get('/auth/me');
    return response.data;
  }

  // Blogs
  async getBlogs(params?: any) {
    const response = await this.client.get('/blogs', { params });
    return response.data;
  }

  async getBlog(slug: string) {
    const response = await this.client.get(`/blogs/${slug}`);
    return response.data;
  }

  async createBlog(data: any) {
    const response = await this.client.post('/blogs', data);
    return response.data;
  }

  async updateBlog(id: string, data: any) {
    const response = await this.client.put(`/blogs/${id}`, data);
    return response.data;
  }

  async deleteBlog(id: string) {
    const response = await this.client.delete(`/blogs/${id}`);
    return response.data;
  }

  // AI Blog Features
  async generateBlogContent(topic: string, prompt: string, tone: string) {
    const response = await this.client.post('/blogs/ai/generate', { topic, prompt, tone });
    return response.data;
  }

  async generateMetaDescription(title: string, content: string) {
    const response = await this.client.post('/blogs/ai/meta-description', { title, content });
    return response.data;
  }

  async generateTags(title: string, content: string, count?: number) {
    const response = await this.client.post('/blogs/ai/tags', { title, content, count });
    return response.data;
  }

  async analyzeSEO(title: string, content: string, metaDescription?: string) {
    const response = await this.client.post('/blogs/ai/seo-analysis', { title, content, metaDescription });
    return response.data;
  }

  async improveContent(content: string, focus?: string) {
    const response = await this.client.post('/blogs/ai/improve', { content, focus });
    return response.data;
  }

  // Products
  async getProducts(params?: any) {
    const response = await this.client.get('/products', { params });
    return response.data;
  }

  async getProduct(slug: string) {
    const response = await this.client.get(`/products/${slug}`);
    return response.data;
  }

  async createProduct(data: any) {
    const response = await this.client.post('/products', data);
    return response.data;
  }

  async updateProduct(id: string, data: any) {
    const response = await this.client.put(`/products/${id}`, data);
    return response.data;
  }

  async deleteProduct(id: string) {
    const response = await this.client.delete(`/products/${id}`);
    return response.data;
  }

  async generateProductDescription(name: string, features: string[], category: string) {
    const response = await this.client.post('/products/ai/description', { name, features, category });
    return response.data;
  }

  // Careers
  async getCareers(params?: any) {
    const response = await this.client.get('/careers', { params });
    return response.data;
  }

  async getCareer(slug: string) {
    const response = await this.client.get(`/careers/${slug}`);
    return response.data;
  }

  async createCareer(data: any) {
    const response = await this.client.post('/careers', data);
    return response.data;
  }

  async updateCareer(id: string, data: any) {
    const response = await this.client.put(`/careers/${id}`, data);
    return response.data;
  }

  async deleteCareer(id: string) {
    const response = await this.client.delete(`/careers/${id}`);
    return response.data;
  }

  async generateJobDescription(title: string, department: string, level: string) {
    const response = await this.client.post('/careers/ai/generate', { title, department, level });
    return response.data;
  }

  // Analytics
  async getDashboardAnalytics(startDate?: string, endDate?: string) {
    const response = await this.client.get('/analytics/dashboard', { 
      params: { startDate, endDate } 
    });
    return response.data;
  }

  async getTrends(days?: number) {
    const response = await this.client.get('/analytics/trends', { 
      params: { days } 
    });
    return response.data;
  }

  async trackEvent(event: string, page?: string, data?: any) {
    const response = await this.client.post('/analytics/track', { event, page, data });
    return response.data;
  }
}

export const api = new APIClient();
