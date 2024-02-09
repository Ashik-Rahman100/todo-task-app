import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="">
      <img
        className="w-full h-screen relative"
        src="https://media.designrush.com/articles/307003/conversions/best-404-pages-details.jpg"
        alt="page-not-found"
      />
      <Link className="absolute mx-auto" to="/">
        <button >Go Back </button>
      </Link>
    </div>
  );
}
