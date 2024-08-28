import styled from "styled-components";

function prioColor(priority) {
  if (priority === "High") {
    return "red";
  } else if (priority === "Medium") {
    return "yellow";
  } else if (priority === "Low") {
    return "green";
  }
}

export const StyledPriority = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${(props) => prioColor(props.$priority)};
`;
