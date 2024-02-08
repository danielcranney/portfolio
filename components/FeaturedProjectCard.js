import React from "react";
import MockupToolbar from "./MockupToolbar";
import Button from "./Button";
import SourceButton from "./SourceButton";
import Image from "next/image";

import GitHub from "./icons/GitHub";
import ExternalLink from "./icons/ExternalLink";

const FeaturedProjectCard = ({
  title,
  status,
  float,
  flexDirection,
  description,
  imgWidth,
  imgHeight,
  imgSrc,
  stack,
  liveLink,
  repoLink,
}) => {
  return (
    <article
      className={`relative flex items-stretch w-full dark:bg-dark/20 bg-white p-3.5 my-4 ${flexDirection} gap-x-3.5 rounded-md shadow-md shadow-light/10 dark:shadow-darker`}
    >
      {/* Project image */}
      <div className="flex flex-col w-full lg:w-7/12 my-auto rounded-md overflow-hidden border border-shadow dark:border-mid">
        <MockupToolbar />
        <Image
          src={imgSrc}
          width={imgWidth}
          height={imgHeight}
          alt={`${title} user interface`}
        />
      </div>

      {/* Project info */}
      <div
        className={`grow flex flex-col relative w-full p-3.5 lg:w-5/12 lg:${float} lg:-translate-x-0 gap-y-2`}
      >
        <p className="mb-0 tracking-wider small-text text-brand dark:text-brand">
          {status}
        </p>
        <h3>{title}</h3>
        <div className="w-1/4 h-1 bg-brand mb-2">&nbsp;</div>
        <div className="flex flex-wrap mb-2">{stack}</div>
        <p className="text-sm md:text-base tracking-wide leading-normal dark:text-white">
          {description}
        </p>
        <div className="flex">
          {liveLink !== null ? (
            <Button
              link={liveLink}
              text={"Live"}
              square={false}
              icon={<ExternalLink square={false} />}
            />
          ) : null}

          {repoLink !== null ? (
            <Button
              link={repoLink}
              text={"Source"}
              square={false}
              icon={<GitHub square={false} />}
            />
          ) : null}
        </div>
      </div>
    </article>
  );
};

export default FeaturedProjectCard;
