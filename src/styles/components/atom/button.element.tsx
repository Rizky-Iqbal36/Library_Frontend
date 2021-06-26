import Styled from "styled-components";

export const Button = Styled.button`
  width: 150px;
  background-color: #2E9CCA;
  border: none;
  outline: none;
  height: 49px;
  border-radius: 49px;
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  margin: 10px 0;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border-style: solid;
  border-width: thin;

  &:hover {
    background-color: transparent;
    transition: all 0.2s ease-in-out;
    color:#2E9CCA;
  }

  @media screen and (max-width: 992px){
    height: 39px;
    line-height: 39px;
  }
`;

export const OrdinaryButton = Styled.div`
  width: 150px;
  background-color: #2E9CCA;
  border: none;
  outline: none;
  height: 49px;
  border-radius: 49px;
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  margin: 10px 0;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border-style: solid;
  border-width: thin;
  text-align: center;
  vertical-align: middle;
  line-height: 49px;

  &:hover {
    background-color: transparent;
    transition: all 0.2s ease-in-out;
  }
`;
