import BaseError from "./BaseError";

class CityNotFound extends BaseError {
  code = 1;
  httpCode = 404;
  message = "Cidade não encontrada";
}

class QueryError extends BaseError {
  code = 2;
  httpCode = 500;
  message = "Ocorreu um erro ao executar a consulta";
  data;

  constructor(data) {
    super();
    this.data = data;
  }
}

class ConnectionApiError extends BaseError {
  code = 3;
  httpCode = 500;
  message = "Ocorreu um erro ao se conectar com a API";
  data;

  constructor(data) {
    super();
    this.data = data;
  }
}

export { 
  CityNotFound,
  QueryError,
  ConnectionApiError
};