const handleRequestError = (error) => {
  if (error.response) {
    const status = error.response.status;
    const data = error.response.data;

    if (status === 404) {
      return data.Error;
    } else if (status === 401) {
      return data?.Error;
    } else {
      if (status == 400 && (typeof data == "array" || "object") && "With" in data) {
        return data.Error[0]?.msg != "Invalid value"
          ? data.Error[0]?.msg
          : data.Error[0]?.path + " no cumple con los requerimientos solicitados.";
      }
      return data.Error;
    }
  } else if (error.request) {
    return "No se recibió una respuesta del servidor: " + error.request;
  } else {
    return "Configurar la solicitud: " + error.message;
  }
};

export default handleRequestError;
