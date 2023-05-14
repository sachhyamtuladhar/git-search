import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";


import Button from "../components/UI/Button";
import Input from "../components/UI/Input";
import Container from "../components/UI/Container";

const LandingPage = () => {
  const searchInputRef = useRef();

  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/results/?search_query=${searchInputRef.current.value}`);
  };

  

  return (
    <Container>
      <div className="flex justify-center  m-5 animate-fadeIn">
        <div class="flex flex-col items-center">
          <h1 className="text-blue-500  font-bold text-4xl font-HubotSans ">
            Github Search
          </h1>

          <p className="text-xl text-gray-600 leading-[1.5] p-2 ">
            Exploring Github through its unauthenticated APIs!
          </p>
          <div className="flex flex-wrap">
            <div className="flex-auto">
              <Input
                ref={searchInputRef}
                type="text"
                id="search"
                placeholder="Search repositories..."
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    handleSearch();
                  }
                }}
              />
            </div>
            <div className="flex-[1/4] flex items-center ">
              <Button onClick={handleSearch} name="Search" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default LandingPage;
