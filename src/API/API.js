import { API_BASE_URL } from "./paths";

export class Api {
  static request(
    path,
    params = {
      method: "GET",
    }
  ) {
    return fetch(`${API_BASE_URL}/${path}`, params).then((response) =>
      response.json()
    );
  }
  static get(path) {
    return Api.request(path);
  }

  static post(path, body) {
    return Api.request(path, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  }

  static patch(path, id, body) {
    return Api.request(`${path}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
  }
  static delete(path) {
    return Api.request(path, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
