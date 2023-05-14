import React from "react";
import { useParams, Link } from "react-router-dom";
import Container from "../components/UI/Container";

const FouroFour = () => {
  const params = useParams();
  console.log(params);
  return (
    <Container>
      <div className="flex flex-col items-center justify-center bg-gray-100 ">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Oops! Page ''/{params["*"]}'' not found
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            The page you are looking for might have been removed or is temporarily unavailable.
          </p>
          <Link to="/" className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600">
            Go back to home
          </Link>
        </div>
    </Container>
  );
};

export default FouroFour;
