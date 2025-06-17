class Api {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async request(options ={}) {
    const headers = {
      'Content-Type': 'application/json',
      ...options.headers
    };

    const getToken = localStorage.getItem('token');

    if(getToken) {
      headers['Aythorization'] = `Bearer ${getToken}`;
    };

    const response = await fetch(`${this.baseUrl}`, {
      ...options,
      headers
    });

    if(!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Произошла ошибка');
    };

    return response.json();
  }
}