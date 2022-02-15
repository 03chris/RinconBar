import './Menu.css'
import { useEffect, useState } from 'react'
import { getProducts } from '../../utilities/mock'
import Cards from '../../components/Cards/Cards'
import { Link } from 'react-router-dom'

const Menu = () => {
  const [menu, setMenu] = useState([])

  useEffect(()=>{
    getProducts
      .then(menu=>{
        const featured = menu.filter(e => e.featured === true)
        setMenu(featured)
      })
      .catch(err => console.log(err))
  }, [])    

    return (
        <div className="menu container-fluid" id="menu">
          <h1 className="title-menu" style={{marginTop: '80px'}}>MENÚ</h1> 
          <h1 className='sub-title'>NUESTROS DESTACADOS</h1>
          <div className='cards row'>
            <Cards menu={menu} key={menu.id}/>
          </div>
          <Link className="btn-menu" to={`/all`} style={{marginBottom: "20px"}}>CARTA</Link>
        </div>
    )
}

export default Menu
