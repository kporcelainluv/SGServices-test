import React, { useState } from "react";
import ScrollableAnchor from "react-scrollable-anchor";
import { YMaps, Map, Placemark, ZoomControl } from "react-yandex-maps";
import { ComponentHeading } from "./ComponentHeading";

const points = {
  center: {
    name: "Колодезный переулок д.2а",
    coordinates: [55.79769, 37.69742]
  },
  subway: {
    name: "метро Сокольники",
    coordinates: [55.78971, 37.6795]
  },
  square: {
    name: "Преображенская площадь",
    coordinates: [55.79513, 37.71201]
  }
};

export const Contacts = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <ScrollableAnchor id={"contact"}>
      <section className="contacts">
        <ComponentHeading name="Contact Us" color="black" />
        <div className="contacts__container">
          <form className="contacts__form">
            <div className="contacts__inputs">
              <div className="contacts__wrap">
                <label htmlFor="name" className="contacts__label">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  className="contacts__input"
                  onChange={e => setName(e.target.value)}
                />
              </div>
              <div className="contacts__wrap">
                <label htmlFor="name" className="contacts__label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  className="contacts__input"
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="contacts__textarea-container">
              <div className="contacts__textarea-wrap">
                <label
                  htmlFor="name"
                  className="contacts__label contacts__label--textarea"
                >
                  Your message
                </label>
                <textarea
                  name="about"
                  id="about"
                  className="contacts__textarea"
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                />
              </div>
            </div>

            <div className="contacts__submit">
              <input
                type="submit"
                className="button button--about"
                value="SUBMIT"
                onClick={e => {
                  e.preventDefault();
                  alert("Your message has been sent!");
                  setName("");
                  setEmail("");
                  setMessage("");
                }}
              />
            </div>
          </form>
          <MapBlock />
        </div>
      </section>
    </ScrollableAnchor>
  );
};

const MapBlock = () => {
  return (
    <div className="contacts__map-container">
      <YMaps modules={["geocode"]}>
        <Map
          className="contacts__map"
          defaultState={{
            center: [55.79364490310138, 37.70643920481206],
            zoom: 12
          }}
        >
          <ZoomControl options={{ float: "right" }} />
          {Object.values(points).map(c => {
            return (
              <Placemark
                key={c.name}
                options={{
                  draggable: false
                }}
                properties={{
                  iconCaption: c.name
                }}
                geometry={c.coordinates}
              />
            );
          })}
        </Map>
      </YMaps>
    </div>
  );
};
