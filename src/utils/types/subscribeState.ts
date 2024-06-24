interface ISubscribeState {
  subscribe: {
    email: string,
    agreement: false,
  },
  isLoading: boolean,
  error: string | undefined,
}

export default ISubscribeState;
