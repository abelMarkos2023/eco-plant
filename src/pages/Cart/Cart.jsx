import './Cart.css'
import Navbar from '../../components/Navbar/Navbar'
import { useSelector } from 'react-redux'
import CartItem from '../../components/CartItem/CartItem'
const Cart = () => {
  const cart = useSelector(state => state.cart)
  const totalPrice = Number(cart.items.reduce((acc, item) => acc + (item.price * item.quantity), 0));
  const tax = (totalPrice * 12 / 100).toFixed(2);
  const delivery = 20;
  const total = Number(totalPrice) + Number(tax) + Number(delivery)
  return (
    <>
    <Navbar />
    <div className="cart">
       
      <h4 className='cart-title'>Your Cart</h4>
      <div className="cart-list-header">
        <span>Image</span>
        <span>Title</span>
        <span>Price</span>
        <span>Quantity</span>
        <span>subTotal</span>
        <span>Control</span>
        <span>Remove</span>
      </div>
      <div className="cart-list-body">
        {
          cart.items.length === 0 ? (
            <p className='no-cart'>No Items In The Cart</p>
          ) : (
            cart.items.map( item => <CartItem item={item} key = {item.id}/>)
          )
        }
      </div>

     {
      cart.items.length > 0 && (
        <>
        <div className="cart-detail">
     <div className="cart-total">
        <div className="subtotal-price">
          <span>subTotal:</span>
          <span>${totalPrice}</span>
        </div>
        <div className="tax-price">
          <span>Tax:</span>
          <span>${tax}</span>
        </div>
        <div className="delivery-price">
          <span>Delivery:</span>
          <span>${delivery}</span>
        </div>
        <div className="total-price">
          <span>Total Price: </span>
          <span>${total}</span>
        </div>
      </div>
     </div>
        </>
      )
     }
    </div>
    </>
  )
}

export default Cart