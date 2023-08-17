import { useLoaderData } from "react-router-dom"
import moment from "moment/moment"


function Favourites() {

const favs = useLoaderData()



    return(
        <>
   {favs && favs.map((fav)=>( 
   
   <div className="card text-center mb-3" key={fav._id}> 
   <div className="card-header" id="cardY" >
     {fav.author}
   </div>
   <div className="card-body" id="cardBody">
     <h5 className="card-title" style={{color: "#415d43"}}>{fav.quote}</h5>
  
   </div>
   <div className="card-footer text-body-secondary" id="cardY">
   { moment(new Date(fav.createdAt)).fromNow()}
   </div>
 </div>
   ))}
   
        </>
    )
}

export default Favourites


export const getFavourites = async() => {
     const res= await fetch("/api/favourites/")

    const json = await res.json()
   
    return json

}