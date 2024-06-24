export interface IProduct {
  id: number;
  aricle_num: number;
  name: string;
  descrition_id: number;
  author_id: number;
  make_year: string;
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
