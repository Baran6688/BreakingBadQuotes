
function Favourites() {

return(

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
{!favs && <h1>NOTHING IS HERE</h1>}
</>
)}
// { moment(new Date(fav.createdAt)).fromNow()}
export default Favourites



