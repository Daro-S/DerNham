import {AxiosError} from 'axios';
import {useQuery, UseQueryOptions} from '@tanstack/react-query';
import {ISearchSuggest} from '~/domains/search';
import {api} from './api';

const getSearch = (name: string) => {
  return api.get(`/home/search?name=${name}`).then(res => res.data);
};

export const useSearch = (
  name: string,
  opts?: UseQueryOptions<ISearchSuggest[], AxiosError>,
) => {
  return useQuery<ISearchSuggest[], AxiosError>(
    ['search', name],
    async () => getSearch(name),
    {
      select(data) {
        return data.map(item => ({...item, value: item.name}));
      },
      ...opts,
    },
  );
};
