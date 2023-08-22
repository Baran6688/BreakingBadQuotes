import { UseAuthContext } from "../utils/UseAuthContex";

function Home() {
  const { dispatch } = UseAuthContext()
  console.log(UseAuthContext())
  const handleClick = () => {
    dispatch({ type: "LOGOUT" })
  }
  return (
    <div>
      <h1>Home</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
        animi? Hic ad voluptate distinctio natus nihil reprehenderit doloribus
        cumque soluta accusamus harum, eius ipsa totam tenetur iste nam
        reiciendis ea. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Nisi ex soluta unde voluptatum veniam architecto, qui, fugit debitis
        iste consequuntur quas nostrum tenetur similique ut sunt saepe!
        Nesciunt, fugit enim.
      </p>
      <button onClick={handleClick}>SignOUt</button>
    </div>
  );
}

export default Home;
