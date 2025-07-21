export interface Pizza {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  ingredients: string[];
  isPopular?: boolean;
}

export interface CartItem extends Pizza {
  quantity: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
}