import { environment } from '../../environments/environment.development';

const domain = environment.Domain;

export const API_URLS = {
  getAllProducts: `${domain}products`,
  getSingleProduct: `${domain}products`,
  addProduct: `${domain}products`,
  deleteSingleProduct: `${domain}products`,

  login: `${domain}auth/login`,
  search:'https://dummyjson.com/products/search?q='
};