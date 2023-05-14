import React from "react";
import Card from "../UI/Card";

import { ReactComponent as EyeIcon } from "../../assets/icons/eye.svg";
import { ReactComponent as StarIcon } from "../../assets/icons/star.svg";
import { ReactComponent as ForkIcon } from "../../assets/icons/fork.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { repoActions } from "../../store/repo-slice";

const RepoItem = ({repo}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const repoClickHandler = () => {
    dispatch(repoActions.selectRepo(repo));
    navigate(`/repo/${repo.full_name}`);
  };


  let description = repo.description
  if (description && description.length > 80)
    description = description.slice(0, 80) + "..."


 
  return (
    <div className="w-full mx-auto bg-white rounded-xl shadow-md overflow-hidden  xl:w-5/12">
      <div className="flex">
        <div className="flex-shrink-0">
          <img
              src={repo.owner.avatar_url}
              alt="Repository"
              className="w-48 w-full object-cover md:w-52"
            />
        </div>
        <div className="p-5">
          <div className="cursor-pointer  uppercase tracking-wide text-sm text-indigo-500 font-semibold hover:underline" onClick={repoClickHandler}> {repo.full_name}</div>
          <div className="block mt-1 text-lg leading-tight font-medium text-black">{repo.owner.login}</div>
          <div className="flex mt-2">
            <div className="flex bg-indigo-500 items-center gap-1 text-white py-0.25 px-1.5 rounded-tl-md">
              <p className="text-sm">{repo.stargazers_count}</p>
              <StarIcon className="w-3 h-3" fill="#fce61c" />
            </div>
            <div className="flex items-center gap-1  py-0.25 px-1.5 bg-yellow-600 text-white">
              <EyeIcon className="w-3 h-3" fill="#fff" />
              <p className="text-sm">{repo.watchers} </p>
            </div>
            <div className="flex items-center gap-1  py-0.25 px-1.5  rounded-br-md bg-sky-600 text-white">
              <ForkIcon className="w-3 h-3" fill="#fff" />
              <p className="text-sm">{repo.forks} </p>
            </div>
          </div>
          <p className="mt-2 text-gray-500">{description}</p>
          <div className="mt-4 text-gray-500 text-sm">
            Last update on: {repo.updated_at.split('T')[0]}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepoItem;
