import { uploadBytes } from "firebase/storage";
import React, { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "@firebase/firestore";
import { db, storage } from "../../firebase.js";
import { getDownloadURL, ref } from "firebase/storage";

const NewKnowledge = ({
  onCancel,
  edit,
  setedit,
  defaultEditData,
  setDefaultEditData,
}) => {
  const [knowledgeData, setKnowledgeData] = useState({
    type: "",
    title: "",
    description: "",
    authorPicture: null,
    mediaUrl: "",
    authorName: "",
  });

  const [videoUrl, setVideoUrl] = useState("");
  const [isMediaChanged, setIsMediaChanged] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    if (knowledgeData.authorPicture && isMediaChanged) {
      const file = knowledgeData.mediaFile;

      if (file instanceof Blob) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setVideoUrl(e.target.result);
        };
        reader.readAsDataURL(file);
      }
    }
  }, [knowledgeData.authorPicture, isMediaChanged]);

  useEffect(() => {
    if (edit) {
      console.log(defaultEditData);
      setKnowledgeData(defaultEditData);
    }
  }, [edit, defaultEditData]);

  const upload = async () => {
    let url = null;

    if (knowledgeData.mediaFile && !edit) {
      try {
        const mediaRef = ref(
          storage,
          `knowledge/${knowledgeData.mediaFile.name}`
        );
        await uploadBytes(mediaRef, knowledgeData.authorPicture);
        url = await getDownloadURL(mediaRef);
        console.log("Media uploaded to:", url);
      } catch (e) {
        console.log(e);
      }
    }

    if (!edit) {
      const eventRef = collection(db, "knowledge");
      try {
        await addDoc(eventRef, { ...knowledgeData, authorPicture: url });
        console.log("Added to database");
      } catch (e) {
        console.log(e);
      }
    } else {
      if (isMediaChanged) {
        try {
          const mediaRef = ref(
            storage,
            `knowledge/${knowledgeData.authorPicture.name}`
          );
          await uploadBytes(mediaRef, knowledgeData.authorPicture);
          url = await getDownloadURL(mediaRef);
          setKnowledgeData((prevData) => ({ ...prevData, authorPicture: url }));
          console.log("Media updated in:", url);
        } catch (e) {
          console.log(e);
        }
      }

      const docRef = doc(db, "knowledge", knowledgeData.id);
      const fieldsToExclude = !isMediaChanged
        ? ["authorPicture", "id"]
        : ["id"];
      const knowledgeDataToUpdate = Object.fromEntries(
        Object.entries({ ...knowledgeData, authorPicture: url }).filter(
          ([key]) => !fieldsToExclude.includes(key)
        )
      );

      try {
        await updateDoc(docRef, knowledgeDataToUpdate);
        console.log("Document updated:", knowledgeDataToUpdate);
        onCancel();
      } catch (e) {
        console.log(e);
      }
    }
    onCancel();
  };

  const getVideoId = (url) => {
    const regex =
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url?.match(regex);
    return match ? match[1] : null;
  };

  console.log(`${knowledgeData.mediaUrl.slice(0,25)}embed/${knowledgeData.mediaUrl.slice(25,)}?utm_source=generator`)

  return (
    <div className="absolute w-screen h-screen lg:w-full lg:h-full z-10 top-0 left-0 bg-[#50525580] flex justify-center items-center">
      <div className="w-full lg:w-[90%] h-full md:h-fit bg-white rounded-md p-4 md:p-8">
        <div className="flex flex-wrap justify-between w-full gap-4 mt-8 h-fit">
          <div className="w-full md:w-[50%] h-fit flex flex-col gap-4 ">
            {/* <input
              type="text"
              className="w-full h-10 pl-2 font-medium border-none rounded-md outline-none bg-slate-300"
              placeholder="Type"
              value={knowledgeData.type}
              onChange={(e) =>
                setKnowledgeData({ ...knowledgeData, type: e.target.value })
              }
            /> */}

            {/* <select
              className="w-full h-10 px-4 font-medium border-none rounded-md outline-none bg-green-300 "
              // placeholder="Leader Type *"
              value={knowledgeData.type}
              onChange={(e) =>
                setKnowledgeData({ ...knowledgeData, type: e.target.value })
              }
            >
              <option value="" disabled hidden>
                Select Type
              </option>
             
            </select> */}
            <div
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="relative w-full h-10 px-2 font-medium flex items-center cursor-pointer justify-between border-none rounded-md outline-none bg-slate-300 "
            >
              <p>{knowledgeData.type ? knowledgeData.type : "Select Type"}</p>
              <p>▼</p>
              {isDropdownOpen && (
                <div className="absolute w-full h-fit rounded-md bg-blue-300 left-0 top-11 flex flex-col shadow-md">
                  <div
                    value="pepTalks"
                    className="w-full h-10 border-b hover:bg-blue-200 px-4 pt-1 flex items-center"
                    onClick={() =>
                      setKnowledgeData({ ...knowledgeData, type: "pepTalks" })
                    }
                  >
                    Pep Talks
                  </div>
                  <div
                    value="podcast"
                    className="w-full h-10 border-b  hover:bg-blue-200 px-4 flex items-center"
                    onClick={() =>
                      setKnowledgeData({ ...knowledgeData, type: "podcast" })
                    }
                  >
                    Podcast
                  </div>
                  <div
                    value="LearningPrograms"
                    className="w-full h-10  hover:bg-blue-200 px-4 flex items-center"
                    onClick={() =>
                      setKnowledgeData({
                        ...knowledgeData,
                        type: "learningPrograms",
                      })
                    }
                  >
                    Learning Programs
                  </div>
                </div>
              )}
            </div>
            <input
              type="text"
              className="w-full h-10 pl-2 font-medium border-none rounded-md outline-none bg-slate-300"
              placeholder="Title"
              value={knowledgeData.title}
              onChange={(e) =>
                setKnowledgeData({
                  ...knowledgeData,
                  title: e.target.value,
                })
              }
            />
            <input
              type="text"
              className="w-full h-10 pl-2 font-medium border-none rounded-md outline-none bg-slate-300"
              placeholder="Author Name"
              value={knowledgeData.authorName}
              onChange={(e) =>
                setKnowledgeData({
                  ...knowledgeData,
                  authorName: e.target.value,
                })
              }
            />
          </div>
          <div
            className={`w-full md:w-[40%] h-[10rem] rounded-md ${
              knowledgeData.type === "podcast" ? "bg-white" : " bg-slate-300"
            } relative flex justify-center items-center mt-2`}
          >
            {((knowledgeData.mediaUrl && knowledgeData.type === "pepTalks") ||
              knowledgeData.type === "learningPrograms") && (
              <iframe
                className="absolute top-0 left-0 object-cover w-full h-full rounded-md z-1"
                src={`https://www.youtube.com/embed/${getVideoId(
                  knowledgeData.mediaUrl
                )}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="YouTube Video"
              ></iframe>
            )}
            <p className="font-medium text-gray-500">Media Preview 🖼️</p>

            {knowledgeData.mediaUrl && knowledgeData.type === "podcast" && (
              <iframe
                className="absolute top-0 left-0 object-cover w-full h-[10rem] rounded-md z-1"
                src={`${knowledgeData.mediaUrl.slice(0,25)}embed/${knowledgeData.mediaUrl.slice(25,)}?utm_source=generator`}
                // src="https://open.spotify.com/embed/episode/0r69jelWmQx5s6rBt44ns7?utm_source=generator"
                frameBorder="0"
                allowfullscreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
              // <iframe
              // src={knowledgeData.mediaUrl}
              //   className="absolute top-0 left-0 object-cover w-full h-[10rem] rounded-md z-1"
              //   frameBorder="0"
              //   allowTransparency="true"
              //   allow="encrypted-media"
              // ></iframe>
            )}
            {knowledgeData.mediaFile &&
              knowledgeData.sourceType === "video" && (
                <video
                  src={videoUrl}
                  alt="video"
                  className="absolute top-0 left-0 object-cover w-full h-full rounded-md z-1"
                  controls
                />
              )}
          </div>
        </div>
        <div className="flex flex-wrap justify-between w-full h-fit mt-9 md:mt-0">
          <textarea
            className="w-full md:w-[50%] h-[15rem] outline-none border-none rounded-md bg-slate-300 p-3"
            placeholder="Description"
            value={knowledgeData.description}
            onChange={(e) =>
              setKnowledgeData({
                ...knowledgeData,
                description: e.target.value,
              })
            }
          />
          <div className="w-full md:w-[40%] h-full flex flex-col gap-5 mt-5">
            <input
              type="text"
              className="w-full h-10 pl-2 font-medium border-none rounded-md outline-none bg-slate-200"
              placeholder="Link 🔗"
              value={knowledgeData.mediaUrl}
              onChange={(e) =>
                setKnowledgeData({ ...knowledgeData, mediaUrl: e.target.value })
              }
            />
            <div className="relative flex items-center justify-center w-full h-10 pl-2 font-medium border-none rounded-md outline-none bg-slate-300">
              <input
                type="file"
                accept="image/* video/*"
                className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    setKnowledgeData((prevData) => ({
                      ...prevData,
                      authorPicture: file,
                    }));
                    setIsMediaChanged(true);
                  }
                }}
              />
              <p className="font-medium text-gray-500">
                {knowledgeData?.authorPicture?.name
                  ? knowledgeData?.authorPicture?.name
                  : "Add Author Profile +"}
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-[2.5rem] flex justify-between items-center mt-8">
          <div
            onClick={() => onCancel()}
            className="w-[5rem] h-full rounded-md bg-red-500 flex items-center justify-center cursor-pointer shadow-md shadow-red-100"
          >
            <p>Cancel</p>
          </div>
          <div
            className="w-[9rem] h-full rounded-md bg-blue-500 flex items-center justify-center cursor-pointer shadow-md shadow-blue-100"
            onClick={() => upload()}
          >
            <p className="font-medium text-white">Upload</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewKnowledge;
