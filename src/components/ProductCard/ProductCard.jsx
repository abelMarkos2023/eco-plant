import { useDispatch, useSelector } from 'react-redux'
import './ProductCard.css'
import { addItem } from '../../slices/cartSlice';

const ProductCard = ({title,desc,price,image,id}) => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart)

  const handleAddToCart = () => {
    dispatch(addItem({title,price,desc,image,id}))
  }
  return (
    <div className="card">
        <div className="img-container">
        <img src={image} alt="" />
        </div>
        <div className="text-container">
            <h4>{title}</h4>
            <p>{desc}</p>
            <h3>${price}</h3>
            <button onClick = {handleAddToCart} disabled={ cart.items.filter(item => item.id == id).length > 0}>
              {
                cart.items.filter(item => item.id == id).length > 0 ? 'Already In Cart' : 'Add To Cart'
              }
            </button>
        </div>
    </div>
  )
}

export default ProductCard