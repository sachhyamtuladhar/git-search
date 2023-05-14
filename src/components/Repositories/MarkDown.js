import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { useSelector } from "react-redux";

const MarkDown = () => {
  const { content } = useSelector((state) => state.repo);
  return (
    <div className="border-2 border-gray-200 bg-white rounded-lg shadow-lg p-6">
       <h2 className="text-2xl font-HubotSans mb-3 border-b border-gray-300">ReadMe.md</h2>
      <ReactMarkdown rehypePlugins={[rehypeRaw]} children={content} />
    </div>
  );
};

export default MarkDown;
