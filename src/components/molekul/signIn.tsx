import React, { RefObject, useContext } from "react";
import { useHistory } from "react-router-dom";
import { useMutation } from "react-query";
import {
  FaUser,
  FaLock,
  FaFacebookSquare,
  FaTwitter,
  FaGoogle,
  FaLinkedin,
} from "react-icons/fa";
import * as Yup from "yup";
import { useFormik } from "formik";

//custom module
import { userContext } from "@root/context/userContext";
import { API, setAuthToken } from "@root/config/api";
import {
  FormSectionWrapper,
  FormContentWrapper,
  AuthForm,
  AuthWrapper,
  InputField,
  InputValue,
  LogoInput,
  SocialIcon,
  SocialMedia,
  Title,
  DescText,
} from "@root/styles/components/molekul/form.element";
import {
  DescriptionContainer,
  ContentWrapper,
  DescriptionH3,
  DescriptionP,
  Image,
  ImgBox,
} from "@styles/components/molekul/landingDescription.element";
import { Button, OrdinaryButton } from "@styles/components/atom/button.element";
import SignInImage from "@assets/images/book_lover.svg";

interface ISignInPage {
  containerDiv: RefObject<HTMLDivElement>;
}

const SignIn: React.FC<ISignInPage> = ({ containerDiv }) => {
  const SignUpMode = () => {
    containerDiv.current?.classList.remove("sign-in-mode");
    containerDiv.current?.classList.add("sign-up-mode");
  };
  const [state, dispatch] = useContext(userContext);
  const history = useHistory();

  const { handleSubmit, getFieldProps, errors, touched } = useFormik({
    initialValues: {
      // email: "",
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      // email: Yup.string()
      //   .required("Email required")
      //   .email("invalid format email!"),
      username: Yup.string().required("Username Required").min(3),
      password: Yup.string().required("Password Required").min(8),
    }),
    onSubmit: (values) => {
      signInAction(values);
    },
  });

  const [signInAction, { isLoading, error }]: any = useMutation(
    async (values) => {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const body = JSON.stringify(values);
      try {
        const res = await API.post("/auth/login", body, config);
        state.payload = res.data;
        state.status = "LOGIN_SUCCESS";
        dispatch(state);
        setAuthToken(res.data.token);
        return history.push(`/userhome`);
      } catch (err) {
        console.log(err);
      }
    }
  );

  return (
    <FormSectionWrapper className="sign-in">
      <FormContentWrapper>
        <AuthWrapper>
          <AuthForm onSubmit={handleSubmit}>
            <Title>Sign in</Title>
            {/* <h1>{`width: ${screenWidth} \n height: ${screenHeight}`}</h1> */}
            <InputField>
              <LogoInput>
                <FaUser />
              </LogoInput>
              <InputValue
                type="text"
                placeholder="Username"
                {...getFieldProps("username")}
              />
            </InputField>
            {touched.username && errors.username ? (
              <DescText textColor={"red"}>{errors.username}</DescText>
            ) : null}
            {/* <InputField>
              <LogoInput>
                <FaUser />
              </LogoInput>
              <InputValue
                type="email"
                placeholder="Email"
                {...getFieldProps("email")}
              />
            </InputField>
            {touched.email && errors.email ? (
              <DescText textColor={"red"}>{errors.email}</DescText>
            ) : null} */}
            <InputField>
              <LogoInput>
                <FaLock />
              </LogoInput>
              <InputValue
                type="password"
                placeholder="Password"
                {...getFieldProps("password")}
              />
            </InputField>
            {touched.password && errors.password ? (
              <DescText textColor={"red"}>{errors.password}</DescText>
            ) : null}
            <Button type="submit">{isLoading ? "Loading..." : "Login"}</Button>
            <DescText>Or Sign in with social platforms</DescText>
            <SocialMedia>
              <SocialIcon href="#">
                <FaFacebookSquare />
              </SocialIcon>
              <SocialIcon href="#">
                <FaTwitter />
              </SocialIcon>
              <SocialIcon href="#">
                <FaGoogle />
              </SocialIcon>
              <SocialIcon href="#">
                <FaLinkedin />
              </SocialIcon>
            </SocialMedia>
          </AuthForm>
        </AuthWrapper>
        <DescriptionContainer>
          <ContentWrapper>
            <DescriptionH3>New here ?</DescriptionH3>
            <DescriptionP>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </DescriptionP>
            <OrdinaryButton
              onClick={() => {
                SignUpMode();
              }}
            >
              Sign Up
            </OrdinaryButton>
          </ContentWrapper>
          <ImgBox>
            <Image src={SignInImage} />
          </ImgBox>
        </DescriptionContainer>
      </FormContentWrapper>
    </FormSectionWrapper>
  );
};

export default SignIn;
