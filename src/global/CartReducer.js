export const CartReducer = (state, action) => {
  const { ShoppingCart, TotalPrice, qty } = state;
  let product;
  let index;
  let UpdatePrice;
  let UpdateQty;

  switch (action.type) {
    case "Add_to_Cart":
      const check = ShoppingCart.find((product) => product.id === action.id);
      if (check) {
        return state;
      } else {
        product = action.product;
        product["qty"] = 1;
        UpdateQty = qty + 1;
        UpdatePrice = TotalPrice + product.price;
        return {
          ShoppingCart: [product, ...ShoppingCart],
          TotalPrice: UpdatePrice,
          qty: UpdateQty,
        };
      }
      break;
    case "INC":
      product = action.cart;
      product.qty = product.qty + 1;
      UpdatePrice = TotalPrice + product.price;
      UpdateQty = qty+1;
      index = ShoppingCart.findIndex((cart) => cart.id === action.id);
      ShoppingCart[index] = product;
      return {
        ShoppingCart: [...ShoppingCart],
        TotalPrice: UpdatePrice,
        qty: UpdateQty,
      };

      break;
    case "DEC":
      if (qty > 1) {
        product = action.cart;
        product.qty = product.qty - 1;
        UpdatePrice = TotalPrice - product.price;
        UpdateQty = qty-1;
        index = ShoppingCart.findIndex((cart) => cart.id === action.id);
        ShoppingCart[index] = product;
        return {
          ShoppingCart: [...ShoppingCart],
          TotalPrice: UpdatePrice,
          qty: UpdateQty,
        };
      } else {
        return state;
      }
      break;

    case "DELETE":
      product = action.cart;
      const Filtered = ShoppingCart.filter(
        product => product.id !== action.id
      );

      UpdateQty = qty - product.qty;
      UpdatePrice = TotalPrice - product.price * product.qty;

      return {
        ShoppingCart: [...Filtered],
        TotalPrice: UpdatePrice,
        qty: UpdateQty,
      };

    default:
      return state;
  }
};
