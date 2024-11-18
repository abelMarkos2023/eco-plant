import './Navbar.css'
import { Link } from 'react-router-dom'
import Logo from '../../assets/ecoPlanet.png'
import Cart from '../../assets/logo.png'
import { useSelector } from 'react-redux'
const Navbar = () => {
  const cart = useSelector(state => state.cart)
  return (
    <header className="navbar">
       <nav className="navbar__nav">
       <div className="navbar__brand">
       <Link to={'/'} className='navbar__logo'>
            <img src={Logo} alt="" />
        </Link>
        <div className="brand__text">
          <span>Eco-Plant</span>
          <span>Nurture Nature, One Plant at a Time 🌱</span>
        </div>
       </div>
        <Link to='/cart' className='navbar__cart'>
        <img src= {Cart}/>
        <div className="badge">{cart.items.reduce((acc,current) => acc + current.quantity,0)}</div>
        </Link>

       </nav>
    </header>
  )
}

export default Navbar