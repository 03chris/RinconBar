import './Cards.css'

const Cards = ({menu}) => {
  return(
     <>
        {menu.map(e=>
            <div key={e.id} className="card-group col-12 col-md-6 col-xl-3 mt-3 mb-3">
                <div className="card border-0 mb-0">
                    <img src={e.image} className="card-img" alt={e.title}/>
                <div className="card-body bg-black text-white">
                    <h1 className="card-title">{e.title}</h1>
                    <p className="card-text">{e.description}</p>
                </div>
                </div>
            </div>
        )}
     </> 
    );
};

export default Cards;