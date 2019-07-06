export namespace Catalog {
  export interface Product {
    id: string;
    name: string;
    tagline: string;
    description: string;
    options: ProductOption[];
  }

  export interface ProductOption {
    id: string;
    description: string;
    price: number;
  }
}
