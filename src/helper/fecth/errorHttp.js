const httpError = (error) => {
  if (error.response) {
    const status = error.response.status;
    const data = error.response.data;

    if (status === 404) {
      return data.Error;
    } else if (status === 401) {
      return data?.Error;
    } else {
      return data;
    }
  } else if (error.request) {
    return "No se recibió una respuesta del servidor: " + error.request;
  } else {
    return "Configurar la solicitud: " + error.message;
  }
};

export default httpError;
