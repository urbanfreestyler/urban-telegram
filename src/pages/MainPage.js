import {
  faBullhorn,
  faCheck,
  faCheckDouble,
  faThumbTack,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import ChatMessages from "./ChatMessages/ChatMessages";

import $ from "jquery";
import "jquery-ui-bundle";
import "jquery-ui-bundle/jquery-ui.css";

import "../style/main.css";
import useOnScreen from "../assets/js/useOnScreen";

import profImg from "../assets/img/profPic.jpg";
import reactIcon from "../assets/img/reactlogo.png";
import doraImg from "../assets/img/dora.jpg";
import Sidebar from "../components/Sidebar";
import IsVisible from "../pages/ChatMessages/ChatMessages";
import TopNavbar from "../components/TopNavbar";

const sentIcon = <FontAwesomeIcon icon={faCheck} />;
const readIcon = <FontAwesomeIcon icon={faCheckDouble} />;
const pinIcon = <FontAwesomeIcon icon={faThumbTack} />;
const channelIcon = <FontAwesomeIcon icon={faBullhorn} />;

const Main = () => {
  let [opened, setOpened] = useState(false);

  const ref = useRef();

  useEffect(() => {
    $(function () {
      let newWindowWidth = $(window).width();
      if (newWindowWidth > 950) {
        $("#chatWindow").resizable({
          handles: "e",
          resizeHeight: false,
        });
      }
    });
  });

  const bottomRef = useRef();

  useEffect(() => {
    // const el = document.getElementById("chatContainer");
    bottomRef.current.scrollIntoView({
      block: "end",
      behavior: "smooth",
    });
  }, [bottomRef]);

  const removeSelectChatMessage = () => {
    document.getElementById("selectChatMessage").remove();
    $("#chatmessages_1").show();
    $(".chatmessages").show();

    $("#chat_1").css("background", "lightskyblue");
  };

  const openMessages = () => {
    setOpened(true);
    removeSelectChatMessage();
  };

  // const returnToMain = () => {};
  return (
    <div id="mainPage" className="d-flex">
      <Sidebar />

      <div id="chatWindow">
        <div className="chat-window" ref={ref}>
          <div className="chat-info-container">
            {/* Navigation */}
            <TopNavbar />
            {/* End of navigation */}

            {/* Chats list */}
            <div className="chats_container px-1">
              <div
                className="chat_card d-flex justify-content-between align-items-center"
                id="chat_1"
                onClick={openMessages}
              >
                <div className="chat_user_info">
                  <img
                    className="rounded-circle chats__profile_img mx-2"
                    src={profImg}
                    alt="profile"
                  ></img>

                  <div className="d-flex flex-column justify-content-around w-100">
                    <div className="d-flex justify-content-between">
                      <div className="chats__chat_name">Bekzod Rashidov</div>
                      <div className="d-flex justify-content-center align-items-center">
                        <span className="chats__message_sent">{sentIcon}</span>
                        <div className="chats__message_date">4:50 PM</div>
                      </div>
                    </div>

                    <div className="d-flex justify-content-between">
                      <div className="chats__message_text">How's it going?</div>
                      <div className="chat__message_status">
                        <div className="pinnedChat">{pinIcon}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="chat_card d-flex justify-content-between align-items-center">
                <div className="chat_user_info">
                  <img
                    className="rounded-circle chats__profile_img mx-2"
                    src={doraImg}
                    alt="profile"
                  ></img>

                  <div className="d-flex flex-column justify-content-around w-100">
                    <div className="d-flex justify-content-between">
                      <div className="chats__chat_name">Дора</div>
                      <div className="d-flex justify-content-center align-items-center">
                        <div className="chats__message_sent">{readIcon}</div>
                        <div className="chats__message_date">Sunday</div>
                      </div>
                    </div>

                    <div className="d-flex justify-content-between">
                      <div className="chats__message_text">Дура</div>
                      <div className="chat__message_status"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="chat_card d-flex justify-content-between align-items-center">
                <div className="chat_user_info">
                  <img
                    className="rounded-circle chats__profile_img mx-2"
                    src={reactIcon}
                    alt="profile"
                  ></img>

                  <div className="d-flex flex-column justify-content-around w-100">
                    <div className="d-flex justify-content-between">
                      <div className="chats__chat_name">
                        <div>
                          <span className="me-1">{channelIcon}</span>
                          Learn React fast and easy
                        </div>
                      </div>
                      <div className="d-flex justify-content-center align-items-center">
                        <div className="chats__message_date">22/11/2022</div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div className="chats__message_text">
                        Let's build Telegram clone with ReactJS!
                      </div>
                      <div className="chat__message_status">
                        <div className="chat__newMessagesNum chat__new_message_bg">
                          1
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="chat_card d-flex justify-content-between align-items-center"
                id="chat_1"
                onClick={openMessages}
              >
                <div className="chat_user_info">
                  <img
                    className="rounded-circle chats__profile_img mx-2"
                    src={profImg}
                    alt="profile"
                  ></img>

                  <div className="d-flex flex-column justify-content-around w-100">
                    <div className="d-flex justify-content-between">
                      <div className="chats__chat_name">Bekzod Rashidov</div>
                      <div className="d-flex justify-content-center align-items-center">
                        <span className="chats__message_sent">{sentIcon}</span>
                        <div className="chats__message_date">4:50 PM</div>
                      </div>
                    </div>

                    <div className="d-flex justify-content-between">
                      <div className="chats__message_text">How's it going?</div>
                      <div className="chat__message_status">
                        <div className="pinnedChat">{pinIcon}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="chat_card d-flex justify-content-between align-items-center">
                <div className="chat_user_info">
                  <img
                    className="rounded-circle chats__profile_img mx-2"
                    src={doraImg}
                    alt="profile"
                  ></img>

                  <div className="d-flex flex-column justify-content-around w-100">
                    <div className="d-flex justify-content-between">
                      <div className="chats__chat_name">Дора</div>
                      <div className="d-flex justify-content-center align-items-center">
                        <div className="chats__message_sent">{readIcon}</div>
                        <div className="chats__message_date">Sunday</div>
                      </div>
                    </div>

                    <div className="d-flex justify-content-between">
                      <div className="chats__message_text">Дура</div>
                      <div className="chat__message_status"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="chat_card d-flex justify-content-between align-items-center">
                <div className="chat_user_info">
                  <img
                    className="rounded-circle chats__profile_img mx-2"
                    src={reactIcon}
                    alt="profile"
                  ></img>

                  <div className="d-flex flex-column justify-content-around w-100">
                    <div className="d-flex justify-content-between">
                      <div className="chats__chat_name">
                        <div>
                          <span className="me-1">{channelIcon}</span>
                          Learn React fast and easy
                        </div>
                      </div>
                      <div className="d-flex justify-content-center align-items-center">
                        <div className="chats__message_date">22/11/2022</div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div className="chats__message_text">
                        Let's build Telegram clone with ReactJS!
                      </div>
                      <div className="chat__message_status">
                        <div className="chat__newMessagesNum chat__new_message_bg">
                          1
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="chat_card d-flex justify-content-between align-items-center"
                id="chat_1"
                onClick={openMessages}
              >
                <div className="chat_user_info">
                  <img
                    className="rounded-circle chats__profile_img mx-2"
                    src={profImg}
                    alt="profile"
                  ></img>

                  <div className="d-flex flex-column justify-content-around w-100">
                    <div className="d-flex justify-content-between">
                      <div className="chats__chat_name">Bekzod Rashidov</div>
                      <div className="d-flex justify-content-center align-items-center">
                        <span className="chats__message_sent">{sentIcon}</span>
                        <div className="chats__message_date">4:50 PM</div>
                      </div>
                    </div>

                    <div className="d-flex justify-content-between">
                      <div className="chats__message_text">How's it going?</div>
                      <div className="chat__message_status">
                        <div className="pinnedChat">{pinIcon}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="chat_card d-flex justify-content-between align-items-center">
                <div className="chat_user_info">
                  <img
                    className="rounded-circle chats__profile_img mx-2"
                    src={doraImg}
                    alt="profile"
                  ></img>

                  <div className="d-flex flex-column justify-content-around w-100">
                    <div className="d-flex justify-content-between">
                      <div className="chats__chat_name">Дора</div>
                      <div className="d-flex justify-content-center align-items-center">
                        <div className="chats__message_sent">{readIcon}</div>
                        <div className="chats__message_date">Sunday</div>
                      </div>
                    </div>

                    <div className="d-flex justify-content-between">
                      <div className="chats__message_text">Дура</div>
                      <div className="chat__message_status"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="chat_card d-flex justify-content-between align-items-center">
                <div className="chat_user_info">
                  <img
                    className="rounded-circle chats__profile_img mx-2"
                    src={reactIcon}
                    alt="profile"
                  ></img>

                  <div className="d-flex flex-column justify-content-around w-100">
                    <div className="d-flex justify-content-between">
                      <div className="chats__chat_name">
                        <div>
                          <span className="me-1">{channelIcon}</span>
                          Learn React fast and easy
                        </div>
                      </div>
                      <div className="d-flex justify-content-center align-items-center">
                        <div className="chats__message_date">22/11/2022</div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div className="chats__message_text">
                        Let's build Telegram clone with ReactJS!
                      </div>
                      <div className="chat__message_status">
                        <div className="chat__newMessagesNum chat__new_message_bg">
                          1
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="chat_card d-flex justify-content-between align-items-center"
                id="chat_1"
                onClick={openMessages}
              >
                <div className="chat_user_info">
                  <img
                    className="rounded-circle chats__profile_img mx-2"
                    src={profImg}
                    alt="profile"
                  ></img>

                  <div className="d-flex flex-column justify-content-around w-100">
                    <div className="d-flex justify-content-between">
                      <div className="chats__chat_name">Bekzod Rashidov</div>
                      <div className="d-flex justify-content-center align-items-center">
                        <span className="chats__message_sent">{sentIcon}</span>
                        <div className="chats__message_date">4:50 PM</div>
                      </div>
                    </div>

                    <div className="d-flex justify-content-between">
                      <div className="chats__message_text">How's it going?</div>
                      <div className="chat__message_status">
                        <div className="pinnedChat">{pinIcon}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="chat_card d-flex justify-content-between align-items-center">
                <div className="chat_user_info">
                  <img
                    className="rounded-circle chats__profile_img mx-2"
                    src={doraImg}
                    alt="profile"
                  ></img>

                  <div className="d-flex flex-column justify-content-around w-100">
                    <div className="d-flex justify-content-between">
                      <div className="chats__chat_name">Дора</div>
                      <div className="d-flex justify-content-center align-items-center">
                        <div className="chats__message_sent">{readIcon}</div>
                        <div className="chats__message_date">Sunday</div>
                      </div>
                    </div>

                    <div className="d-flex justify-content-between">
                      <div className="chats__message_text">Дура</div>
                      <div className="chat__message_status"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="chat_card d-flex justify-content-between align-items-center">
                <div className="chat_user_info">
                  <img
                    className="rounded-circle chats__profile_img mx-2"
                    src={reactIcon}
                    alt="profile"
                  ></img>

                  <div className="d-flex flex-column justify-content-around w-100">
                    <div className="d-flex justify-content-between">
                      <div className="chats__chat_name">
                        <div>
                          <span className="me-1">{channelIcon}</span>
                          Learn React fast and easy
                        </div>
                      </div>
                      <div className="d-flex justify-content-center align-items-center">
                        <div className="chats__message_date">22/11/2022</div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div className="chats__message_text">
                        Let's build Telegram clone with ReactJS!
                      </div>
                      <div className="chat__message_status">
                        <div className="chat__newMessagesNum chat__new_message_bg">
                          1
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="chat_card d-flex justify-content-between align-items-center"
                id="chat_1"
                onClick={openMessages}
              >
                <div className="chat_user_info">
                  <img
                    className="rounded-circle chats__profile_img mx-2"
                    src={profImg}
                    alt="profile"
                  ></img>

                  <div className="d-flex flex-column justify-content-around w-100">
                    <div className="d-flex justify-content-between">
                      <div className="chats__chat_name">Bekzod Rashidov</div>
                      <div className="d-flex justify-content-center align-items-center">
                        <span className="chats__message_sent">{sentIcon}</span>
                        <div className="chats__message_date">4:50 PM</div>
                      </div>
                    </div>

                    <div className="d-flex justify-content-between">
                      <div className="chats__message_text">How's it going?</div>
                      <div className="chat__message_status">
                        <div className="pinnedChat">{pinIcon}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="chat_card d-flex justify-content-between align-items-center">
                <div className="chat_user_info">
                  <img
                    className="rounded-circle chats__profile_img mx-2"
                    src={doraImg}
                    alt="profile"
                  ></img>

                  <div className="d-flex flex-column justify-content-around w-100">
                    <div className="d-flex justify-content-between">
                      <div className="chats__chat_name">Дора</div>
                      <div className="d-flex justify-content-center align-items-center">
                        <div className="chats__message_sent">{readIcon}</div>
                        <div className="chats__message_date">Sunday</div>
                      </div>
                    </div>

                    <div className="d-flex justify-content-between">
                      <div className="chats__message_text">Дура</div>
                      <div className="chat__message_status"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="chat_card d-flex justify-content-between align-items-center">
                <div className="chat_user_info">
                  <img
                    className="rounded-circle chats__profile_img mx-2"
                    src={reactIcon}
                    alt="profile"
                  ></img>

                  <div className="d-flex flex-column justify-content-around w-100">
                    <div className="d-flex justify-content-between">
                      <div className="chats__chat_name">
                        <div>
                          <span className="me-1">{channelIcon}</span>
                          Learn React fast and easy
                        </div>
                      </div>
                      <div className="d-flex justify-content-center align-items-center">
                        <div className="chats__message_date">22/11/2022</div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div className="chats__message_text">
                        Let's build Telegram clone with ReactJS!
                      </div>
                      <div className="chat__message_status">
                        <div className="chat__newMessagesNum chat__new_message_bg">
                          1
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* End of chats list */}
            </div>
            {/* End of chat list */}
          </div>
        </div>
      </div>
      {/* Messages container */}
      <div id="chatContainer" className="chat-container position-relative">
        <div id="selectChatMessage" className="blurred_bg">
          <div>Select a chat to start messaging</div>
        </div>
        <ChatMessages />

        <div ref={bottomRef} />
      </div>
      {/* End of messages container */}
    </div>
  );
};

export default Main;
