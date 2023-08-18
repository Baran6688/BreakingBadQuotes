import { useLoaderData } from "react-router-dom"
import moment from "moment/moment"


function Favourites() {

const favs = useLoaderData()



return(
//     <div className="card text-center" style={{width: "700px"}} id="genBody">

//   <div className="card-body" id="genBody">
//     <h5 className="card-title" id="textBody">"{quotation}"</h5>
//     <p className="card-text" id="textBody"> -{auth}</p>
//     </div>
<>
{favs && favs.map((fav)=>(   
     <div
     className="d-flex justify-content-center  text-center"

   > 
    <div className="card text-center mt-3" style={{width: "700px"}} id="genBody">

  <div className="card-body" id="genBody">
    <h5 className="card-title" id="textBody"> "{fav.quote}"</h5>
    <p className="card-text" id="textBody">- {fav.author} </p>
    </div>
    </div>
    </div>
))}  
</>
)}
// { moment(new Date(fav.createdAt)).fromNow()}
export default Favourites


export const getFavourites = async() => {
     const res= await fetch("/api/favourites/")

    const json = await res.json()
   
    return json

}

