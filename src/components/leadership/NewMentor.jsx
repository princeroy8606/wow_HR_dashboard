import React from "react";

const NewMentor = ({onCancel}) => {
  return (
    <div className="absolute  z-10 top-0 left-0 w-full h-full bg-[#50525580] flex justify-center items-center">
      <div className="w-[90%] h-[81%] bg-white rounded-md p-8">
        <div className="w-full h-[17rem] flex gap-4 justify-between flex-wrap">
          <div className="w-[50%] h-full flex flex-col gap-7 ">
            <input
              type="text"
              className="w-full h-10 pl-2 rounded-md border-none outline-none bg-slate-300 font-medium "
              placeholder="Name"
            />
            <input
              type="text"
              className="w-full h-10 pl-2 rounded-md border-none outline-none bg-slate-300 font-medium "
              placeholder="Job"
            />
            <input
              type="text"
              className="w-full h-10 pl-2 rounded-md border-none outline-none bg-slate-300 font-medium "
              placeholder="Leader Type"
            />
            <input
              type="text"
              className="w-full h-10 pl-2 rounded-md border-none outline-none bg-slate-300 font-medium "
              placeholder="Location"
            />
          </div>
          <div className="w-[40%] h-full rounded-md bg-slate-300 relative flex justify-center items-center">
            <input
              type="file"
              accept=".jpg,.png"
              className="w-full h-full absolute top-0 left-0 opacity-0 cursor-pointer"
            />
            <p className="text-gray-500 font-medium">Add Profile +</p>
          </div>
        </div>
        <div className="w-full flex justify-between">
          <textarea
            className="w-[50%] h-[15rem] outline-none border-none rounded-md bg-slate-300 p-3"
            placeholder="description"
          />
          <div className="w-[40%] h-full flex flex-col gap-5 mt-5 ">
            <input
              type="text"
              className="w-full h-10 pl-2 rounded-md border-none outline-none bg-slate-200 font-medium "
              placeholder="Link 🔗"
            />
            <input
              type="text"
              className="w-full h-10 pl-2 rounded-md border-none outline-none bg-slate-200 font-medium "
              placeholder="Link 🔗"
            />
            <input
              type="text"
              className="w-full h-10 pl-2 rounded-md border-none outline-none bg-slate-200 font-medium "
              placeholder="Link 🔗"
            />
            <input
              type="text"
              className="w-full h-10 pl-2 rounded-md border-none outline-none bg-slate-200 font-medium "
              placeholder="Link 🔗"
            />
          </div>
        </div>
        <div className="w-full h-[2.5rem] flex justify-between items-center mt-8">
          <div
            onClick={() => onCancel()}
            className="w-[5rem] h-full rounded-md bg-red-500 flex items-center justify-center cursor-pointer shadow-md shadow-red-100"
          >
            <p>Cancel</p>
          </div>
          <div className="w-[9rem] h-full rounded-md bg-blue-500 flex items-center justify-center cursor-pointer shadow-md shadow-blue-100">
            <p className="text-white font-medium">Upload Mentor</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewMentor;