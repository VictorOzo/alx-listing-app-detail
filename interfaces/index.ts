export interface Address {
  city: string;
  country: string;
}

export interface Review {
  avatar: string;
  name: string;
  rating: number; 
  comment: string;
}

export interface PropertyProps {
  id: string;
  name: string;
  image: string; 
  additionalImages?: string[]; 
  rating: number;
  price: number; 
  description: string;
  address: Address;
  category: string[];
  reviews: Review[];
}
