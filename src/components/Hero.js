import React from "react";
import styled from "@emotion/styled";
import Img from "gatsby-image";
import { Title, Text } from "./Typography";

const HeroContainer = styled.div`
  max-width: 1152px;
  padding: 20px;
  color: #1c1c1c;
  flex-grow: 1;
  margin: 0 auto;
  position: relative;
  width: auto;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 50px;
`;

const Tag = styled.div`
  text-transform: uppercase;
  font-size: 13px;
  color: #707070;
`;

const AddressesContainer = styled.div`
  font-weight: bold;
  font-size: 20px;
  display: flex;
  flex-direction: column;
`;

const Hero = ({ hero, address, email }) => {
  const { tag, title, image, summary } = hero;

  return (
    <HeroContainer>
      <div>
        <Tag>{tag}</Tag>
        <Title>{title}</Title>
      </div>
      <Img fixed={{ ...image.childImageSharp.fixed }} />
      <Text>{summary}</Text>
      <AddressesContainer>
        <div>{address}</div>
        <div>{email}</div>
      </AddressesContainer>
    </HeroContainer>
  );
};

export default Hero;
