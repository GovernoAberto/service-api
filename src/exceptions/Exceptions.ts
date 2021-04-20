import BaseError from "./BaseError";

export default class CityNotFound extends BaseError {
  code = 1;
  httpCode = 500;
  message = "Cidade não encontrada";
}

export { 
  CityNotFound 
};