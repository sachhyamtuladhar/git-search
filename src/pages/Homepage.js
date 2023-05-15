import React, { useRef } from "react";
import { toast } from "react-toastify";

import Container from "../components/Layout/Container";
import Searchbar from "../components/UI/Searchbar";
import { useSearch } from "../hooks/searchHook";

import myImage from "../assets/images/GitHub-Logo.png";

const Homepage = () => {
  const searchInputRef = useRef();

  const search = useSearch();

  const handleSearch = () => {
    if (searchInputRef.current.value.trim() === "") {
      toast("Text is required");
      return;
    }
    search(searchInputRef.current.value);
  };

  return (
    <Container>
      <div className="flex justify-center  m-5 animate-fadeIn">
        <div className="flex flex-col items-center">
          <h1 className="text-blue-500  font-bold text-5xl font-HubotSans ">
            Github Search
          </h1>

          <p className="text-xl text-gray-600 leading-[1.5] p-2 ">
            Exploring Github through its unauthenticated APIs!
          </p>
          <Searchbar 
              searchInputRef={searchInputRef}
              handleSearch={handleSearch}
          />
        </div>
      </div>
      <div className="flex justify-center mt-32">
        <img
          src={myImage}
          alt="github logo"
          className="h-96 rounded-md object-cover "
        />
      </div>

    </Container>
  );
};

export default Homepage;
