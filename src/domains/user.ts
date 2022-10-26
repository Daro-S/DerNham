export interface INotificationData {
  id: number;
  type: number;
}

export interface INotification {
  heading: string;
  content: string;
  createdAt: string;
  data: INotificationData;
  profile: {
    blurhash: string;
    path: string;
    filename: string;
  };
}

export enum NotificationType {
  Booking = 1,
  Message = 2,
}

export interface IUser {
  id: string;
  email: string;
  status: boolean;
  isNew: boolean;
  profile: IProfile;
}

export interface IProfile {
  firstName: string;
  lastName: string;
  gender: string | null;
  phoneNumber: string;
  address: string | null;
  dateOfBirth: string | null;
  cityId: number | null;
  uploadImage: {
    id: number;
    blurhash: string;
    path: string;
    filename: string;
  };
}
