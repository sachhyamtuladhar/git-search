import React, { useRef } from "react";
import { useSearchParams, useNavigate, Link } from "react-router-dom";

import { ReactComponent as HomeIcon } from "./../assets/icons/home.svg";
import { ReactComponent as ArrowRightIcon } from "./../assets/icons/arrowRight.svg";
import Container from "../components/Layout/Container";
import RepoList from "../components/Repositories/RepoList";
import Searchbar from "../components/UI/Searchbar";
import { toast } from "react-toastify";


const Results = () => {

  const [searchParams] = useSearchParams();
  const searchInputRef = useRef();

  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchInputRef.current.value.trim() === "") {
      toast("Text is required");
      return;
    }
    navigate(`/results/?search_query=${searchInputRef.current.value}`);
  };


  return (
    <Container>
      <div class="flex justify-center  m-5 animate-fadeIn">
       <Searchbar 
          searchInputRef={searchInputRef}
          handleSearch={handleSearch}
          defaultValue={searchParams.get("search_query")}
        />
      </div>
      <main className="lg:mx-40 md:mx-10 mx-2 mt-4">
       

        <section className="mt-4">
          <RepoList />
        </section>
      </main>
    </Container>
  );
};

export default Results;
