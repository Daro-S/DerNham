import { IUploadImage } from "./image";
import { IPromotion } from "./promotion";
import { IPaginate } from "./paginate";

export interface IVendor {
  id: number;
  uploadImage: IUploadImage;
  name: string;
  rating: string;
  reviews: number;
  createdAt: string;
  priceRange: string;
  isFavorite: number;
  vendorAmenity: IAmenity[];
  minPrice: string;
  maxPrice: string;
  latitude: string;
  longitude: string;
  distance: number;
  openingTime: IOpeningTime[];
  totalOfBooking: string;
  mealType: IMealType[];
  city: {
    id: number;
    name: string;
  };
  promotion: IPromotion | null;
  type: {
    id: number;
    name: string;
  };
}

export interface IAmenity {
  id: number;
  name: string;
}

export interface IOpeningTime {
  day: string;
  open: string;
  close: string;
  status: number;
}

export interface IMealType {
  id: number;
  name: string;
}

export interface IVendorQueryString {
  name?: string;
  limit?: number;
  page?: number;
  guest?: number;
  departureTime?: string;
  departureDate?: string;
  lat?: number;
  long?: number;
  zone?: number;
  orderBy?: "asc" | "desc";
}

export interface IVendorPagination extends IPaginate<IVendor> {}
