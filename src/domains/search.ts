import { AutocompleteItem } from "@mantine/core";
import { IUploadImage } from "./image";

export interface ISearchSuggest extends AutocompleteItem {
  id: number;
  name: string;
  type: SuggestType;
  uploadImage: IUploadImage;
}

export enum SuggestType {
  VENDOR = 1,
  ZONE = 2,
  CITY = 3,
}
