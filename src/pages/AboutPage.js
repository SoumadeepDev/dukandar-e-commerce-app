import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/about-bcg.jpeg";
const AboutPage = () => {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} />
        <article>
          <div className="title">
            <h2
              style={{
                borderBottom: "10px solid var(--clr-primary-7)",
                marginBottom: "5px",
                width: "fit-content",
              }}
            >
              our story
            </h2>
          </div>

          <p>
            At
            <h1
              style={{
                fontFamily: "Alegreya",
                fontSize: "1.2rem",
                color: "#A9743A",
              }}
            >
              Dukandar,
            </h1>
            our journey began with a simple vision - to curate a collection of
            home essentials that not only enhance your living space but also
            reflect your unique style and personality. With a focus on quality,
            craftsmanship, and affordability, we strive to bring you the finest
            selection of furniture, decor, and more. Join us on our mission to
            transform houses into homes, one piece at a time.
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
    width: 200px;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export default AboutPage;
