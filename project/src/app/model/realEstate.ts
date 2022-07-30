import {Price} from "./price";
import {Type} from "./type";

export interface RealEstate {
  length: number;
  id: string;
  title: string;
  address: string;
  city: string;
  area: string;
  price: Price;
  avatar: string;
  images: string;
  type: Type;
  description: string;
}
