import React, { useRef, RefObject } from "react";
import {
  Container,
  FormWrapper,
  SectionContainer,
} from "@styles/landingPage.element";
import SignIn from "@components/molekul/signIn";
import SignUp from "@components/molekul/signUp";
import LandingDescription from "@root/components/molekul/landingDescription";

const LandingPage = () => {
  const signInDiv = useRef(null) as RefObject<HTMLDivElement>;
  const containerDiv = useRef(null) as RefObject<HTMLDivElement>;
  const scrollToSignIn = () => {
    signInDiv.current?.scrollIntoView({ block: "start", behavior: "smooth" });
  };

  const signUpDiv = useRef(null) as RefObject<HTMLDivElement>;

  const scrollToSignUp = () => {
    signUpDiv.current?.scrollIntoView({ block: "start", behavior: "smooth" });
  };

  return (
    <Container className="sign-in-mode" ref={containerDiv}>
      <FormWrapper>
        <SectionContainer ref={signInDiv}>
          <SignIn />
        </SectionContainer>
        <SectionContainer ref={signUpDiv}>
          <SignUp />
        </SectionContainer>
      </FormWrapper>
      <LandingDescription
        scrollToSignUp={scrollToSignUp}
        scrollToSignIn={scrollToSignIn}
        containerDiv={containerDiv}
      />
    </Container>
  );
};

export default LandingPage;
