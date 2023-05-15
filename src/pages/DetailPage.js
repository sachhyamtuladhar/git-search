import React, { useEffect } from "react";

import { Link, useParams } from "react-router-dom";

import { ReactComponent as HomeIcon } from "./../assets/icons/home.svg";
import { ReactComponent as ArrowRightIcon } from "./../assets/icons/arrowRight.svg";
import { ReactComponent as BranchIcon } from "./../assets/icons/branch.svg";
import { useDispatch, useSelector } from "react-redux";
import { fetchContent, fetchRepoItem } from "../store/repo-actions";
import { useSearch } from "../hooks/searchHook";
import RepoInfo from "../components/Repositories/RepoInfo";
import MarkDown from "../components/Repositories/MarkDown";
import Container from "../components/Layout/Container";

const DetailPage = () => {
  const { owner, name } = useParams();
  const { selectedRepo } = useSelector((state) => state.repo);
  const dispatch = useDispatch();
  const search = useSearch();

  useEffect(() => {
    if (Object.keys(selectedRepo).length === 0) {
      dispatch(fetchRepoItem(owner, name));
    }
  }, [selectedRepo, dispatch, owner, name]);

  useEffect(() => {
    dispatch(fetchContent(owner, name));
  }, [dispatch, owner, name]);

  return (
    <Container>
      <main className="lg:mx-40 md:mx-10 mx-2 mt-4">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="flex">
            
            <Link to="/" className="flex gap-2 bg-blue-500 text-white font-bold py-2 px-4 rounded shadow hover:bg-blue-800 transition duration-300">
              <HomeIcon fill="#fff" />
              Home
            </Link>
          </li>
        </ol>

        <section className="mt-4 flex gap-5 lg:flex-nowrap  flex-wrap ">
          <div className="w-full lg:w-2/3 h-full ">
              <div className="flex items-center ml-6 mb-3">
                <h3 className="text-xl font-HubotSans mr-2">Default branch:</h3>
                <p className="rounded bg-slate-300 inline-block px-4 py-2 font-HubotSans">
                  <div className="flex gap-1">
                    <div className="flex items-center">
                      <BranchIcon className="h-4 w-4" />
                    </div>
                  {selectedRepo.default_branch}
                  </div>
                </p>
              </div>
            <MarkDown />
          </div>
          <div className="lg:w-1/3 h-full w-full order-first lg:order-1">
            <RepoInfo />
          </div>
        </section>
      </main>
    </Container>
  );
};

export default DetailPage;
