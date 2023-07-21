import React from "react";
import "./style.css";

export const Cover = () => {
  return (
    <div className="cover">
      <div className="div">
        <div className="overlap-group">
          <h1 className="bagzz-shopping-app">
            <span className="text-wrapper">
              Bagzz
              <br />
            </span>
            <span className="span">shopping app UI Kit</span>
          </h1>
          <img className="group" alt="Group" src="group-370.png" />
        </div>
        <p className="a-free-UI-kit-by">
          <span className="text-wrapper-2">A free UI kit by @</span>
          <a href="https://www.instagram.com/uxchoice/" rel="noopener noreferrer" target="_blank">
            <span className="text-wrapper-3">uxchoice</span>
          </a>
        </p>
        <div className="join-the-IG-wrapper">
          <p className="join-the-IG">
            <span className="text-wrapper-4">👉 Join the IG community of 142k designers </span>
            <a href="https://www.instagram.com/uxchoice/" rel="noopener noreferrer" target="_blank">
              <span className="text-wrapper-5">
                @uxchoice
                <br />
              </span>
            </a>
            <span className="text-wrapper-4">© 2022 UX Choice ⚫️ </span>
            <a href="https://uxchoice.com/" rel="noopener noreferrer" target="_blank">
              <span className="text-wrapper-6">uxchoice.com</span>
            </a>
          </p>
        </div>
        <div className="frame">
          <div className="text-wrapper-7">10+ Screens</div>
        </div>
        <div className="div-wrapper">
          <div className="text-wrapper-7">Free for commercial use</div>
        </div>
        <div className="frame-2">
          <div className="text-wrapper-7">Interactive prototype</div>
        </div>
        <div className="frame-3">
          <div className="text-wrapper-7">Smart animations</div>
        </div>
        <img className="screen-CHANGE-ME" alt="Screen CHANGE ME" src="screen-CHANGE-ME.png" />
        <img className="screencast" alt="Screencast" src="screencast-2022-05-10-14-12-24-1.png" />
      </div>
    </div>
  );
};