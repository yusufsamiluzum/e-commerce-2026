export interface ProductImage {
  id: number;
  productId: number;
  imageUrl: string;
  altText?: string;
  displayOrder: number;
  isPrimary: boolean;
}

export interface Product {
  id: number;
  sku: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number; // For the crossed-out price
  rating: number;
  reviewCount: number;
  imageUrl: string;
  images?: ProductImage[];
  badge?: {
    text: string; // e.g., 'New' or '-33%'
    type: 'new' | 'discount'; // Determines the color (blue vs. red)
  };
}
