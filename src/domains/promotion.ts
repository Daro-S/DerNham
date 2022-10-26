import { IUploadImage } from "./image";
export interface IPromotion {
  id: number;
  name: string;
  amount: number;
  toDate: string;
  fromDate: string;
  minPrice: number;
  amountType: PromotionType;
}

export enum PromotionType {
  Amount = 1,
  Percentage = 2,
}

export interface IPromotionBanner {
  id: number;
  title: string;
  uploadImage: IUploadImage;
}
