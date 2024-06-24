interface INewsSubscriptionState {
  subscribe: {
    email: string;
    agreement: false;
  };
  isLoading: boolean;
  error: string | undefined;
}

export default INewsSubscriptionState;
