import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
  width: 100%;
`;

const Button = styled.button`
  background-color: white;
  color: black;
  border: none;
  padding: 5px 10px;
  margin: 5px;
  cursor: pointer;
`;

export default function Modal({ children, onConfirm, onClose }) {
  return (
    <ModalOverlay>
      <ModalContent>
        {children}
        <Button
          type="button"
          onClick={(event) => {
            event.preventDefault();
            onConfirm();
          }}
        >
          Yes
        </Button>
        <Button type="button" onClick={onClose}>
          Cancel
        </Button>
      </ModalContent>
    </ModalOverlay>
  );
}
