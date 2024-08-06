import React from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="hidden w-[18rem] h-full bg-gray-200  flex-col gap-4 items-center p-4 lg:flex">
      <p
        onClick={() => navigate("/")}
        className="w-full h-10 bg-blue-600 p-1 rounded-lg flex items-center pl-8 text-white font-medium"
      >
        LeaderShip
      </p>
      <p
        onClick={() => navigate("/testimonials")}
        className="w-full h-10 bg-blue-600 p-1 rounded-lg flex items-center pl-8 text-white font-medium"
      >
        Testimonials
      </p>
      <p
        onClick={() => navigate("/events")}
        className="w-full h-10 bg-blue-600 p-1 rounded-lg flex items-center pl-8 text-white font-medium"
      >
        Events
      </p>
      <p
        onClick={() => navigate("/knowledgeHub")}
        className="w-full h-10 bg-blue-600 p-1 rounded-lg flex items-center pl-8 text-white font-medium"
      >
        Knowledge Hub
      </p>
    </div>
  );
};

export default Sidebar;
