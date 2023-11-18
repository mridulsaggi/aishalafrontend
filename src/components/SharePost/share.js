import "./share.css";
import React from "react";
import { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle"; // https://mui.com/material-ui/material-icons/ installed from this website and used npm install @mui/icons-material @mui/material @emotion/styled @emotion/react command to install this
import PermMediaIcon from "@mui/icons-material/PermMedia";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";

const Share = () => {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [media, setmedia] = useState([]);
  // const [pollQuestion, setPollQuestion] = useState("");
  const [pollQuestion, setPollQuestion] = useState("");
  const [pollOptions, setPollOptions] = useState(["", ""]);
  const [showPoll, setShowPoll] = useState(false);

  const handleMediaChange = (e) => {
    if (media === null) {
      setmedia(e.target.files[0]);
    } else {
      const files = Array.from(e.target.files);
      setmedia([...media, ...files]);
    }

    // setmedia(e.target.files[0]);
  };

  const handleRemoveImage = (index) => {
    setmedia((prevmedia) => {
      const updatedmedia = [...prevmedia];
      updatedmedia.splice(index, 1);
      console.log(updatedmedia); //printing the updated media file two times??
      return updatedmedia;
    });
  };

  const handlePollClick = () => {
    setShowPoll(!showPoll);
  };

  // const handlePollOptionChange = (index, value) => {
  //   const updatedOptions = [...pollOptions];
  //   updatedOptions[index] = value;
  //   setPollOptions(updatedOptions);
  // };
  const handlePollOptionChange = (index, value) => {
    const updatedOptions = [...pollOptions];
    updatedOptions[index] = value;
    setPollOptions(updatedOptions);

    const nonEmptyOptions = updatedOptions.filter(
      (option, idx) => idx < 2 || option !== ""
    );
    setPollOptions(nonEmptyOptions);
  };

  const handleFirstOptionChange = (value) => {
    const updatedOptions = [...pollOptions];
    updatedOptions[0] = value;
    setPollOptions(updatedOptions);
  };

  const addPollOption = () => {
    setPollOptions([...pollOptions, ""]);
  };

  const removePollOption = (index) => {
    const updatedOptions = [...pollOptions];
    updatedOptions.splice(index, 1);
    setPollOptions(updatedOptions);
  };
  const handleShare = (e, req, res) => {
    e.preventDefault();
    const { data } = axios.post(
      "http://localhost:3001/api/posts",
      {
        title,
        description,
        media,
        poll: {
          question: pollQuestion,
          options: pollOptions,
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    // Save the details here
    // You can use the values from the state variables like `title`, `description`, `media`, `pollQuestion`, and `pollOptions` to save the data to your backend or perform any other actions.

    // Example of saving data using axios:
    axios
      .post("http://localhost:3002/api/tutor-posts", {
        title,
        description,
        media,
        pollQuestion,
        pollOptions,
      })
      .then((response) => {
        // Handle success
        console.log("Data saved successfully:", response.data);
      })
      .catch((error) => {
        // Handle error
        console.error("Error saving data:", error);
      });

    // Reset the form or navigate to another page if needed
    // You can use the `setTitle`, `setDescription`, `setmedia`, `setPollQuestion`, and `setPollOptions` functions to reset the state variables back to their initial values.
  };

  return (
    <>
      <div className="share">
        <div className="shareWrapper">
          <div className="shareTop">
            <AccountCircleIcon
              htmlColor="#01265B"
              fontSize="large"
              className="userPP"
            />
            <div className="shareInput">
              <input
                type="text"
                placeholder="Enter a Title"
                className="shareTitle"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <hr className="inputHr" />

              <textarea
                placeholder="What's in your mind?"
                className="shareText"
                rows={4}
                // onChange={textRows}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
          </div>
          <hr className="shareHr" />
          <div className="uploaded">
            {/*--------------------------
                    POLL FORM
             ---------------------------*/}

            {showPoll && (
              <div className="pollInput">
                <textarea
                  placeholder="Enter your poll question"
                  className="shareInput sharePollInput"
                  value={pollQuestion}
                  rows={2}
                  onChange={(e) => setPollQuestion(e.target.value)}
                />
                {pollOptions.map((option, index) => (
                  <div key={index} className="pollOption">
                    <input
                      type="text"
                      placeholder="Enter poll option"
                      value={option}
                      onChange={(e) =>
                        handlePollOptionChange(index, e.target.value)
                      }
                    />

                    {index >= 2 && (
                      <button
                        className="removeBtn"
                        onClick={() => removePollOption(index)}
                      >
                        <DeleteIcon />
                      </button>
                    )}
                  </div>
                ))}
                {pollOptions.length < 10 && (
                  <button className="addBtn" onClick={addPollOption}>
                    {/* <AddIcon fontSize="large" /> */}
                    <p>Add Option</p>
                  </button>
                )}
              </div>
            )}
            {
              Array.isArray(media) &&
                media.map((file, index) => (
                  // <img
                  //   key={index}
                  //   className="sharedMedia"
                  //   src={URL.createObjectURL(file)}
                  //   style={{ width: "100px" }}
                  //   alt="Selected Media"
                  // />
                  <div key={index} className="shareMediaContainer">
                    {file.type.startsWith("image/") && (
                      <img
                        className="sharedMedia"
                        src={URL.createObjectURL(file)}
                        alt="Selected Media"
                      />
                    )}
                    {file.type.startsWith("video/") && (
                      <video
                        className="sharedMedia"
                        src={URL.createObjectURL(file)}
                        alt="Selected Media"
                        controls
                      />
                    )}
                    {file.type === "application/pdf" && (
                      <embed
                        className="sharedMedia"
                        src={URL.createObjectURL(file)}
                        type="application/pdf"
                        alt="Selected Media"
                        // style={{ scrollbarWidth: "100px" }}
                      />
                    )}
                    {/* {file.type.startsWith("application/") &&
                      !file.type.startsWith("image/") &&
                      !file.type.startsWith("video/") && (
                        <div className="sharedMedia">
                          File type: {file.type}
                        </div>
                      )} */}
                    <button
                      className="mediaRemoveBtn"
                      onClick={() => {
                        handleRemoveImage(index);
                      }}
                    >
                      X
                    </button>
                  </div>
                ))

              // : media && (
              // <div className="shareMediaContainer">
              //   <img
              //     className="sharedMedia"
              //     src={URL.createObjectURL(media)}
              //     alt="Selected Media"
              //   />
              //   <button
              //     className="removeButton"
              //     onClick={() => handleRemoveImage(media)}
              //   >
              //     X
              //   </button>
              // </div>
              //   )
            }
          </div>
          <div className="shareButtom">
            <div className="shareOptions">
              <div className="shareOpt">
                <label htmlFor="media" className="shareOptIcon">
                  <div className="shareOpt">
                    <PermMediaIcon
                      htmlColor="#01265B"
                      className="shareOptIcon"
                    />
                    <span className="shareOptText">Media</span>
                  </div>
                </label>
                <input
                  type="file"
                  id="media"
                  className="shareOptText"
                  onChange={handleMediaChange}
                  multiple
                  style={{ display: "none" }}
                />
              </div>
              {/* <Poll /> */}
              <div className="shareOpt">
                <PermMediaIcon
                  htmlColor="#01265B"
                  className="shareOptIcon"
                  onClick={() => setShowPoll(!showPoll)}
                />
                <span className="shareOptText" onClick={handlePollClick}>
                  Poll
                </span>
              </div>
              {/* <div className="shareOpt">
                <PermMediaIcon className="shareOptIcon" />
                <span className="shareOptText">Poll</span>
              </div> */}

              {/* <div className="shareOpt">
                <PermMediaIcon className="shareOptIcon" />
                <span className="shareOptText"></span>
              </div>
              <div className="shareOpt">
                <PermMediaIcon className="shareOptIcon" />
                <span className="shareOptText">Photo/video</span>
              </div> */}
            </div>
            <button className="shareBtn" onClick={handleShare}>
              Share
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Share;
