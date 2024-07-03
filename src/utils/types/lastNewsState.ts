interface INews {
  title: string;
  link: string;
  imageUrl: string;
  id: string;
}

interface ILastNewsState {
  news: INews[];
  currentNews: {
    value: 0 | 1 | 2;
  };
  isLoading: boolean;
  error: string | undefined;
}

interface ISliderChange {
  (event: Event, value: number | number[], activeThumb: number): void;
}

export default ILastNewsState;
export type { ISliderChange, INews };
