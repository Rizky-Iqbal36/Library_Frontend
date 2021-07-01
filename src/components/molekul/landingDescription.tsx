import React, { RefObject } from "react";
import {
  DescriptionContainer,
  DescriptionWrapper,
  ContentWrapper,
  DescriptionH3,
  DescriptionP,
  Image,
  ImgBox,
} from "@styles/components/molekul/landingDescription.element";
import { OrdinaryButton } from "@styles/components/atom/button.element";
import SignInImage from "@assets/images/book_lover.svg";
import SignUpImage from "@assets/images/book_reading.svg";

interface ILandingPage {
  scrollToSignUp: () => void;
  scrollToSignIn: () => void;
  containerDiv: RefObject<HTMLDivElement>;
}

const LandingDescription: React.FC<ILandingPage> = ({
  scrollToSignUp,
  scrollToSignIn,
  containerDiv,
}) => {
  // const [screenWidth, setScreenWidth] = useState(window.screen.width);
  // window.onresize = () => {
  //   setScreenWidth(window.screen.width);
  // };

  const SignUpMode = () => {
    containerDiv.current?.classList.remove("sign-in-mode");
    containerDiv.current?.classList.add("sign-up-mode");
  };

  const SignInMode = () => {
    containerDiv.current?.classList.remove("sign-up-mode");
    containerDiv.current?.classList.add("sign-in-mode");
  };

  return (
    <DescriptionWrapper>
      <DescriptionContainer className="sign-in">
        <ContentWrapper>
          <DescriptionH3>One of us ?</DescriptionH3>
          <DescriptionP>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            laboriosam ad deleniti.
          </DescriptionP>
          <OrdinaryButton
            onClick={() => {
              SignInMode();
              // if (screenWidth <= 720) {
              //   scrollToSignUp();
              // }
            }}
          >
            Sign In
          </OrdinaryButton>
        </ContentWrapper>
        <ImgBox>
          <Image src={SignUpImage} />
        </ImgBox>
      </DescriptionContainer>
      <DescriptionContainer className="sign-up">
        <ContentWrapper>
          <DescriptionH3>New here ?</DescriptionH3>
          <DescriptionP>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            laboriosam ad deleniti.
          </DescriptionP>
          <OrdinaryButton
            onClick={() => {
              SignUpMode();
              // if (screenWidth <= 720) {
              //   scrollToSignIn();
              // }
            }}
          >
            Sign Up
          </OrdinaryButton>
        </ContentWrapper>
        <ImgBox>
          <Image src={SignInImage} />
        </ImgBox>
      </DescriptionContainer>
    </DescriptionWrapper>
  );
};

export default LandingDescription;
