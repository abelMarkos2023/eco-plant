import { useState } from 'react'

import Navbar from './components/Navbar/Navbar'
import { Link } from 'react-router-dom'







function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <div className="home">
     <div className="container">
      <div className="container__left">
        <h3>Eco Planet Solutions</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos tempora aperiam beatae voluptatum rerum aliquam illum minus alias vero ad?
        </p>
        <Link to={'/product-list'} className='container__left-link'>
        Get Started
        </Link>
      </div>
      <div className="container__right">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem similique, molestias est ullam ipsum odit blanditiis architecto illum sint ducimus quis, quae rem. Quasi adipisci quis saepe eveniet voluptatibus, expedita dolores itaque autem, numquam necessitatibus sed tenetur nulla natus vel optio explicabo. Eveniet exercitationem voluptatum illo, suscipit, maiores porro veritatis odio repellendus enim totam amet ad possimus. Deleniti, repellendus voluptatem!
      </div>
     </div>
    </div>
    </>
  )
}

export default App
