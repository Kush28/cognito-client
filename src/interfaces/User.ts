import { Boolean } from "@ungap/global-this";

export interface UserType {
  id: string;
  externalId: string;
  externalProvider: string;
  name: string;
  avatar: string;
}

export interface AuthStateType {
  loading: Boolean;
  authenticated: Boolean;
  authError: Boolean;
  user: UserType | null;
}

export interface AuthActionType {
  type: string;
  payload: string | UserType;
}
