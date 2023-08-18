import { useState } from "react";
import { Form, useLoaderData } from "react-router-dom";
function Generate() {
  //    States
  const [quotation, setQuote] = useState("Generate Quotes from Breaking Bad!!");
  const [auth, setauth] = useState("Author");

  //   Functions;
  const handleQuote = async () => {
    //   Geting Fetching, and Exporting Data
    console.log("Got IT!")
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



<div className="card text-center" style={{width: "700px"}} id="genBody">

  <div className="card-body" id="genBody">
    <h5 className="card-title" id="textBody">"{quotation}"</h5>
    <p className="card-text" id="textBody"> -{auth}</p>
    {/* <button className="btn btn-success" onClick={() => { handleQuote(); }}> Genarate Quote </button> */}
    <Form method="POST" action="/favourites">
      <input type="text" name="quote" value={quotation} hidden  onChange={()=> {}}  />
      <input type="text" name="author" value={auth} hidden onChange={()=> {}}  />
      <button type="button" className="btn btn-success me-2" onClick={() => { handleQuote(); }}> Genarate Quote </button>
      <button type="submit" className="btn btn-success" > Save to Favourites </button>
    </Form>
  </div>
 
</div>
         
 </div>
</div>
  </div>
  );
}

export default Generate;

export const FormAction = async ({ request }) => {
  const data = await request.formData();
  const submittion = {
    author: data.get("author"),
    quote: data.get("quote")

 
  };
  const response = await fetch("/api/favourites", {
    method: "POST",
    body: JSON.stringify(submittion),
    headers: { "Content-Type": "application/json" },
  });

  const json = await response.json();
  console.log(json)

};