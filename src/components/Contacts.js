import React, { useState } from "react";
import { YMaps, Map, Placemark, ZoomControl } from "react-yandex-maps";
import { Element } from "react-scroll";
import { faMapMarkerAlt as PointIcon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ComponentHeading } from "./ComponentHeading";
const CENTER = [55.79364490310138, 37.70643920481206];
const ZOOM = 12;

const points = {
  subway: {
    name: "метро Сокольники",
    coordinates: [55.78971, 37.6795]
  },
  square: {
    name: "Преображенская площадь",
    coordinates: [55.79513, 37.71201]
  },
  center: {
    name: "Колодезный переулок д.2а",
    coordinates: [55.79769, 37.69742]
  }
};

export const Contacts = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  return (
    <Element name="contact">
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
                  value={form.name}
                  className="contacts__input"
                  onChange={e => setForm({ ...form, name: e.target.value })}
                />
              </div>
              <div className="contacts__wrap">
                <label htmlFor="name" className="contacts__label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={form.email}
                  className="contacts__input"
                  onChange={e => setForm({ ...form, email: e.target.value })}
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
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
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
                  setForm({ name: "", email: "", message: "" });
                }}
              />
            </div>
          </form>
          <MapBlock />
        </div>
      </section>
    </Element>
  );
};

const MapBlock = () => {
  return (
    <div className="contacts__map-container">
      <span className="contacts__address">
        <FontAwesomeIcon icon={PointIcon} size="xs" /> Москва, Колодезный
        переулок д.2а
      </span>
      <YMaps modules={["geocode"]}>
        <Map
          className="contacts__map"
          defaultState={{
            center: CENTER,
            zoom: ZOOM
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
