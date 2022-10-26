import { IPromotionBanner } from "./../domains/promotion";
import { AxiosError } from "axios";
import { useQuery } from "@tanstack/react-query";

import { useAxios } from "~/hooks/useAxios";
import { IVendorPagination, IVendorQueryString } from "~/domains/vendor";
import { serialize } from "~/utils";
import { api } from "./api";

export const getVendors = async () => {
  return api.get<IVendorPagination>(`/vendor`).then((res) => res.data);
};

export const useVendors = (query?: IVendorQueryString) => {
  const apiHook = useAxios();

  return useQuery<IVendorPagination, AxiosError>(["vendors"], async () => {
    return apiHook.get(`/vendor${serialize(query)}`).then((res) => res.data);
  });
};

export const getPromotionBanners = async () => {
  return api
    .get<IPromotionBanner>(`/announcement/promotion/banner`)
    .then((res) => res.data);
};

export const usePromotionBanner = () => {
  const apiHook = useAxios();

  return useQuery<IPromotionBanner[], AxiosError>(
    ["promotionBanner"],
    async () => {
      return apiHook
        .get(`/announcement/promotion/banner`)
        .then((res) => res.data);
    }
  );
};
