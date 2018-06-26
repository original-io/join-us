import submenus from '../api/submenu';
import products from '../api/products';
import colors from '../api/colors';

export function findSubmenuById(id = 1) {
  return submenus.find((item) => item.id === id);
}

export function findProductById(id = 1) {
  return products.find((item) => item.id === id);
}

export function findColorById(id = 1) {
  return colors.find((item) => item.id === id);
}