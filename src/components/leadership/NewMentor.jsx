import React, { useEffect, useState } from "react";
import {
  db,
  storage,
  collection,
  addDoc,
  ref,
  uploadBytes,
  getDownloadURL,
  doc,
  updateDoc,
} from "../../firebase";

const NewMentor = ({ onCancel, onAddMentor, mentorToEdit }) => {
  const [mentorData, setMentorData] = useState({
    name: "",
    job: "",
    leaderType: "",
    location: "",
    profileImg: null,
    description: "",
    linkedIn: "",
    github: "",
    twitter: "",
    instagram: "",
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);

  const resetMentorData = () => {
    setMentorData({
      name: "",
      job: "",
      leaderType: "",
      location: "",
      profileImg: null,
      description: "",
      linkedIn: "",
      github: "",
      twitter: "",
      instagram: "",
    });
    setImageUrl(""); // Reset the image URL
  };

  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    if (mentorToEdit) {
      setMentorData(mentorToEdit);
      setImageUrl(mentorToEdit.profileImg || "");
    }
  }, [mentorToEdit]);

  const handleInput = (type, value) => {
    setMentorData({ ...mentorData, [type]: value });
  };

  useEffect(() => {
    if (mentorData.profileImg && typeof mentorData.profileImg === "object") {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageUrl(e.target.result);
      };
      reader.readAsDataURL(mentorData.profileImg);
    }
  }, [mentorData.profileImg]);

  const handleUploadMentor = async () => {
    if (
      !mentorData.name ||
      !mentorData.job ||
      !mentorData.leaderType ||
      !mentorData.location ||
      !mentorData.linkedIn
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    try {
      let uploadedImageUrl = imageUrl;

      if (mentorData.profileImg && typeof mentorData.profileImg === "object") {
        const imageRef = ref(storage, `mentors/${mentorData.profileImg.name}`);
        const snapshot = await uploadBytes(imageRef, mentorData.profileImg);
        uploadedImageUrl = await getDownloadURL(snapshot.ref);
      }

      if (mentorToEdit) {
        await updateDoc(doc(db, "mentors", mentorToEdit.id), {
          ...mentorData,
          profileImg: uploadedImageUrl,
        });
        onAddMentor({
          id: mentorToEdit.id,
          ...mentorData,
          profileImg: uploadedImageUrl,
        });
      } else {
        const docRef = await addDoc(collection(db, "mentors"), {
          ...mentorData,
          profileImg: uploadedImageUrl,
        });
        onAddMentor({
          id: docRef.id,
          ...mentorData,
          profileImg: uploadedImageUrl,
        });
      }

      console.log("Mentor added/updated successfully");
      onCancel();
    } catch (error) {
      console.error("Error uploading mentor:", error);
    }
  };
  return (
    <div className="absolute z-10 top-0 left-0 w-screen h-screen lg:w-full lg:h-full bg-[#50525580] flex justify-center items-center">
      <div className="w-full md:w-[80%] h-full md:h-fit bg-white rounded-md p-4 md:p-8">
        <div className="flex flex-wrap justify-between w-full gap-4 mt-12 h-fit md:mt-0">
          <div className="w-full md:w-[50%] h-full flex flex-col gap-4 min-w-[10rem]">
            <input
              type="text"
              className="w-full h-10 pl-2 font-medium border-none rounded-md outline-none bg-slate-300"
              placeholder="Name *"
              value={mentorData.name}
              onChange={(e) => handleInput("name", e.target.value)}
            />
            <input
              type="text"
              className="w-full h-10 pl-2 font-medium border-none rounded-md outline-none bg-slate-300"
              placeholder="Job *"
              value={mentorData.job}
              onChange={(e) => handleInput("job", e.target.value)}
            />
            <div
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="relative w-full h-10 px-2 font-medium flex items-center cursor-pointer justify-between border-none rounded-md outline-none bg-slate-300 "
            >
              <p>{mentorData.type ? mentorData.type : "Select Type"}</p>
              <p>▼</p>
              {isDropdownOpen && (
                <div className="absolute w-full h-fit rounded-md bg-blue-300 left-0 top-11 flex flex-col shadow-md z-10">
                  <div
                    value="pepTalks"
                    className="w-full h-10 border-b hover:bg-blue-200 px-4 pt-1 flex items-center"
                    onClick={() =>
                      setMentorData({ ...mentorData, leaderType: "Core Team" })
                    }
                  >
                    Core Team
                  </div>
                  <div
                    value="podcast"
                    className="w-full h-10 border-b  hover:bg-blue-200 px-4 flex items-center"
                    onClick={() =>
                      setMentorData({ ...mentorData, leaderType: "Mentor" })
                    }
                  >
                    Mentor
                  </div>
                </div>
              )}
            </div>
            <div
              onClick={() => setIsLocationDropdownOpen(!isLocationDropdownOpen)}
              className="relative w-full h-10 px-2 font-medium flex items-center cursor-pointer justify-between border-none rounded-md outline-none bg-slate-300 "
            >
              <p>
                {mentorData.location ? mentorData.location : "Choose Location"}
              </p>
              <p>▼</p>
              {isLocationDropdownOpen && (
                <div className="absolute w-full h-fit rounded-md bg-blue-300 left-0 top-11 flex flex-col shadow-md">
                  <div
                    className="w-full h-10 border-b hover:bg-blue-200 px-4 pt-1 flex items-center"
                    onClick={() =>
                      setMentorData({ ...mentorData, location: "Hyderabad" })
                    }
                  >
                    Hyderabad
                  </div>
                  <div
                    className="w-full h-10 border-b  hover:bg-blue-200 px-4 flex items-center"
                    onClick={() =>
                      setMentorData({ ...mentorData, location: "Bangalore" })
                    }
                  >
                    Bangalore
                  </div>
                  <div
                    className="w-full h-10 border-b  hover:bg-blue-200 px-4 flex items-center"
                    onClick={() =>
                      setMentorData({ ...mentorData, location: "Chennai" })
                    }
                  >
                    Chennai
                  </div>
                </div>
              )}
            </div>
            {/* <input
              type="text"
              className="w-full h-10 pl-2 font-medium border-none rounded-md outline-none bg-slate-300"
              placeholder="Location *"
              value={mentorData.location}
              onChange={(e) => handleInput("location", e.target.value)}
            /> */}
          </div>
          <div className="w-full md:w-[40%] h-[10rem] rounded-md bg-slate-300 relative flex justify-center items-center">
            <input
              type="file"
              accept=".jpg,.png"
              className="absolute top-0 left-0 z-10 w-full h-full opacity-0 cursor-pointer"
              onChange={(e) =>
                setMentorData({
                  ...mentorData,
                  profileImg: e.target.files[0],
                })
              }
            />
            {mentorData.profileImg ? (
              <img
                src={imageUrl}
                alt="image"
                className="absolute top-0 left-0 object-cover w-full h-full rounded-md z-1"
              />
            ) : (
              <p className="font-medium text-gray-500">Add Profile +</p>
            )}
          </div>
        </div>
        <div className="flex flex-wrap justify-between w-full mt-8">
          <textarea
            className="w-full md:w-[50%] h-[15rem] outline-none border-none rounded-md bg-slate-300 p-3"
            placeholder="description"
            value={mentorData.description}
            onChange={(e) => handleInput("description", e.target.value)}
          />
          <div className="w-full md:w-[40%] h-full flex flex-col gap-5 mt-5">
            <input
              type="text"
              className="w-full h-10 pl-2 font-medium border-none rounded-md outline-none bg-slate-200"
              placeholder="LinkedIn 🔗 *"
              value={mentorData.linkedIn}
              onChange={(e) => handleInput("linkedIn", e.target.value)}
            />
            <input
              type="text"
              className="w-full h-10 pl-2 font-medium border-none rounded-md outline-none bg-slate-200"
              placeholder="Github 🔗"
              value={mentorData.github}
              onChange={(e) => handleInput("github", e.target.value)}
            />
            <input
              type="text"
              className="w-full h-10 pl-2 font-medium border-none rounded-md outline-none bg-slate-200"
              placeholder="Twitter 🔗"
              value={mentorData.twitter}
              onChange={(e) => handleInput("twitter", e.target.value)}
            />
            <input
              type="text"
              className="w-full h-10 pl-2 font-medium border-none rounded-md outline-none bg-slate-200"
              placeholder="Instagram 🔗"
              value={mentorData.instagram}
              onChange={(e) => handleInput("instagram", e.target.value)}
            />
          </div>
        </div>
        <div className="w-full h-[2.5rem] flex justify-between items-center mt-8">
          <button
            type="button"
            onClick={() => {
              onCancel();
              resetMentorData();
            }}
            className="w-[5rem] h-full rounded-md bg-red-500 flex items-center justify-center cursor-pointer shadow-md shadow-red-100"
          >
            <p>Cancel</p>
          </button>
          <button
            type="button"
            onClick={() => handleUploadMentor()}
            className="w-[9rem] h-full rounded-md bg-blue-500 flex items-center justify-center cursor-pointer shadow-md shadow-blue-100"
          >
            <p className="font-medium text-white">Upload Mentor</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewMentor;
