import styled from "styled-components";

export const StyledMarkCompleted = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background-color: ${(props) => (props.checked ? "#008000" : "transparent")};
  border: 2px solid ${(props) => (props.checked ? "#008000" : "#ccc")};
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:after {
    content: "${(props) => (props.checked ? "✔" : "")}";
    font-size: 34px;
    color: ${(props) => (props.checked ? "#fff" : "transparent")};
    position: absolute;
  }
`;
