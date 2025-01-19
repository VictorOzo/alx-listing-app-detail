export interface Address {
  city: string;
  country: string;
}

export interface Review {
  avatar: string;
  name: string;
  rating: number; // Example: 4.5
  comment: string;
}

export interface PropertyProps {
  id: string;
  name: string;
  image: string; // Main image of the property
  additionalImages?: string[]; // Array of additional images
  rating: number; // Example: 4.5
  price: number; // Nightly price
  description: string;
  address: Address;
  category: string[]; // Amenities and services (e.g., ["Wi-Fi", "Parking"])
  reviews: Review[]; // Array of reviews
}
