import APIPATH from '../constant/constantsApi';

interface IApi {
  endPath: string;
  method: 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE';
  headers: {
    'Content-Type': string;
    Authorization?: string;
  };
  values?: string | object;
}

// News subscription request
function postNewsSubscription({
  values,
  endPath,
  method,
  headers,
}: IApi): Promise<Response> {
  return fetch(APIPATH + endPath, {
    method,
    headers,
    body: JSON.stringify({
      values,
    }),
  });
}

export default postNewsSubscription;
