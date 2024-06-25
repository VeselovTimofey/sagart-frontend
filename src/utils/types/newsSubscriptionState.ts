interface INewsSubscriptionState {
  subscribe: {
    email: string;
    agreement: false;
  };
  isLoading: boolean;
  error: string | undefined;
}

interface IButtonChange {
  (value: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void;
}

interface ICheckboxChange {
  (value: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
}

export default INewsSubscriptionState;
export type { IButtonChange, ICheckboxChange };
