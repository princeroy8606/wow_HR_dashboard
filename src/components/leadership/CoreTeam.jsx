import React, { useState } from "react";
import Sidebar from "../global/Sidebar";
import assets from "../../assets/assets";
import NewMentor from "./NewMentor";

const Testimonials = () => {
  const [openAddnewMentor, setopenAddnewMentor] = useState(false);
  return (
    <div className="w-screen h-screen bg-white flex ">
      <Sidebar />
      <div className="dashboard-content bg-white p-4 relative ">
        {openAddnewMentor && (
          <NewMentor onCancel={() => setopenAddnewMentor(false)} />
        )}
        <div
          className={`w-full h-12 flex items-center justify-between ${
            openAddnewMentor && "blur-sm"
          }`}
        >
          <div className="w-fit h-full">
            <h1 className="font-bold text-[1.2rem] ">Core Team</h1>
            <p>Lorem ipsum dolor sit Pamet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div
          className={`w-full h-[calc(100%-3rem)] bg-white mt-4 p-2 ${
            openAddnewMentor && "blur-sm"
          } `}
        >
          <div className="w-full h-10 flex justify-between items-center ">
            <div className="bg-[#4593f2de] w-[20rem] h-[90%] px-2 flex items-center gap-1 border rounded-md text-white border-cyan-200">
              <img
                src={assets.Img.Search}
                alt="search"
                className="w-4 h-4 object-contain"
              />
              <input
                type="text"
                placeholder="Find"
                className="flex-1 outline-none border-none pl-2 bg-transparent placeholder-gray-200"
              />
            </div>
            <div
              onClick={() => setopenAddnewMentor(true)}
              className=" w-[11rem] h-[100%] flex items-center justify-center rounded-md bg-[#2d6acb] cursor-pointer font-medium text-white"
            >
              Add New Member
            </div>
          </div>
          <div className="min-w-fit w-full  h-[calc(100%-4rem)] bg-gray-200  mt-4 rounded-lg flex flex-col gap-2 ">
            <div className="w-full h-10 flex justify-between bg-[#2a6cd6bb] px-4 rounded-t-md ">
              <div className="w-[2rem] h-full flex gap-2 items-center text-white">
                <p>SI.No</p>
              </div>
              <div className="w-[10rem] h-full flex gap-2 items-center text-white">
                {/* <img src="" alt="icon" /> */}
                <p>Person</p>
              </div>
              <div className="w-[8rem] h-full flex gap-2 items-center text-white">
                <p>Job Title</p>
              </div>

              <div className="w-[8rem] h-full flex gap-2 items-center text-white">
                <p>Leader Type</p>
              </div>
              <div className="w-[8rem] h-full flex gap-2 items-center text-white">
                <p>Location</p>
              </div>
              <div className="w-[15rem] h-full flex gap-2 items-center text-white">
                <p>description</p>
              </div>
              <div className="w-[8rem] h-full flex gap-2 items-center text-white">
                <p>Action</p>
              </div>
            </div>
            <div className="w-full h-10 gap-4 flex justify-between border-b border-b-blue-400 px-4 items-center">
              <div className="w-[2rem] h-fit flex gap-2 items-center text-black">
                <p>01</p>
              </div>
              <div className="w-[10rem] h-fit flex gap-2 items-center text-black">
                <img
                  src={assets.Img.Delete}
                  alt="icon"
                  className="w-7 h-7 rounded-full object-cover"
                />
                <p>TestUser</p>
              </div>
              <div className="w-[8rem] h-fit flex gap-2 items-center text-black">
                <p>Tester</p>
              </div>

              <div className="w-[8rem] h-fit flex gap-2 items-center text-black">
                <p>Mentor</p>
              </div>
              <div className="w-[8rem] h-fit flex gap-2 items-center text-black">
                <p>Tamilnadu</p>
              </div>
              <div className="w-[15rem] h-full overflow-hidden flex gap-2 items-center text-black">
                <p className="w-full h-full text-[12px] text-justify ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cupiditate quo ipsa dignissimos, quos itaque rem quisquam
                  distinctio, molestiae autem dolores ratione aspernatur veniam
                  enim! Odio mollitia pariatur vitae similique commodi?
                </p>
              </div>
              <div className="w-[8rem] h-fit flex gap-2 items-center justify-between ">
                <div className="w-[3rem] h-8 bg-blue-400 hover:bg-blue-500 rounded-md cursor-pointer flex items-center justify-center ">
                  <img
                    src={assets.Img.edit}
                    alt="icon"
                    className="w-[60%] h-[60%] object-contain"
                  />
                </div>
                <div className="w-[3rem] h-8 bg-red-400 rounded-md hover:bg-red-500 cursor-pointer  flex items-center justify-center ">
                  <img
                    src={assets.Img.Delete}
                    alt="icon"
                    className="w-[60%] h-[60%] object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
