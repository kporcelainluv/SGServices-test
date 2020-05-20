import React, { useState } from "react";

import { Element } from "react-scroll";

import { ComponentHeading } from "./ComponentHeading";
import { Map } from "./Map";

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
                <label htmlFor="email" className="contacts__label">
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
                  htmlFor="about"
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

          <Map />
        </div>
      </section>
    </Element>
  );
};
