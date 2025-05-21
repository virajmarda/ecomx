export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  discountPrice?: number;
  category: string;
  brand: string;
  images: string[];
  rating: number;
  reviewCount: number;
  inStock: boolean;
  freeShipping: boolean;
  isNew: boolean;
  featured: boolean;
  features?: string[];
};