export const CartReducer = (state, action)=>{
    const {ShoppingCart,TotalPrice,qty} = state
    let product;
    let index;
    let UpdatePrice;
    let UpdateQty;

    switch (action.type) {
        case 'Add_to_Cart':
             const check = ShoppingCart.find(product=> product.id === action.id);
             if(check){
                return state;     
             }else{
                product= action.product;
                product['qty'] = 1;
                UpdateQty = qty+1;
                UpdatePrice = TotalPrice + product.price
                return {ShoppingCart:[product,...ShoppingCart],TotalPrice:UpdatePrice,qty:UpdateQty}
             }
            break;
    

            default:
                return state;
      
    }

}