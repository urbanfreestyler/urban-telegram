import {
  faFaceSmile,
  faWindowMaximize,
} from "@fortawesome/free-regular-svg-icons";

import {
  faChevronCircleRight,
  faChevronRight,
  faMicrophone,
  faPaperclip,
  faPhone,
  faSearch,
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef } from "react";
import useOnScreen from "../../assets/js/useOnScreen";

import "./ChatMessages.css";

import profImg from "../../assets/img/profPic.jpg";

export default function ChatMessages() {
  const chat_1 = useRef();
  const IsVisible = () => {
    return useOnScreen(chat_1);
  };

  const searchIcon = <FontAwesomeIcon icon={faSearch} />;
  const cellPhone = <FontAwesomeIcon icon={faPhone} />;
  const rightSidebar = <FontAwesomeIcon icon={faWindowMaximize} />;
  const options = <FontAwesomeIcon icon={faEllipsisVertical} />;
  const attachFile = <FontAwesomeIcon icon={faPaperclip} />;
  const emojy = <FontAwesomeIcon icon={faFaceSmile} />;
  const microphone = <FontAwesomeIcon icon={faMicrophone} />;
  const sendMessage = <FontAwesomeIcon icon={faChevronCircleRight} />;

  return (
    <div className="chatmessages">
      <div className="chatmessages__topbar">
        <div className="topbar_contactinfo">
          <div className="topbar_contactname">Bekzod Rashidov</div>
          <div className="topbar_lastseen">last seen recently</div>
        </div>
        <div className="topbar_icons">
          <div className="px-2">{searchIcon}</div>
          <div className="px-2">{cellPhone}</div>
          <div className="px-2">{rightSidebar}</div>
          <div className="px-2">{options}</div>
        </div>
      </div>
      <div className="chatmessages__middle">
        <div className="chatmessages__container">
          <div className="position-relative">
            <div id="chatmessages_1" ref={chat_1}>
              <div className="chatmessages__date">Today</div>
              <div className="chatmessages__message">
                <div className="chatmessages__profileimg">
                  <img src={profImg} className="profImg" />
                </div>
                <div className="chatmessages__from">
                  Wake me up! Lorem ipsum dolot
                  <div className="chatmessages__time">04:20 PM</div>
                </div>
              </div>
              <div className="chatmessages__to"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="chatmessages__sendbar">
        <div className="sendbar_attach">{attachFile}</div>
        <input className="sendbar_input" placeholder="Write message..."></input>
        <div className="sendbar_send">
          <div className="px-2">{emojy}</div>
          <div className="px-2">{microphone}</div>
          <div className="px-2 d-none">{sendMessage}</div>
        </div>
      </div>
    </div>
  );
}
