import React from "react";
import {
  Body,
  Container,
  Card,
  ContentBox,
  ContentH2,
  ContentSizeSection,
  ContentColorSection,
  ContentH3,
  Image,
  ImageBox,
  ContentButton,
  ContentSpan,
} from "@styles/scratch.element";
import img from "@assets/images/login.svg";

const scratch = () => {
  //   console.log(Card.styledComponentId);
  return (
    <Body>
      <Container>
        <Card>
          <ImageBox>
            <Image src={img} />
          </ImageBox>
          <ContentBox>
            <ContentH2>Rocket</ContentH2>
            <ContentSizeSection>
              <ContentH3>Size :</ContentH3>
              <ContentSpan>7</ContentSpan>
              <ContentSpan>8</ContentSpan>
              <ContentSpan>9</ContentSpan>
              <ContentSpan>10</ContentSpan>
            </ContentSizeSection>
            <ContentColorSection>
              <ContentH3>Color :</ContentH3>
              <ContentSpan></ContentSpan>
              <ContentSpan></ContentSpan>
              <ContentSpan></ContentSpan>
            </ContentColorSection>
            <ContentButton href="#">Buy now</ContentButton>
          </ContentBox>
        </Card>
      </Container>
    </Body>
  );
};

export default scratch;
