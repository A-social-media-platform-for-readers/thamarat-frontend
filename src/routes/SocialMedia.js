import { useState, useEffect } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Sidebar from "../Components/Sidebar/Sidebar";
import PostsContainer from "../Components/PostsContainer/PostsContainer";
import Notifications from "../Components/Notifications/Notifications";

import styles from "../styles/SocialMedia.module.css";
import NotificationContainer from "../Components/NotificationSecContainer/NotificationSecContainer";

const SocialMedia = () => {
  const [userName, setUserName] = useState(""); // Set the user name according to the user data sent back

  const jwt = localStorage.getItem("token");

  // request user data from backend

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://backend-9s26.onrender.com/auth/user/",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `${jwt}`,
          },
          credentials: "include", // Include cookies with the request
        }
      );

      const content = await response.json();
      setUserName(content.name);
      console.log(content);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div
        className="container-md pt-5 d-flex justify-content-between position-relative"
        style={{ height: "100vh" }}
      >
        <Navbar userName={userName} sIconColor={"#699CFF"} />
        <Sidebar />
        <div className={`${styles.socialMediaContent} row`}>
          <PostsContainer name={userName} />
        </div>
      </div>
      <NotificationContainer />
      <Notifications />
    </>
  );
};

export default SocialMedia;
