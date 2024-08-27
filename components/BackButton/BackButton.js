import styled from "styled-components";

const ButtonStyle = styled.button`
  border: 1px solid black;
  padding: 1rem;
  margin: 0.5rem;
  border-radius: 50%;
  background: grey;
  text-decoration: none;
  color: white;
`;

export default function BackButton({ btnContent, handleClick }) {
  return <ButtonStyle onClick={handleClick}>{btnContent}</ButtonStyle>;
}
