import React from "react";

function SkillsCard({ icon, text }) {
  return (
    <div className="flex items-center shadow-md p-6">
      <img className="mr-4" src={icon} alt={`${text} Icon`} />
      <p className="font-bold text-2xl">{text}</p>
    </div>
  );
}

export default SkillsCard;
