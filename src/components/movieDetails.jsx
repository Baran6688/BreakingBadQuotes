import { useLoaderData, useParams } from "react-router-dom";

export default function MovieDetails() {
  const { id } = useParams();
  const movies = useLoaderData();
  const movie = movies.filter((movie) => movie.imdbID === id)[0];

  const { Title, Images, Type, Plot, Director } = movie;

  return (
    <div>
      <h1>{Title}</h1>
      <h1>{Type}</h1>
      <h1>{Plot}</h1>
      <h1>{Director}</h1>

      {Images.map((link) => (
        <img src={link} alt="nazanm" key={link} />
      ))}
    </div>
  );
}

export const movieDetailsLoader = async ({ params }) => {
  const { id } = params;

  const res = await fetch("http://localhost:3000/films/" + id);

  return res.json();
};
