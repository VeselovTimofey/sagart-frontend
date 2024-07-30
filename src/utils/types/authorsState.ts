import type { IAuthor } from './user';

interface IAuthorsState {
  authors: IAuthor[];
  isLoading: boolean;
  error: string | undefined;
}

export default IAuthorsState;
export type { IAuthor };
