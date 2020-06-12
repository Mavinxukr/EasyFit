class Api {
  constructor() {
    this.API_MAIN = 'http://site.laragrid.online/api/';
    this.headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
  }

  async login(url, body) {
    const response = await fetch(`${this.API_MAIN}${url}`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(body),
    });
    if (response) {
      const json = await response.json();
      return json;
    }
    console.log(response);
  }
}

export const api = new Api();
