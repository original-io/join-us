
import products from '../api/products';
import colors from '../api/colors';

export function findProductById(id = 1) {
  return products.find((item) => item.id === id);
}

export function findColorById(id = 1) {
  return colors.find((item) => item.id === id);
}