export function getQuantityOfCocktails() {
  const quantity = {
    quantityOfCocktails: 0,
    quantityOfVisiblePages: 0,
  };
  if (window.innerWidth < 1280) {
    quantity.quantityOfCocktails = 8;
  } else {
    quantity.quantityOfCocktails = 9;
  }
  if (window.innerWidth < 768) {
    quantity.quantityOfVisiblePages = 4;
  } else {
    quantity.quantityOfVisiblePages = 6;
  }
  return quantity;
}
