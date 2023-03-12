import React, { useState } from "react";
import Slide from "../Slide/Slide";
import "./scheduleSlide.scss";

import { scheduleData } from "./schedule-data";
import RadioButton from "../RadioButton/RadioButton";

const ScheduleSlide = () => {
  const [activeDay, setActiveDay] = useState<number>(0);

  const radioButtonData = [
    {
      id: 0,
      title: "Dan 1",
    },
    {
      id: 1,
      title: "Dan 2",
    },
    {
      id: 2,
      title: "Dan 3",
    },
    {
      id: 3,
      title: "Dan 4",
    },
  ];

  return (
    <Slide className="at-schedule-slide" id="schedule">
      <div className="at-title">Raspored</div>
      <RadioButton
        data={radioButtonData}
        activeElement={activeDay}
        onChange={setActiveDay}
      />

      {scheduleData[activeDay].map((event, idx) => (
        <div className="at-event-card" key={event.timeAndLocation + "-" + idx}>
          <div className="at-event-header">
            <div className="at-host-image-wrapper">
              <img
                src={event.hostImgSrc}
                alt={event.hostName}
                className="at-host-image"
              />
            </div>
            <div className="at-host-data-wrapper">
              <div className="at-host-name">{event.hostName}</div>
              <div className="at-host-description">{event.hostDescription}</div>
            </div>
          </div>
          <div className="at-event-name">{event.name}</div>
          <div className="at-event-time-and-location">
            {event.timeAndLocation}
          </div>
          <div className="at-event-description">{event.description}</div>
        </div>
      ))}
    </Slide>
  );
};

export default ScheduleSlide;
