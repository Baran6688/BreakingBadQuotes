import { useState } from "react"
import { useEffect } from "react"
import { UseAuthContext } from "../utils/UseAuthContex"
import { UseIsLoading } from "../utils/UseIsLoading";

function Favourites() {



  const { user } = UseAuthContext()
  const [favs, setFavs] = useState("")
  const [flash, setFlash] = useState(null)
  const { isLoading, setIsLoading } = UseIsLoading()



  const handleDelete = async (id) => {
    setIsLoading(true)

    const res = await fetch("https://bb-api.onrender.com/api/user/remove/" + id, {
      method: "DELETE",
      headers: { "Content-Type": "application/json", 'Authorization': `Bearer ${user.token}` },
    })
    const json = await res.json()
    await fetchData()
    setFlash(json.message)

  }

  const fetchData = async () => {
    const res = await fetch("https://bb-api.onrender.com/api/user/favourites", {
      headers: { 'Authorization': `Bearer ${user.token}` }
    })


    const { favourites } = await res.json()
    setFavs(favourites.reverse())
    setIsLoading(false)
  }



  useEffect(() => {
    setIsLoading(true)
    fetchData()
  }, [])



  return (

    <>


      <h1 className="text-center">Your Favourites!!</h1>
      {flash && <div className="text-center" onClick={() => setFlash(null)}>
        {flash}
      </div>

      }

      {isLoading === true && <div className=" d-flex justify-content-center text-center"> <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div> </div>}

      {favs && favs.map((fav) => (
        <div
          className="d-flex justify-content-center  text-center"
          key={fav._id}

        >

          <div className="card text-center mt-3" style={{ width: "700px" }} id="genBody">

            <div className="card-body" id="genBody">

              <h5 className="card-title" id="textBody"> "{fav.quote}"</h5>
              <p className="card-text" id="textBody">- {fav.author} </p>
              <button className="btn" id="textBody" onClick={() => (handleDelete(fav._id))}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                </svg>
              </button>

            </div>
          </div>
        </div>
      ))
      }
      <div className="mt-5"></div>


    </>
  )
}
export default Favourites



