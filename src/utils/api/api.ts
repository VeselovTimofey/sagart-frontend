import APIPATH from '../constant/constantsApi';

import type { ICredentialsSignIn, ICredentialsSignUp } from '../types';

interface IApi extends RequestInit {
  endPath: string;
}

async function api({ endPath, ...options }: IApi): Promise<Response> {
  return fetch(APIPATH + endPath, {
    ...options,
  });
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
    endPath: '/user',
    headers: new Headers({ 'Content-Type': 'application/json' }),
    body: JSON.stringify(credentials),
  });
}

// Sign In request
export async function signInApi(credentials: ICredentialsSignIn) {
  return api({
    method: 'GET',
    endPath: `/user?email=${credentials.email}&password=${credentials.password}`,
    headers: new Headers({ 'Content-Type': 'application/json' }),
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

// All products request
export async function getAllProducts() {
  return api({
    method: 'GET',
    endPath: '/Product',
    headers: new Headers({ 'Content-Type': 'application/json' }),
  });
}
