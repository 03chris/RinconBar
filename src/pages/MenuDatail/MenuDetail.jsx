import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import { getProducts } from "../../utilities/mock";
import CardDetail from "./CardDetail"

const MenuDetail = () => {
    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(false)
    const {id} = useParams()

    useEffect(() => {
        getProducts
        .then(res => {
            if(id){
                const idProduct = res.filter(e=> e.id === id)
                setItem(idProduct)
            }else{
                setItem(res)
            }
        })
        .finally(()=> setLoading(false))
    }, [id]);
    

  return(
    <>
      <div className="menu detail container-fluid" style={{marginTop: '140px'}}>
        { 
          loading ? 
            <div className="d-flex justify-content-center m-5">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden"></span>
                </div>
            </div> 
          : 
            <div className='cards row bg-white'>
              <CardDetail item={item} key={item.id}/>
            </div>
        }
      </div>
      <Footer />
    </>
  )
};

export default MenuDetail;
