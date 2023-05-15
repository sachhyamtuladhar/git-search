import React, { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";

import Container from "../components/Layout/Container";
import RepoList from "../components/Repositories/RepoList";
import Searchbar from "../components/UI/Searchbar";
import { toast } from "react-toastify";
import { useSearch } from "../hooks/searchHook";
import { fetchRepos } from "../store/repo-actions";
import { useDispatch, useSelector } from "react-redux";


const Results = () => {

  const [searchParams] = useSearchParams();
  const searchInputRef = useRef();
  const search = useSearch();
  

  const { repos, sortBy, showLoading } = useSelector((state) => state.repo);

  const dispatch = useDispatch();

  useEffect(() => {
    if (searchParams.get("search_query").trim() === "") return;
    const page = searchParams.get("page") ? searchParams.get("page") : 1;
    dispatch(fetchRepos(searchParams.get("search_query"), page, sortBy));
  }, [searchParams, dispatch, sortBy]);


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
          <RepoList   query={searchParams.get("search_query")}
              page={searchParams.get("page") ? searchParams.get("page") : 1} />
        </section>
      </main>
    </Container>
  );
};

export default Results;
