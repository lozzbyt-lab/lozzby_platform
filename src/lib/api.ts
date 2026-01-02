// API Configuration for Laravel Backend
// Update this URL to point to your Laravel API
export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

// API helper function with authentication
async function apiRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const token = localStorage.getItem('auth_token');
  
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    ...options.headers,
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: 'An error occurred' }));
    throw new Error(error.message || `HTTP error! status: ${response.status}`);
  }

  return response.json();
}

// Auth API
export const authApi = {
  login: async (email: string, password: string) => {
    return apiRequest<{ user: User; token: string }>('/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
  },
  
  register: async (name: string, email: string, password: string, password_confirmation: string) => {
    return apiRequest<{ user: User; token: string }>('/register', {
      method: 'POST',
      body: JSON.stringify({ name, email, password, password_confirmation }),
    });
  },
  
  logout: async () => {
    return apiRequest<{ message: string }>('/logout', {
      method: 'POST',
    });
  },
  
  getUser: async () => {
    return apiRequest<{ user: User }>('/user');
  },
};

// Products API
export const productsApi = {
  getAll: async (params?: { category?: string; sort?: string }) => {
    const query = new URLSearchParams(params as Record<string, string>).toString();
    return apiRequest<{ data: Product[] }>(`/products${query ? `?${query}` : ''}`);
  },
  
  getById: async (id: number) => {
    return apiRequest<{ data: Product }>(`/products/${id}`);
  },
};

// Cart API
export const cartApi = {
  get: async () => {
    return apiRequest<{ data: CartItem[] }>('/cart');
  },
  
  add: async (productId: number, quantity: number, size?: string, color?: string) => {
    return apiRequest<{ data: CartItem }>('/cart', {
      method: 'POST',
      body: JSON.stringify({ product_id: productId, quantity, size, color }),
    });
  },
  
  update: async (cartItemId: number, quantity: number) => {
    return apiRequest<{ data: CartItem }>(`/cart/${cartItemId}`, {
      method: 'PUT',
      body: JSON.stringify({ quantity }),
    });
  },
  
  remove: async (cartItemId: number) => {
    return apiRequest<{ message: string }>(`/cart/${cartItemId}`, {
      method: 'DELETE',
    });
  },
  
  clear: async () => {
    return apiRequest<{ message: string }>('/cart', {
      method: 'DELETE',
    });
  },
};

// Types
export interface User {
  id: number;
  name: string;
  email: string;
  avatar?: string;
  created_at: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
  reviews?: number;
  category: string;
  description?: string;
  sizes?: string[];
  colors?: string[];
}

export interface CartItem {
  id: number;
  product_id: number;
  product: Product;
  quantity: number;
  size?: string;
  color?: string;
}
