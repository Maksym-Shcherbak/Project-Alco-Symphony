export function getQuantityOfCocktails() {
  let quantity = 0;
  if (window.innerWidth < 1280) {
    return (quantity = 8);
  } else {
    return (quantity = 9);
  }
}
