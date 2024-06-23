// интерфейс запроса
interface RequestApi {
  method: 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE';
  headers: {
    'Content-Type': string;
    Authorization?: string;
  };
  body?: string;
}

// интерфейс ответа
interface ResponseApi {
  success: boolean;
  message: string;
}

export type { RequestApi, ResponseApi };
