import { IFavorite } from "./../domains/user";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { INotification } from "~/domains/user";
import { useAxios } from "~/hooks/useAxios";
import { AxiosError } from "axios";
import { api } from "./api";

const notifications: INotification[] = [
  {
    content: "You booking to [xxx] have been confirmed",
    heading: "",
    createdAt: new Date().toISOString(),
    data: {
      id: 1,
      type: 1,
    },
    profile: {
      blurhash: "dsa",
      filename: "ds",
      path: "/images/logo.png",
    },
  },
  {
    content: "You booking to [xxx] have been confirmed",
    heading: "",
    createdAt: new Date().toISOString(),
    data: {
      id: 1,
      type: 1,
    },
    profile: {
      blurhash: "dsa",
      filename: "ds",
      path: "/images/logo.png",
    },
  },
  {
    content: "You booking to [xxx] have been confirmed",
    heading: "",
    createdAt: new Date().toISOString(),
    data: {
      id: 1,
      type: 1,
    },
    profile: {
      blurhash: "dsa",
      filename: "ds",
      path: "/images/logo.png",
    },
  },
];

export const useNotifications = () => {
  return useQuery(["notifications"], () => notifications);
};

export const getFavorite = async () => {
  return api.get<IFavorite>(`/user/favorite`).then((res) => res.data);
};

export const useFavorite = (onSuccess: any, onError: any) => {
  return useQuery<IFavorite, AxiosError>(["Favorite"], getFavorite, {
    onSuccess,
    onError,
  });
};

export const addToFavorite = async (id: number) => {
  try {
    return await api.post<IFavorite>(`/user/favorite`, { vendorId: id });
  } catch (error: any) {
    console.log(error.message);
  }
};

export const useAddToFavorite = () => {
  const queryClient = useQueryClient();
  return useMutation(addToFavorite, {
    onSuccess: () => {
      queryClient.invalidateQueries(["Favorite"]);
      queryClient.invalidateQueries(["vendors"]);
    },
  });
};
