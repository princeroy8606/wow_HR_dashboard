import React, { useEffect, useState } from "react";

const NewMentor = ({ onCancel }) => {
  const [testimonialData, setTestimonialData] = useState({
    name: "",
    designation: "",
    organization: "",
    image: null,
    description: "",
  });

  const [imageUrl, setImageUrl] = useState("");

  const handleInput = (type, value) => {
    setTestimonialData({ ...testimonialData, [type]: value });
  };

  const handleUpload = () => {
    console.log(testimonialData);
  };

  useEffect(() => {
    if (testimonialData.image) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageUrl(e.target.result);
      };
      reader.readAsDataURL(testimonialData.image);
    }
  }, [testimonialData.image]);

  console.log(testimonialData); 

  return (
    <div className="absolute w-screen h-screen lg:w-full lg:h-full  z-10 top-0 left-0 bg-[#50525580] flex justify-center items-center">
      <div className="w-full md:w-[80%] h-full md:h-fit bg-white rounded-md p-4  md:p-8">
        <div className="w-full h-fit flex gap-4 justify-between flex-wrap mt-12 md:mt-0">
          <div className="w-full md:w-[50%] h-full flex flex-col gap-7 ">
            <input
              type="text"
              className="w-full h-10 pl-2 rounded-md border-none outline-none bg-slate-300 font-medium "
              placeholder="Name *"
              value={testimonialData.name}
              onChange={(e) => handleInput("name", e.target.value)}
            />
            <input
              type="text"
              className="w-full h-10 pl-2 rounded-md border-none outline-none bg-slate-300 font-medium "
              placeholder="Designation *"
              value={testimonialData.designation}
              onChange={(e) => handleInput("designation", e.target.value)}
            />
            <input
              type="text"
              className="w-full h-10 pl-2 rounded-md border-none outline-none bg-slate-300 font-medium "
              placeholder="Organization*"
              value={testimonialData.organization}
              onChange={(e) => handleInput("organization", e.target.value)}
            />
          </div>
          <div className="w-full md:w-[40%] h-[12rem] rounded-md bg-slate-300 relative flex justify-center items-center">
            <input
              type="file"
              accept=".jpg,.png"
              className="w-full h-full absolute top-0 left-0 opacity-0 z-10 cursor-pointer"
              onChange={(e) =>
                setTestimonialData({
                  ...testimonialData,
                  image: e.target.files[0],
                })
              }
            />
            {testimonialData.image ? (
              <img
                src={imageUrl}
                alt="image"
                className="absolute w-full h-full top-0 left-0 z-1 rounded-md object-cover"
              />
            ) : (
              <p className="text-gray-500 font-medium">Add Profile + </p>
            )}
          </div>
        </div>
        <div className="w-full flex justify-between">
          <textarea
            className="w-[100%] h-[12rem] outline-none border-none rounded-md bg-slate-300 p-3 mt-4"
            placeholder="description *"
            value={testimonialData.description}
            onChange={(e) => handleInput("description", e.target.value)}
          />
        </div>
        <div className="w-full h-[2.5rem] flex justify-between items-center mt-8">
          <div
            onClick={() => onCancel()}
            className="w-[5rem] h-full rounded-md bg-red-500 flex items-center justify-center cursor-pointer shadow-md shadow-red-100"
          >
            <p>Cancel</p>
          </div>
          <div
            onClick={() => handleUpload()}
            className="w-[9rem] h-full rounded-md bg-blue-500 flex items-center justify-center cursor-pointer shadow-md shadow-blue-100"
          >
            <p className="text-white font-medium">Upload Mentor</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewMentor;
