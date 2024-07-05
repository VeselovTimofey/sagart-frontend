interface IAuthor {
  id: number;
  phone: string;
  first_name: string;
  last_name: string;
  middle_name: string;
  email: string;
  role: string[];
  nick_name: string;
  photo: string;
  videocard: string;
  biography: string;
  education: {
    type: string;
    level: string;
    institute: string;
  }[];
  gender: string;
  year_of_birth: number;
  place_of_birth: string;
  solo_shows: boolean;
  group_shows: boolean;
  collected_private_collectors: boolean;
  collected_major_institutions: boolean;
  winner_top_awards: boolean;
  social_networks: {
    name: string;
    account: string;
  }[];
  address: string;
  style_works: {
    name: string;
  }[];
}

interface IAuthorsState {
  authors: IAuthor[];
  isLoading: boolean;
  error: string | undefined;
}

export default IAuthorsState;
export type { IAuthor };
