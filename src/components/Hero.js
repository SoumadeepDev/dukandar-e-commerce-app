import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import heroBcg from "../assets/hero-bcg.jpeg";
import heroBcg2 from "../assets/hero-bcg-2.jpeg";
const Hero = () => {
  return (
    <Wrapper className="section-center">
      <article className="content">
        <h1 style={{ fontSize: "clamp(1.5rem, 3vw, 3rem)", color: "#C2C1BB" }}>
          Discover the Perfect <br />
          <span style={{ color: "#C7986A" }}>Blend</span> <br /> of Style and
          Comfort
        </h1>
        <p>
          Explore a world of endless possibilities with our exquisite collection
          of home essentials. From timeless classics to modern marvels, find the
          perfect pieces to elevate your space and create a sanctuary of style
          and comfort.
        </p>
        <Link to="/products" className="btn hero-btn">
          shop now
        </Link>
      </article>
      <article className="img-container">
        <img src={heroBcg} alt="wodden desk table" className="main-img" />
        <img src={heroBcg2} alt="nice room" className="accent-img" />
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  .img-container {
    display: none;
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
    }
    .main-img {
      width: 100%;
      height: 550px;
      position: relative;
      border-radius: 20px;
      display: block;
      object-fit: cover;
      box-shadow: 1px 4px 4px rgba(0, 0, 0, 0.6);
    }
    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
      transform: translateX(-50%);
      border-radius: 20px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.8);
    }
    .img-container::before {
      content: "";
      position: absolute;
      width: 10%;
      height: 80%;
      background: var(--clr-primary-9);
      bottom: 0%;
      left: -8%;
      border-radius: var(--radius);
    }
  }
`;

export default Hero;
