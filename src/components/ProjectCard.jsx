import React from "react";

function ProjectCard({ thumbnail, techUsed, name }) {
  return (
    <div className="flex flex-col gap-4 shadow-md rounded-md p-4">
      <div className="">
        <img
          className="rounded w-full object-cover"
          src={thumbnail}
          alt={`${name} thumbnail`}
        />
      </div>
      <div>
        <p className="text-[#9E9E9E]">{techUsed}</p>
        <p className="font-bold text-xl">{name}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
