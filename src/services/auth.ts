import { useQuery } from "@tanstack/react-query";
import { Account } from "next-auth";
import { getProviders } from "next-auth/react";

import { IUser } from "~/domains/user";
import { api } from "./api";

export interface IAuthResponse {
  user: IUser;
  accessToken: string;
}

export const handleAuth = async (account: Account) => {
  switch (account.provider) {
    case "google":
      return loginWithGoogle(account.id_token!);
    case "facebook":
      return loginWithFacebook(account.access_token!);
    // case "apple":
    //   return loginWithApple(token);
    default:
      return null;
  }
};

const loginWithGoogle = async (token: string) => {
  try {
    const { data } = await api.post<IAuthResponse>("/auth/google", {
      token,
    });
    return data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

const loginWithFacebook = async (token: string) => {
  try {
    const { data } = await api.post<IAuthResponse>("/auth/facebook", {
      token,
    });
    return data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

const loginWithApple = async (token: string) => {
  try {
    const { data } = await api.post<IAuthResponse>("/auth/apple", {
      token,
    });
    return data;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const useProviders = () => {
  return useQuery(["providers"], () => getProviders());
};
