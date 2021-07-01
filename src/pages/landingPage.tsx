import React, { useRef, RefObject } from "react";
import { Container } from "@styles/landingPage.element";
import SignIn from "@root/components/molekul/signIn";
import SignUp from "@root/components/molekul/signUp";

const LandingPage = () => {
  const containerDiv = useRef(null) as RefObject<HTMLDivElement>;

  // const signInDiv = useRef(null) as RefObject<HTMLDivElement>;
  // const scrollToSignIn = () => {
  //   signInDiv.current?.scrollIntoView({ block: "start", behavior: "smooth" });
  // };

  // const signUpDiv = useRef(null) as RefObject<HTMLDivElement>;
  // const scrollToSignUp = () => {
  //   signUpDiv.current?.scrollIntoView({ block: "start", behavior: "smooth" });
  // };

  return (
    <Container className="sign-in-mode" ref={containerDiv}>
      <SignIn containerDiv={containerDiv} />
      <SignUp containerDiv={containerDiv} />
    </Container>
  );
};

export default LandingPage;
