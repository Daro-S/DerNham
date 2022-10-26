import {useQuery} from '@tanstack/react-query';
import {INotification} from '~/domains/user';

const notifications: INotification[] = [
  {
    content: 'You booking to [xxx] have been confirmed',
    heading: '',
    createdAt: new Date().toISOString(),
    data: {
      id: 1,
      type: 1,
    },
    profile: {
      blurhash: 'dsa',
      filename: 'ds',
      path: '/images/logo.png',
    },
  },
  {
    content: 'You booking to [xxx] have been confirmed',
    heading: '',
    createdAt: new Date().toISOString(),
    data: {
      id: 1,
      type: 1,
    },
    profile: {
      blurhash: 'dsa',
      filename: 'ds',
      path: '/images/logo.png',
    },
  },
  {
    content: 'You booking to [xxx] have been confirmed',
    heading: '',
    createdAt: new Date().toISOString(),
    data: {
      id: 1,
      type: 1,
    },
    profile: {
      blurhash: 'dsa',
      filename: 'ds',
      path: '/images/logo.png',
    },
  },
];

export const useNotifications = () => {
  return useQuery(['notifications'], () => notifications);
};
