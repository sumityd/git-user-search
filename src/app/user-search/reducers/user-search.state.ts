export interface User {
  userData: null | undefined | any[];
  userCount: null | undefined | number;
  error: null | undefined | string;
  message: null | undefined | string;
}

export const intialUserState: User = {
  userData: [],
  userCount: 0,
  error: "",
  message: "",
};
