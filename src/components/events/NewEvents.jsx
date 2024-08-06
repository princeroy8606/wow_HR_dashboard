import { StaticDatePicker } from "@mui/x-date-pickers";
import React, { useState } from "react";

const NewEvents = ({ onCancel }) => {
  return (
    <div className="absolute  z-10 top-0 left-0 w-full h-full bg-[#50525580] flex justify-center items-center">
      <div className="w-[70%] min-h-[70%] bg-white rounded-md p-8">
        <div className="w-full h-[90%] flex gap-4 justify-between flex-wrap">
          <div className="w-[50%] h-full flex flex-col gap-4  min-w-[10rem]">
            <input
              type="text"
              className="w-full h-10 pl-2 rounded-md border-none outline-none bg-slate-300 font-medium "
              placeholder="Event Type"
            />

            <div className="w-[full] h-[10rem] rounded-md bg-slate-300 relative flex justify-center items-center">
              <input
                type="file"
                accept=".jpg,.png"
                className="w-full h-full absolute top-0 left-0 opacity-0 cursor-pointer"
              />
              <p className="text-gray-500 font-medium">Add Image +</p>
            </div>
            <div className="w-full flex justify-between">
              <textarea
                className="w-[100%] h-[15rem] outline-none border-none rounded-md bg-slate-300 p-3 mt-4"
                placeholder="description"
              />
            </div>
          </div>
          <div className="w-[40%] min-w[10rem]  h-fit rounded-md  relative">
            <StaticDatePicker
              sx={{
                minWidth: "100%",
                height: "80%",
                display: "flex",
                flexDirection: "column",
                "&.css-przs87-MuiPickersLayout-root": {
                  display: "none",
                },
              }}
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

export default NewEvents;
