export interface IUser {
  id: number;
  login: string;
  phone: string;
  first_name: string;
  last_name: string;
  email: string;
  // TODO: Discuss and confirm
  role: 'author' | 'buyer'[];
  // pass: string;
}

interface IAuthorExtras {
  nick_name: string | null;
  photo: string | null;
  /** Format: uri */
  videocard: string | null;
  // TODO: Discuss and change naming
  biography: string | null;
  education: string | null;
  /** @enum {string} */
  gender: 'male' | 'famale' | null;
  year_of_birth: number | null;
  place_of_birth: string | null;
  /** Format: uri */
  // TODO: Discuss and confirm
  social_network:
    | {
        name: string;
        link: string;
      }[]
    | null;
}

export interface IAuthor extends IUser, IAuthorExtras {}

// TODO: Discuss and confirm
interface IBuyerExtras {
  interests: string[] | null;
}

export interface IBuyer extends IUser, IBuyerExtras {}

// TODO: Discuss and confirm
export interface ICredentialsSignUp
  extends Omit<IUser, 'login' | 'id'>,
    Partial<IAuthorExtras>,
    Partial<IBuyerExtras> {
  password: string;
}

// TODO: Discuss and confirm
export interface ICredentialsSignIn
  extends Pick<ICredentialsSignUp, 'email' | 'password'> {}
