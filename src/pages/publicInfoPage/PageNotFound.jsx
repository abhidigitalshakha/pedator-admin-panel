import { Link } from "react-router-dom";
import notFoundImg from "../../assets/images/notFound.png";

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[80%] bg-white text-center">
      <div className="relative w-full h-[80%] flex justify-center items-center">
        <img src={notFoundImg} alt="404 Not Found" className="w-[500px] mb-1 absolute w" />
        <p className="text-teal-600 mb-1 absolute text-3xl font-bold bottom-4">
          The page you're looking for doesn't found.
        </p>
      </div>

      <Link
        to="/"
        className="px-6 py-2 text-white bg-teal-600 rounded-md hover:bg-teal-700 transition"
      >
        Back to Dashboard
      </Link>
    </div>
  );
};

export default PageNotFound;
