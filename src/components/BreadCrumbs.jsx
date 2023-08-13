import { useLocation, Link } from "react-router-dom";

function BreadCrumbs() {
  const location = useLocation();
  console.log(location);

  let currentLink = "";

  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink += `/${crumb}`;
      return (
        <Link to={currentLink} className="crumb" key={crumb}>
          {crumb}{" "}
        </Link>
      );
    });
  console.log(crumbs);
  return <div className="breadcrumbs">{crumbs}</div>;
}

export default BreadCrumbs;
