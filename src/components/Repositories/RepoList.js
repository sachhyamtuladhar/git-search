import React from "react";
import RepoItem from "./RepoItem";
import Dropdown from "../UI/Dropdown";
import Pagination from "../Layout/Pagination";
import { useSearch } from "../../hooks/searchHook";
import { useDispatch, useSelector } from "react-redux";
import { fetchRepos } from "../../store/repo-actions";

const RepoList = ({ query, page }) => {
  const { repos, totalRepos, sortBy } = useSelector((state) => state.repo);
  const search = useSearch();
  const dispatch = useDispatch();

  const handlePage = (newPageNumber) => {
    search(query, newPageNumber);
  };

  const sortList = [
    {
      name: "Default",
      value: "default",
    },
    { name: "Stars", value: "stars" },
    {
      name: "Forks",
      value: "forks",
    },
    {
      name: "Updated",
      value: "updated",
    },
  ];

  const handleSort = (sortValue) => {
    dispatch(fetchRepos(query, page, sortValue));
  };

  const numberOfResultsThisPage = totalRepos > 25 ? 25 : totalRepos

  return (
    <>
      <div className="flex gap-4 mt-10 justify-between mx-20 px-20">
        <div className="flex items-center">
          <Dropdown
            onHandleSort={handleSort}
            sortList={sortList}
            sortValue={sortBy}
          />
        </div>
        <p className="text-md  text-gray-600 ">{numberOfResultsThisPage} of about {totalRepos} results. {totalRepos > 1000 ? "(Only first 1000 available)" : ""} </p>
      </div>
      {repos.length > 0 ? (
      <div className="mx-10 px-10 flex flex-wrap gap-5 basis-auto justify-center lg:justify-start md:justify-start mt-5">
        {repos.map((repo) => (
          <RepoItem repo={repo} key={repo.id} />
        ))}
      </div>): (
          <h2 className="font-redHat flex h-[60vh] text-2xl w-full items-center justify-center">
            No results Found
          </h2>
        )}
      <Pagination
        currentPage={page}
        onHandlePage={handlePage}
        size={+totalRepos}
      />
    </>
  );
};

export default RepoList;
