import React from "react";
import ExternalLink from "./icons/ExternalLink";
import GitHub from "./icons/GitHub";
import Button from "./Button";

const ProjectCard = ({ project }) => {
  const { title, overview, stack, link, repo } = project;

  return (
    <div className="flex flex-col w-full rounded-sm bg-mid px-7 py-7">
      <svg
        className="w-10 h-10 mb-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="stroke-current text-brand"
          d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
        ></path>
      </svg>
      <p className="inline-block px-0 pb-5 mb-4 text-xl font-bold border-b-4 flex-start border-brand">
        {title}
      </p>
      <p>{overview}</p>
      {/* Stack and Live Icons Container */}
      <div className="flex flex-col flex-wrap mt-2">
        {/* Stack icons inner container */}
        <div className="flex flex-grow flex-shrink-0">
          <ul className="flex flex-wrap list-none list-inside">
            {stack.map(function (stackItem, i) {
              return (
                <li
                  className="flex items-center mr-3 opacity-50 text-brand"
                  key={i}
                >
                  <span className="small-text">{stackItem}</span>
                </li>
              );
            })}
          </ul>
        </div>
        {/* Live and GitHub container */}
        <div className="flex mt-4">
          <Button
            link={link}
            text={null}
            square={true}
            icon={<ExternalLink square={true} />}
          />

          {repo ? (
            <Button
              link={repo}
              text={null}
              square={true}
              icon={<GitHub square={true} />}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
