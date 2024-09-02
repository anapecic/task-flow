import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  border-radius: 5px;
  margin: 0.5rem 1rem;
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
`;

export default function Header() {
  return <StyledHeader>Task Flow</StyledHeader>;
}
