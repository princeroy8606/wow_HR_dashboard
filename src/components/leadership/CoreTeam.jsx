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
          className={`w-full h-20 flex items-center justify-between  ${
            openAddnewMentor && "blur-sm"
          }`}
        >
        </div>
        <div
          className={`w-full h-12 flex items-center justify-between ${
            openAddnewMentor && "blur-sm"
          }`}
        >
          <div className="w-fit h-full">
            <h1 className="font-bold text-[1.5rem] ">Core Team</h1>
            <p>Lorem ipsum dolor sit Pamet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div
          className={`w-full h-[calc(100%-3rem)] bg-white mt-4 p-2 ${
            openAddnewMentor && "blur-sm"
          } `}
        >
          <div className="w-full h-10 flex justify-between items-center ">
          <div className="bg-[#edededde] w-[20rem] h-[90%] px-2 flex items-center gap-1 border rounded-md text-white border-blue-200">
              <img
                src={assets.Img.Search}
                alt="search"
                className="w-4 h-4 object-contain"
              />
              <input
                type="text"
                placeholder="Find"
                className="flex-1 outline-none border-none pl-2 bg-transparent placeholder-gray-400"
              />
            </div>
            <div
              onClick={() => setopenAddnewMentor(true)}
              className=" w-[11rem] h-[100%] flex items-center justify-center rounded-md bg-[#2d6acb] cursor-pointer font-medium text-white"
            >
              Add New Member
            </div>
          </div>
          <div className="min-w-fit w-full  h-[calc(100%-4rem)] bg-gray-50  mt-4 rounded-lg flex flex-col gap-4 ">
          <div className="w-full h-10 flex justify-between gap-4 bg-[#eaeaea] px-4 rounded-t-md ">
              <div className="w-[2rem] h-full flex gap-2 items-center text-black font-medium">
                <p>SI.No</p>
              </div>
              <div className="w-[10rem] h-full flex gap-2 items-center text-black font-medium ">
                {/* <img src="" alt="icon" /> */}
                <p>Person</p>
              </div>
              <div className="w-[8rem] h-full flex gap-2 items-center text-black font-medium">
                <p>Job Title</p>
              </div>

              <div className="w-[8rem] h-full flex gap-2 items-center text-black font-medium">
                <p>Leader Type</p>
              </div>
              <div className="w-[8rem] h-full flex gap-2 items-center text-black font-medium">
                <p>Location</p>
              </div>
              <div className="w-[15rem] h-full flex gap-2 items-center text-black font-medium">
                <p>description</p>
              </div>
              <div className="w-[5rem] h-full flex gap-2 items-center text-black font-medium">
                <p>Action</p>
              </div>
            </div>
            <div className="w-full h-12 gap-4 flex justify-between px-4 items-center">
              <div className="w-[2rem] h-fit flex gap-2 items-center text-gray-500">
                <p>01</p>
              </div>
              <div className="w-[10rem] h-fit flex gap-2 items-center text-gray-500">
                <img
                  src={assets.Img.Bg}
                  alt="icon"
                  className="w-7 h-7 rounded-full object-cover"
                />
                <p>TestUser</p>
              </div>
              <div className="w-[8rem] h-fit flex gap-2 items-center text-gray-500">
                <p>Tester</p>
              </div>

              <div className="w-[8rem] h-fit flex gap-2 items-center text-gray-500">
                <p>Mentor</p>
              </div>
              <div className="w-[8rem] h-fit flex gap-2 items-center text-gray-500">
                <p>Tamilnadu</p>
              </div>
              <div className="w-[15rem] h-full overflow-hidden flex gap-2 items-center text-gray-500">
                <p className="w-full h-full text-[12px] text-justify ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cupiditate quo ipsa ...
                </p>
              </div>
              <div className="w-[5rem] h-fit flex gap-2 items-center justify-between ">
                <div className="w-[3rem] h-8 bg-gray-100 rounded-md hover:bg-blue-100 cursor-pointer flex items-center justify-center ">
                  <img
                    src={assets.Img.edit}
                    alt="icon"
                    className="w-[60%] h-[60%] object-contain"
                  />
                </div>
                <div className="w-[3rem] h-8 bg-gray-100 rounded-md hover:bg-red-100 cursor-pointer  flex items-center justify-center ">
                  <img
                    src={assets.Img.Delete}
                    alt="icon"
                    className="w-[60%] h-[60%] object-contain"
                  />
                </div>
              </div>
            </div>
            <div className="w-full h-12 gap-4 flex justify-between px-4 items-center">
              <div className="w-[2rem] h-fit flex gap-2 items-center text-gray-500">
                <p>01</p>
              </div>
              <div className="w-[10rem] h-fit flex gap-2 items-center text-gray-500">
                <img
                  src={assets.Img.Bg}
                  alt="icon"
                  className="w-7 h-7 rounded-full object-cover"
                />
                <p>TestUser</p>
              </div>
              <div className="w-[8rem] h-fit flex gap-2 items-center text-gray-500">
                <p>Tester</p>
              </div>

              <div className="w-[8rem] h-fit flex gap-2 items-center text-gray-500">
                <p>Mentor</p>
              </div>
              <div className="w-[8rem] h-fit flex gap-2 items-center text-gray-500">
                <p>Tamilnadu</p>
              </div>
              <div className="w-[15rem] h-full overflow-hidden flex gap-2 items-center text-gray-500">
                <p className="w-full h-full text-[12px] text-justify ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cupiditate quo ipsa ...
                </p>
              </div>
              <div className="w-[5rem] h-fit flex gap-2 items-center justify-between ">
                <div className="w-[3rem] h-8 bg-gray-100 rounded-md hover:bg-blue-100 cursor-pointer flex items-center justify-center ">
                  <img
                    src={assets.Img.edit}
                    alt="icon"
                    className="w-[60%] h-[60%] object-contain"
                  />
                </div>
                <div className="w-[3rem] h-8 bg-gray-100 rounded-md hover:bg-red-100 cursor-pointer  flex items-center justify-center ">
                  <img
                    src={assets.Img.Delete}
                    alt="icon"
                    className="w-[60%] h-[60%] object-contain"
                  />
                </div>
              </div>
            </div>
            <div className="w-full h-12 gap-4 flex justify-between px-4 items-center">
              <div className="w-[2rem] h-fit flex gap-2 items-center text-gray-500">
                <p>01</p>
              </div>
              <div className="w-[10rem] h-fit flex gap-2 items-center text-gray-500">
                <img
                  src={assets.Img.Bg}
                  alt="icon"
                  className="w-7 h-7 rounded-full object-cover"
                />
                <p>TestUser</p>
              </div>
              <div className="w-[8rem] h-fit flex gap-2 items-center text-gray-500">
                <p>Tester</p>
              </div>

              <div className="w-[8rem] h-fit flex gap-2 items-center text-gray-500">
                <p>Mentor</p>
              </div>
              <div className="w-[8rem] h-fit flex gap-2 items-center text-gray-500">
                <p>Tamilnadu</p>
              </div>
              <div className="w-[15rem] h-full overflow-hidden flex gap-2 items-center text-gray-500">
                <p className="w-full h-full text-[12px] text-justify ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cupiditate quo ipsa ...
                </p>
              </div>
              <div className="w-[5rem] h-fit flex gap-2 items-center justify-between ">
                <div className="w-[3rem] h-8 bg-gray-100 rounded-md hover:bg-blue-100 cursor-pointer flex items-center justify-center ">
                  <img
                    src={assets.Img.edit}
                    alt="icon"
                    className="w-[60%] h-[60%] object-contain"
                  />
                </div>
                <div className="w-[3rem] h-8 bg-gray-100 rounded-md hover:bg-red-100 cursor-pointer  flex items-center justify-center ">
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
