import styled from "styled-components";

export const StyleMark = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => (props.checked ? "#008000" : "")};
  border: 2px solid ${(props) => (props.checked ? "#008000" : "#ccc")}; /* Колір рамки */
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  /* Галочка */
  &:after {
    content: "${(props) => (props.checked ? "✔" : "")}";
    font-size: 16px;
    color: ${(props) => (props.checked ? "#fff" : "transparent")};
    position: absolute;
  }
`;
