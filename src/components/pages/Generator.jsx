import { useState } from "react";
import { useLoaderData } from "react-router-dom";

function Generate() {
  //    States
  const [quotation, setQuote] = useState("Generate Quotes from Breaking Bad!!");
  const [auth, setauth] = useState("Author");

  //   Functions;
  const handleQuote = async () => {
    console.log("got it");

    //   Geting Fetching, and Exporting Data
    let res = await fetch("https://api.breakingbadquotes.xyz/v1/quotes");
    const resJson = await res.json();
    const { quote, author } = resJson[0];

    //  Seting Data
    setQuote(quote);
    setauth(author);
  };


  return (
    <div className="">
      <div className="card text-bg-dark ">
        <img
          src="https://www.revelstokereview.com/wp-content/uploads/2022/06/29555729_web1_220630-KCN-Breaking-Bad-_1.jpg"
          className="card-bg-img "
          alt="..."
          id="imageGen"
        />

        <div
          className="card-img-overlay container square-box d-flex justify-content-center align-items-center text-center"
          id="conts"
        >
          <div>
            <h2 className="card-title mb-5">Quotes!</h2>
            <p className="card-text">
              "<big> {quotation} </big>"
            </p>
            <p className="card-text">
              <small>-{auth}</small>
            </p>
            <button
              className="btn text-bg-light"
              onClick={() => {
                handleQuote();
              }}
            >
              Genarate Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Generate;

// export const GenerateLoader = async () => {
//   const res = await fetch("https://api.breakingbadquotes.xyz/v1/quotes/5");

//   return res.json();
// };
