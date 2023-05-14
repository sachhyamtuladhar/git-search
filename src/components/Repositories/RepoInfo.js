import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { ReactComponent as EyeIcon } from "../../assets/icons/eye.svg";
import { ReactComponent as StarIcon } from "../../assets/icons/star.svg";
import { ReactComponent as ForkIcon } from "../../assets/icons/fork.svg";
import { ReactComponent as BugIcon } from "../../assets/icons/bug.svg";

const RepoInfo = () => {
  const { selectedRepo } = useSelector((state) => state.repo);

  const isLoading = Object.keys(selectedRepo).length === 0 ? true : false;

  return (
    <>
      {isLoading || (
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-xl font-HubotSans px-4 py-2">About</h1>

          <div className="flex px-4 pb-2">
            <img
              className="h-16 w-12 rounded-sm object-cover"
              src={selectedRepo.owner.avatar_url}
              alt="avatar_mini"
            />

            <div className="flex items-center ">
              <div className="px-3">
                <Link
                  to={selectedRepo.html_url.replace("https:", "")}
                  target="_blank"
                >
                  <h2 className="text-lg font-HubotSans hover:text-blue-700 hover:cursor-pointer">
                    {selectedRepo.name}
                  </h2>
                </Link>
                <Link
                  target="_blank"
                  to={{
                    pathname: `${selectedRepo.owner.html_url.replace(
                      "https:",
                      ""
                    )}`,
                  }}
                >
                  <p className="text-md text-gray-600 hover:text-blue-700 inline hover:cursor-pointer">
                    {selectedRepo.owner.login}
                    <span>&nbsp;. &nbsp;</span>
                  </p>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex px-4 flex-col text-gray-600">
            <p className=" leading-[1.5] py-2 text-md ">
              {selectedRepo.description}
            </p>

            <div className="flex gap-1 pb-[0.3rem]">
              <div className="flex items-center">
                <StarIcon className="w-[0.87rem] h-[0.87rem]" />
              </div>
              <p className="text-md">{selectedRepo.stargazers_count} stars</p>
            </div>
            <div className="flex gap-1 pb-[0.3rem]">
              <div className="flex items-center">
                <EyeIcon className="w-[0.87rem] h-[0.87rem]" />
              </div>
              <p className="text-md">{selectedRepo.watchers} watching</p>
            </div>
            <div className="flex gap-1 pb-[0.3rem]">
              <div className="flex items-center">
                <ForkIcon className="w-[0.87rem] h-[0.87rem]" />
              </div>
              <p className="text-md">{selectedRepo.forks_count} forks</p>
            </div>
            <div className="flex gap-1 pb-[0.3rem]">
              <div className="flex items-center">
                <BugIcon className="w-[0.87rem] h-[0.87rem]" />
              </div>
              <p className="text-md">
                {selectedRepo.open_issues_count} open issues
              </p>
            </div>
            <div className="flex gap-1 pb-[0.3rem]">
              <p className="text-md">
                Last updated on: &nbsp;
                {selectedRepo.updated_at.split('T')[0]}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RepoInfo;
