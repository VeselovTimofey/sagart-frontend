import APIPATH from '../constant/constantsApi';

// Запрос на новостную подписку
function postSubscribe(email: string):Promise<Response> {
  return fetch(`${APIPATH}/subscribe`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email,
    }),
  });
}

export default postSubscribe;
