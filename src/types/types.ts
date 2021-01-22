//messagesReducer

export type InitialStateMessageType = {
    id: number
    message: string
  }
  
export type InitialStateDialogType = {
    id: number
    name: string
    messages: Array<InitialStateMessageType>
  }

//profileReducer

export type PostType = {
  id: number;
  message: string;
  likeCount: number;
};

export type ContactsType = {
  github: string;
  vk: string;
  facebook: string;
  instagram: string;
  twitter: string;
  website: string;
  youtube: string;
  mainlink: string;
};

export type PhotosType = {
  small: string | null;
  large: string | null;
};

export type ProfileType = {
  userId: number;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  contacts: ContactsType;
  photos: PhotosType;
};

//userReducer

export type UsersType = {
  id: number;
  name: string;
  status: string;
  photos: PhotosType;
};
