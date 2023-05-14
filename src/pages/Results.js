import React, { useEffect, useRef, useState } from "react";
import { useSearchParams, useNavigate, Link } from "react-router-dom";

import { ReactComponent as HomeIcon } from "./../assets/icons/home.svg";

import Container from "../components/Layout/Container";
import RepoList from "../components/Repositories/RepoList";
import Searchbar from "../components/UI/Searchbar";
import { toast } from "react-toastify";
import { useSearch } from "../hooks/searchHook";
import axios from "axios";



const Results = () => {

  const [searchParams] = useSearchParams();
  const searchInputRef = useRef();
  const search = useSearch();
  

  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      const searchQuery = searchParams
        .get("search_query")
        .split(" ")
        .join("%20");
      console.log(searchQuery);
      const { data } = await axios.get(
        `https://api.github.com/search/repositories?q=${searchQuery}&per_page=25&page=1`
      );
      setRepos(data.items);
    };

    fetchRepos();
  }, [searchParams]);

  const handleSearch = () => {
    if (searchInputRef.current.value.trim === "") {
      toast("Text is required");
      return;
    }
    search(searchInputRef.current.value);
  };

  console.log(repos);

  return (
    <Container>
      <div className="flex justify-center  m-5 animate-fadeIn">
       <Searchbar 
          searchInputRef={searchInputRef}
          handleSearch={handleSearch}
          defaultValue={searchParams.get("search_query")}
        />
      </div>
      <main className="lg:mx-20 md:mx-10 mx-2 mt-4">
        <section className="mt-4">
          <RepoList repos={repos} />
        </section>
      </main>
    </Container>
  );
};

export default Results;
