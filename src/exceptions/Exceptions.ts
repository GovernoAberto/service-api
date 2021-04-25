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

class VisualizationNotFound extends BaseError {
  code = 4;
  httpCode = 500;
  message = "A visualização não foi encontrada";
  data;

  constructor() {
    super();
  }
}

class DatasetNotFound extends BaseError {
  code = 5;
  httpCode = 500;
  message = "O conjunto não foi encontrado";
  data;

  constructor() {
    super();
  }
}

class FeedbackError extends BaseError {
  code = 5;
  httpCode = 500;
  message = "Erro ao gerar feedback";

  constructor() {
    super();
  }
}

export { 
  CityNotFound,
  QueryError,
  ConnectionApiError,
  VisualizationNotFound,
  DatasetNotFound,
  FeedbackError
};