interface IProduct {
  id: string;
  aricle_num: number;
  name: string;
  descrition_id: string;
  author_id: string;
  make_year: number;
  size: string;
  edition: string;
  auth_signature: boolean;
  preview_photo: string;
  photo_gallery: { photo: string }[];
  ishorizontal: boolean;
  genre: string;
  type: string;
  category: string;
  status: string;
  price: number;
}

interface IProductsState {
  products: IProduct[];
  isLoading: boolean;
  error: string | undefined;
}

export default IProductsState;
export type { IProduct };
