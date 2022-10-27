import {useSession} from 'next-auth/react';
import {api} from '~/services/api';

export const useAxios = () => {
  const session = useSession();

  if (session.data) {
    api.defaults.headers.common.Authorization = `Bearer ${session.data.accessToken}`;
  }

  return api;
};
