import styled from "styled-components";

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: white;
  border: 0.05rem solid;
  border-color: ${props =>
    props.cart ? "var(--mainYellow)" : "skyblue"};
  color: var(--lightBlue);
  color: ${props => (props.cart ? "orange" : "black")};
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  outline-color: red;
  cursor: pointer;
  display: inline-block;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-in-out;
  &:hover {
    
    background: ${props =>
      props.cart ? "orange" : "skyblue"};
    color: black;
  }
  &:focus {
    outline: none;
  }
`;