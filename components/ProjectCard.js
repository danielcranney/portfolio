import React from "react";
import ExternalLink from "./icons/ExternalLink";
import GitHub from "./icons/GitHub";
import Button from "./Button";

const ProjectCard = ({ project }) => {
  const { title, overview, stack, link, repo, isSiteLive } = project;

  return (
    <div className="flex flex-col w-full rounded-md bg-white dark:bg-mid px-7 py-7 shadow-md shadow-light/10 dark:shadow-dark">
      <svg
        id="b4200d7e-7896-4022-b85b-f69170875645"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 97.96 97.96"
        className="w-10 h-10 mb-4 fill-current text-brand"
      >
        <path
          className="text-brand"
          d="M26.47,49.89,9.92,66.44a4.39,4.39,0,1,1-6.21-6.21L17.16,46.79,3.71,33.34a4.39,4.39,0,0,1,6.21-6.21L26.47,43.68A4.4,4.4,0,0,1,26.47,49.89Z"
        />
        <path
          className="text-brand"
          d="M94.27,66.44a4.38,4.38,0,0,1-6.21,0L71.51,49.89a4.4,4.4,0,0,1,0-6.21L88.06,27.13a4.39,4.39,0,0,1,6.21,6.21L80.83,46.79,94.27,60.23A4.4,4.4,0,0,1,94.27,66.44Z"
        />
        <rect
          className="text-brand"
          x="44.34"
          y="10.21"
          width="8.78"
          height="77.54"
          rx="4.39"
          transform="translate(14.34 -10.94) rotate(15)"
        />
      </svg>
      <p className="inline-block px-0 pb-5 mb-4 text-xl font-bold border-b-4 flex-start border-brand dark:text-white text-dark">
        {title}
      </p>
      <p>{overview}</p>
      {/* Stack icons inner container */}
      <div className="flex mt-auto">
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
      <div className={`flex ${link || repo ? "mt-4" : ""}`}>
        {link ? (
          <Button
            link={link}
            text={null}
            square={true}
            icon={<ExternalLink square={true} />}
          />
        ) : null}

        {repo ? (
          <Button
            link={repo}
            text={null}
            square={true}
            icon={<GitHub square={true} />}
          />
        ) : null}

        {!isSiteLive ? <p className="my-4 small-text">Coming soon</p> : null}
      </div>
    </div>
  );
};

export default ProjectCard;
