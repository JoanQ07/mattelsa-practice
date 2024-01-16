import httpError from "./errorHttp";
import axios from "axios";

export const _fetchApi = ({ url, data = {}, params = {}, headers = {}, method = "GET", loader = true }) => {
  const baseUrl = `http://localhost:3001/${url}`;
  const config = {
    url: baseUrl,
    method,
    headers: {
      ...headers,
        // Authorization: `Bearer ${localStorage.token}`,
    },
    data, //Enviar body
    params, //Usarlo para peticiones GET
    responseType: "json",
    validateStatus: function (status) {
      return status >= 200 && status < 400;
    },
  };

  return new Promise(async (resolve, reject) => {
    axios(config)
      .then((res) => {
        resolve(res.data);
        console.log("💠  res.data--> ", res.data)
      })
      .catch((error) => {
        reject(httpError(error));
      })
      .finally(() => console.log("👌Finish fech"));
  });
};
