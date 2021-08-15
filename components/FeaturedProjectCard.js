import React from "react";
import MockupToolbar from "./MockupToolbar";
import Live from "./Live";
import Source from "./Source";
import Image from "next/image";

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
  sourceLink,
}) => {
  return (
    <article
      className={`relative flex flex-col items-end w-full my-4 lg:${flexDirection}`}
    >
      {/* Empty Column */}
      <div className="hidden w-1/6 lg:flex"></div>
      {/* Project image */}
      <div className="flex flex-col w-full p-3 rounded-md lg:w-5/6 bg-mid">
        <MockupToolbar />
        <Image src={imgSrc} width={imgWidth} height={imgHeight} />
      </div>

      {/* Project info */}
      <div
        className={`relative w-full px-8 py-8 border-t-4 rounded-tl-none rounded-tr-none lg:transform lg:-translate-y-1/2 lg:w-1/2 lg:${float} lg:absolute lg:-translate-x-0 lg:top-1/2 bg-mid rounded-bl-md rounded-br-md border-brand`}
      >
        <p className="mb-2 tracking-wider small-text">{status}</p>
        <h3>{title}</h3>
        <div className="flex flex-wrap mb-2">{stack}</div>
        <p>{description}</p>
        <div className="flex">
          <Live liveLink={liveLink} />

          {sourceLink !== null ? <Source sourceLink={sourceLink} /> : null}
        </div>
      </div>
    </article>
  );
};

export default FeaturedProjectCard;
