export interface Brand {
  id: number;
  name: string;
  image: string;
  description: string;
  instagram: string;
  slug: string;
}

export interface Product {
  id: number;
  name: string;
  image: string;
  productImages: [];
  category: string;
  size: string;
  description: string;
  color: string;
  price: number;
  condition: string;
  maintenance: string;
  material: string;
  brand: string;
  type: string;
  onSale: boolean;
  date: string;
  tags: [];
}

export interface CheckboxValues {
  [key: string]: boolean;
}
