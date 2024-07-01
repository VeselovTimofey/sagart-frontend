import APIPATH from '../constant/constantsApi';

import type { ICredentialsSignUp } from '../types';

interface IApi extends RequestInit {
  endPath: string;
}

async function api({ endPath, ...options }: IApi): Promise<Response> {
  return fetch(APIPATH + endPath, {
    ...options,
  }).then((responce) => responce.json());
}

// News subscription request
export async function postNewsSubscription(email: string) {
  return api({
    method: 'POST',
    endPath: '/newsSubscription',
    headers: new Headers({ 'Content-Type': 'application/json' }),
    body: JSON.stringify({
      email,
    }),
  });
}

// Sign Up request
export async function signUpApi(credentials: ICredentialsSignUp) {
  return api({
    method: 'POST',
    endPath: '/signUp',
    headers: new Headers({ 'Content-Type': 'application/json' }),
    body: JSON.stringify(credentials),
  });
}

// Last news request
export async function getLastNews() {
  return api({
    method: 'GET',
    endPath: '/lastNews',
    headers: new Headers({ 'Content-Type': 'application/json' }),
  });
}
