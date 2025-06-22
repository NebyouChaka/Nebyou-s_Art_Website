export interface Artwork {
  id: string;
  title: string;
  medium: string;
  dimensions: string;
  year: number;
  price: number;
  imageUrl: string;
  description: string;
  isSold: boolean;
  isFeatured?: boolean;
}

export interface Exhibition {
  id: string;
  title: string;
  description: string;
  location: string;
  startDate: string;
  endDate: string;
  imageUrl: string;
  type: 'solo' | 'group';
  url?: string;
}