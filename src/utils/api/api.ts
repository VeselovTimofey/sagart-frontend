import APIPATH from '../constant/constantsApi';

// Запрос на новостную подписку
function postNewsSubscription(email: string): Promise<Response> {
  return fetch(`${APIPATH}/newsSubscription`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email,
    }),
  });
}

export default postNewsSubscription;
