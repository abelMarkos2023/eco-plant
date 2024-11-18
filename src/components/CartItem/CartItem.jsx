import './CartItem.css'
import Trash from '../../assets/trash.png'
import { useDispatch } from 'react-redux'
import { decreament, increament, removeItem } from '../../slices/cartSlice'

const CartItem = ({item}) => {
    const dispatch = useDispatch()

    const handleIncreament = () => {
        dispatch(increament(item.id))
    }
    const handleDecreaament = () =>{
        dispatch(decreament(item.id))
    }
    const remove = () => {
        dispatch(removeItem(item.id))
    }
  return (
    <div className="cart-item">
        <div className="img-container">
            <img src={item.image} alt="" />
        </div>
        <span>{item.title}</span>
        <span>${item.price}</span>
        <span>{item.quantity}</span>
        <span>${item.price * item.quantity}</span>
        <div className="cart-item-control">
            <button onClick={handleDecreaament}>-</button>
            <span>{item.quantity}</span>
            <button onClick={handleIncreament}>+</button>
        </div>
        <span className='trash' onClick={remove}>
            <img src={Trash} alt="" />
        </span>
    </div>
  )
}

export default CartItem