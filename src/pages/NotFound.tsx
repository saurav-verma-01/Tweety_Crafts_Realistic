import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import gumu from '../../public/gumu-3.png'

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center ">
        <h1 className="text-4xl font-bold mb-2">404</h1>
        {/* <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p> */}
       
        <div >
          <img src={gumu} alt="GuMu TweetyCrafts Not Found llustration" />
        </div>
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
