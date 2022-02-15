import './MenuContainer.css'
import { useEffect, useState } from 'react'
import { getProducts } from '../../utilities/mock'
import Cards from '../../components/Cards/Cards'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';

const MenuContainer = () => {
    const [menu, setMenu] = useState([])
    const [loading, setLoading] = useState(true)

    const {type} = useParams()

    useEffect(()=>{
        getProducts
        .then(menu=>{
            if(type){
                const typeOf = menu.filter(menu=> menu.type === type)
                setMenu(typeOf)
            }else(
                setMenu(menu)
            )
        })
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
    }, [type])    

    return (
        <>
            <div className="menu carta container-fluid">
                <h1 className="title-menu text-white" style={{marginTop: '140px'}}>CARTA</h1> 
                <div className="buttons-categories mb-3">
                    <Link className='btn btn-outline-light' to={`/all`}>Todos</Link>
                    <Link className='btn btn-outline-light' to={`/categorias/hamburguesas`}>Hamburguesas</Link>
                    <Link className='btn btn-outline-light' to={`/categorias/milanesas`}>Milanesas</Link>
                    <Link className='btn btn-outline-light' to={`/categorias/parapicar`}>Para Picar</Link>
                    <Link className='btn btn-outline-light' to={`/categorias/bebidas`}>Bebidas</Link>
                </div>
                { 
                loading ? 
                    <div className="d-flex justify-content-center m-5">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden"></span>
                        </div>
                    </div> 
                : 
                    <div className='cards row bg-white'>
                        <h1 className='sub-title text-black mt-2'>{type}</h1>
                        <Cards menu={menu} key={menu.id}/>
                    </div>
                }
            </div>
            <Footer />
        </>
    )
};

export default MenuContainer;
