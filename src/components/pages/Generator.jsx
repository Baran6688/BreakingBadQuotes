import { useEffect } from "react";
import { useState } from "react";
import { UseAuthContext } from "../utils/UseAuthContex";
import { UseIsLoading } from "../utils/UseIsLoading";
function Generate() {
  //    States
  const [quotation, setQuote] = useState("Generate Quotes from Breaking Bad!!");
  const [auth, setauth] = useState("Author");
  const { user } = UseAuthContext()
  const [message, setMessage] = useState(null)
  const { isLoading, setIsLoading } = UseIsLoading()


  useEffect(() => {
    setIsLoading(false)


  }, [])



  //   Functions;
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!user || user === null) {
      setMessage("Login to save quotes!!")
      return
    }


    const res = await fetch("https://bbquotes-1a8y.onrender.com/api/user/save", {
      method: "POST",
      headers: {
        'Authorization': `Bearer ${user.token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ author: auth, quote: quotation })
    })

    const json = await res.json()
    setMessage(json.message)

  }

  const handleQuote = async () => {
    setIsLoading(true)

    //   Geting Fetching, and Exporting Data
    let res = await fetch("https://api.breakingbadquotes.xyz/v1/quotes");

    const resJson = await res.json();

    const { quote, author } = resJson[0];

    //  Seting Data
    setQuote(quote);
    setauth(author);
    if (res.ok) { setIsLoading(false) }
  };


  return (


    <div className=" d-flex  justify-content-center text-center">

      <div className="card" style={{ width: "700px" }} id="genBody">

        <div className="card-body" id="genBody">
          {isLoading === true && <div className=" d-flex justify-content-center text-center mb-4">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div> </div>}

          {isLoading === false && <><h5 className="card-title" id="textBody">"{quotation}"</h5>
            <p className="card-text" id="textBody"> -{auth}</p> </>}

          {/* <button className="btn btn-success" onClick={() => { handleQuote(); }}> Genarate Quote </button> */}
          <form >
            <input type="text" name="quote" hidden />
            <input type="text" name="author" hidden />
            <button type="button" onClick={handleQuote} className="btn btn-success me-2" > Genarate Quote </button>

            <button type="submit" onClick={(e) => handleSubmit(e)} className="btn btn-success" > Save to Favourites </button>

          </form>
          <span id="textBody" onClick={() => setMessage(null)} >{message}</span>
        </div>

      </div>
    </div>


  );
}

export default Generate;

