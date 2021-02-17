export interface UserType {
  externalId: string;
  externalProvider: string;
  name: string;
  avatar: string;
}

export interface AuthStateType {
  authenticated: Boolean;
  authError: Boolean;
  user: UserType | null;
}

export interface AuthActionType {
  type: string;
  payload: string | UserType;
}
