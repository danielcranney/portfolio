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
      className={`relative flex flex-col items-end w-full my-4 lg:${flexDirection}`}
    >
      {/* Empty Column */}
      <div className="hidden w-1/6 lg:flex"></div>
      {/* Project image */}
      <div className="flex flex-col w-full p-0 rounded-tl-sm rounded-tr-sm rounded-bl-none rounded-br-none lg:rounded-sm lg:p-3 lg:w-5/6 bg-mid">
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
        className={`relative w-full px-8 py-8 border-t-4 rounded-tl-none rounded-tr-none lg:transform lg:-translate-y-1/2 lg:w-1/2 lg:${float} lg:absolute lg:-translate-x-0 lg:top-1/2 bg-mid rounded-bl-sm rounded-br-sm border-brand`}
      >
        <p className="mb-2 tracking-wider small-text">{status}</p>
        <h3>{title}</h3>
        <div className="flex flex-wrap mb-2">{stack}</div>
        <p>{description}</p>
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
