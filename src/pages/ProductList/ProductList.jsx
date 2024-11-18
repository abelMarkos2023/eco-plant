import { useSelector } from 'react-redux'
import Navbar from '../../components/Navbar/Navbar'
import './ProductList.css'
import ProductCard from '../../components/ProductCard/ProductCard';

const ProductList = () => {
  const products = useSelector(state => state.products);

  console.log(products)
  return (
   <div className="product-list">
    <Navbar />
    <div className="list">
      <h3 className="list-title">
        Browse Our Finnest Collection
      </h3>
      <div className="list-items">
        {
          products.map(pro => (
            <ProductCard key={pro.id} {...pro}/>
          ))
        }
      </div>
    </div>
   </div>
  )
}

export default ProductList