interface INewsSubscriptionState {
  subscribe: {
    email: string;
    agreement: false;
  };
  isLoading: boolean;
  error: string | undefined;
  success: string;
}

// TODO: Moving this interface to a separate file
interface IButtonChange {
  (value: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void;
}

// TODO: Moving this interface to a separate file
interface ICheckboxChange {
  (value: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
}

export default INewsSubscriptionState;
export type { IButtonChange, ICheckboxChange };
