import { useState } from "react";
import "./Cart.css"
function Cart () {
    const json_cart = JSON.parse(localStorage.getItem("cart"));
    const [cart,setCart] = useState(json_cart ?? []);
    let total = 0;
    const handlerChange = (e) => {
        const nam = e.target.name;
        const val = e.target.value;
        setCart((prev) => {
          const prevState = [...prev];
          prevState[nam].quanlity = val;
          const jsonCart = JSON.stringify(prevState);
          localStorage.setItem("cart", jsonCart);
          return prevState;
        });
      }; 
    const deleteItem = (id) => {
      console.log(id);
      

      setCart((prev)=>{
        let ar = [];
        const  prevState = [...prev];
        ar= prevState.filter(item => item.id_phone !== id);
        const jsonCart = JSON.stringify(ar);
        localStorage.setItem("cart",jsonCart);
        return ar;
      })
    }
     return(
         <>
         <h1>Shopping Cart</h1>

        <div className="shopping-cart">

  <div className="column-labels">
    <label className="product-image">Image</label>
    <label className="product-details">Product</label>
    <label className="product-price">Price</label>
    <label className="product-quantity">Quantity</label>
    <label className="product-removal">Remove</label>
    <label className="product-line-price">Total</label>
  </div>
  {cart.map((prduct,index) => { 
    total += prduct.price_phone * cart[index].quanlity;
     return (
       <div key={index} className="product">
         <div className="product-image">
           <img src={prduct.img} />
         </div>
         <div className="product-details">
           <p className="product-description">{prduct.name_phone}</p>
         </div>
         <div className="product-price">{prduct.price_phone}</div>
         <div className="product-quantity">
           <input
             name={index}
             type="number"
             value={cart[index].quanlity}
             min = "1"
             max = "10"
             onChange={handlerChange}
           />
         </div>
         <div className="product-removal">
           <button className="remove-product" onClick={() => {deleteItem(prduct.id_phone)}}>Remove</button>
         </div>
         <div className="product-line-price">
           {prduct.price_phone * cart[index].quanlity}
         </div>
       </div>
     );
})

}

  <div className="totals">
    <div className="totals-item">
      <label>Subtotal</label>
      <div className="totals-value" id="cart-subtotal">{total}</div>
    </div>
  </div>
      
  <button className="checkout">Checkout</button>

</div>
         </>
     )
}
export default Cart;