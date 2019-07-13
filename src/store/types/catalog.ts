export namespace Catalog {

  export interface ProductMeta {
    id: string;
    name: string;
    tagline: string;
    thumbnail: string;
  }
  export interface Product extends ProductMeta {
    description: string;
    options: ProductOption[];
  }

  export interface ProductQuickView extends ProductMeta {
    price: string;
  }

  export interface ProductOption {
    id: string;
    description: string;
    price: number;
  }
}
