import React from "react";
import Card from "../UI/Card";

import { ReactComponent as EyeIcon } from "../../assets/icons/eye.svg";
import { ReactComponent as StarIcon } from "../../assets/icons/star.svg";
import { ReactComponent as ForkIcon } from "../../assets/icons/fork.svg";

const RepoItem = ({repo}) => {
  let description = repo.description
  if (description.length > 20)
    description = description.slice(0, 40) + "..."
 
  return (
    <div className="w-full mx-auto bg-white rounded-xl shadow-md overflow-hidden  xl:w-5/12">
      <div className="flex">
        <div className="flex-shrink-0">
          <img
              src={repo.owner.avatar_url}
              alt="Repository"
              className="h-48 w-full object-cover md:w-48"
            />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold"> {repo.full_name}</div>
          <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{repo.owner.login}</a>
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

<div>
  <Card>
    <div className="w-40 flex-auto lg:flex-none md:flex-none sm:flex-none ">
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"
          alt="somepic"
          className="h-48 rounded-md object-cover "
        />
        <div className="absolute flex top-0 left-0 bg-indigo-500 items-center gap-1 text-white py-0.25 px-1.5 rounded-tl-md rounded-br-md">
          <p className="text-sm">14000</p>
          <StarIcon className="w-3 h-3" fill="#fce61c" />
        </div>
        <div className="absolute bottom-0 right-0 flex ">
          <div className="flex items-center gap-1  py-0.25 px-1.5 rounded-tl-md rounded-br-md bg-yellow-600 text-white">
            <EyeIcon className="w-3 h-3" fill="#fff" />
            <p className="text-sm">243890 </p>
          </div>
        </div>
      </div>
    </div>
  </Card>
  <h1> Hello </h1>
  <p> Hi Sir</p>
</div>