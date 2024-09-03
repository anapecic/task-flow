import styled from "styled-components";

export const StyledMarkCompleted = styled.button`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.isCompletedView ? "#008000" : "transparent"};
  border: 2px solid ${(props) => (props.isCompletedView ? "#008000" : "#ccc")};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;


  &:after {
    content: "${(props) => (props.isCompletedView ? "✔" : "")}";
    font-size: 34px;
    color: ${(props) => (props.isCompletedView ? "#fff" : "transparent")};
    position: absolute;

  }

  &:hover {
    box-shadow: 0 0 2px 1px rgba(0, 128, 0, 0.5);
    border: 2px solid rgba(0, 128, 0, 0.5);
    transition: all 0.3s;

    t
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 128, 0, 0.5);
  }
`;
