import React from "react";
import styled from "styled-components";
import { services } from "../utils/constants";
const Services = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <div className="title">
          <h2>Services </h2>
          <div className="underline"></div>
        </div>
        <br />
        <br />
        <article className="header" style={{ textAlign: "center" }}>
          <div
            style={{
              color: "grey",
              fontFamily: "Arial, sans-serif",
              fontSize: "clamp(1.5rem,2.5vw,2.5rem)",
            }}
          >
            "Where Style Meets Comfort"
            <h3
              style={{
                color: "#E74C3C",
                fontFamily: "Helvetica, sans-serif",
              }}
            >
              "Customized Just for You"
            </h3>
          </div>

          <p
            style={{
              fontFamily: "Rouge Script",
              fontSize: "clamp(1rem,1.5vw, 1.5rem)",
              color: "black",
            }}
          >
            Looking for something unique? Our custom furniture service allows
            you to create bespoke pieces tailored to your exact specifications.
            Whether it's custom dimensions, materials, or designs, we work
            closely with you to bring your vision to life. Elevate your space
            with furniture that's truly one of a kind.You can explore our
            curated collection of ready-made furniture designed to suit various
            styles and spaces.
          </p>
        </article>

        <div className="services-center">
          {services.map((service) => {
            const { id, icon, title, text } = service;
            return (
              <article className="service" key={id}>
                <span className="icon">{icon}</span>
                <h4>{title}</h4>
                <p>{text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  h3,
  h4 {
    color: var(--clr-primary-1);
  }
  padding: 5rem 0;

  background-color: #ccd5ae;

  .header h3 {
    margin-bottom: 2rem;
  }
  .title h2 {
    color: #808080;
  }
  p {
    margin-bottom: 0;
    line-height: 1.8;
    color: var(--clr-primary-3);
  }
  .services-center {
    margin-top: 4rem;
    display: grid;
    gap: 2.5rem;
  }
  .service {
    background: var(--clr-primary-7);
    text-align: center;
    padding: 2.5rem 2rem;
    border-radius: 15%;
    transition: all 0.3s ease-in-out;
    p {
      color: var(--clr-primary-2);
      text-align: justify;
    }
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
    overflow: hidden;
  }

  span {
    width: 4rem;
    height: 4rem;
    display: grid;
    margin: 0 auto;
    place-items: center;
    margin-bottom: 1rem;
    border-radius: 50%;
    background: var(--clr-primary-10);
    color: var(--clr-primary-1);
    svg {
      font-size: 2rem;
    }
  }
  @media (min-width: 992px) {
    .header {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
    .service:hover {
      transform: scale(1.02);
      background-color: #e3d5ca;
    }
  }
  @media (min-width: 576px) {
    .services-center {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
  @media (min-width: 1280px) {
    padding: 0;
    .section-center {
      transform: translateY(5rem);
    }
  }
`;
export default Services;
