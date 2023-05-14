import React from "react";
import RepoItem from "./RepoItem";
const RepoList = ({repos}) => {
  return (
    <>
      <div className="flex flex-wrap gap-5 basis-auto justify-center lg:justify-start md:justify-start mt-10">
        {repos.map((repo) => (
          <RepoItem repo={repo} key={repo.id}/>
        ))}
      </div>
    </>
  );
};

export default RepoList;
