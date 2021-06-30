import Styled from "styled-components";

export const Container = Styled.div`
    position: relative;
    width: 100%;
    background-color:#25274D ;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    :before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
        background: #29648A;
        transition: 1s ease-in-out;
        z-index: 1;
        clip-path: polygon(55% 0%, 300% 0%, 290% 100%, 45% 100%);
    }

    &.sign-up-mode:before{
        clip-path: polygon(-100% 0%, 55% 0%, 45% 100%, -100% 100%);
    }

    @media screen and (max-width: 992px){
      :before {
        clip-path: circle(650px at -20% 130%);
      }

      &.sign-up-mode:before{
        clip-path: circle(650px at 120% -30%);
      }
    }

    @media screen and (max-width: 720px){
      :before {
        clip-path: circle(400px at 50% 125%);
      }

      &.sign-up-mode:before{
        clip-path: circle(400px at 50% -25%);
      }

      /* @media screen and (min-height: 820px){
        :before {
          clip-path: circle(500px at 50% 130%);
        }

        &.sign-up-mode:before{
          clip-path: circle(500px at 50% -30%);
        }
      } */
    }
`;
export const FormWrapper = Styled.div`
    /* position: relative; */
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    z-index: 0;
`;

export const SectionContainer = Styled.div`
    width: 100%;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.75s ease-out;
    transition-delay: 1s;

    @media screen and (max-width: 992px){
       transition-delay: 0.4s;
     }

    @media screen and (max-width: 720px){
       transition-delay: 0.5s;
     }

    ${Container}.sign-in-mode &{
        &:nth-child(1){
          transition-delay: 0.75s;
          visibility: visible;

          @media screen and (max-width: 992px){
            transform: translate(0%, 20%);
          }

          @media screen and (max-width: 720px){
            transform: translate(50%, 30%);
          }
        }
        &:nth-child(2){
          opacity: 0;
          visibility: hidden;
          transform: translateX(110%);

          @media screen and (max-width: 992px){
            transform: translate(110%, -10%);
          }

          @media screen and (max-width: 720px){
            transform: translate(-50%, -150%);
          }
        }
    }

    ${Container}.sign-up-mode &{  
      &:nth-child(1){
        transform: translateX(-110%);
        opacity: 0;
        visibility: hidden;

        @media screen and (max-width: 992px){
          transform: translate(-110%, 20%);
        }

        @media screen and (max-width: 720px){
          transform: translate(50%, 150%);
        }
      }
        &:nth-child(2){
          transition-delay: 0.75s;
          visibility: visible;

          @media screen and (max-width: 992px){
            transform: translate(5%,-10%);
          }

          @media screen and (max-width: 720px){
            transform: translate(-50%, -30%);
          }
      }
    }
`;
