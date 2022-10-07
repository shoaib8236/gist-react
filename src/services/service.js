import { api } from "./apiService";
export const service = {
  getAllGist: (username) => {
    return api.invoke("GET", `/users/${username}/gists`);
  },
  getGistById: (id) => {
    return api.invoke("GET", `/gists/${id}`);
  },
};

export default api;
