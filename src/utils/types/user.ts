export type IUserRole = 'author' | 'buyer';

export interface IUser {
  id: number;
  phone: string;
  first_name: string;
  last_name: string;
  middle_name: string;
  email: string;
  role: Array<IUserRole>;
}

interface IAuthorExtras {
  nick_name: string | null;
  photo: string | null;
  videocard: string | null;
  biography: string | null;
  education: Array<{
    type: string;
    level: 'Среднее' | 'Высшее' | 'Профессиональное' | 'Специальное';
    institute: string;
  }> | null;
  gender: 'male' | 'famale' | null;
  year_of_birth: number | null;
  place_of_birth: string | null;
  solo_shows: boolean;
  group_shows: boolean;
  collected_private_collectors: boolean;
  collected_major_institutions: boolean;
  winner_top_awards: boolean;
  social_networks: Array<{
    name: string;
    account: string;
  }> | null;
  address: string | null;
  style_works: Array<{ name: string }> | null;
}

export interface IAuthor extends IUser, IAuthorExtras {}

interface IBuyerExtras {
  interests: string[] | null;
}

export interface IBuyer extends IUser, IBuyerExtras {}

export interface ICredentialsSignUp extends Omit<IUser, 'id' | 'role'> {
  password: string;
}

export interface ICredentialsSignIn
  extends Pick<ICredentialsSignUp, 'email' | 'password'> {}
