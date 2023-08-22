import { useState } from "react";
function Generate() {
  //    States
  const [quotation, setQuote] = useState("Generate Quotes from Breaking Bad!!");
  const [auth, setauth] = useState("Author");

  //   Functions;



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
    <form >
      <input type="text" name="quote" hidden  />
      <input type="text" name="author"  hidden />
      <button type="button" className="btn btn-success me-2" > Genarate Quote </button>
      <button type="submit" className="btn btn-success" > Save to Favourites </button>
    </form>
  </div>
 
</div>
         
 </div>
</div>
  </div>
  );
}

export default Generate;

