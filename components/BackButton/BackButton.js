import Link from "next/link";

export default function BackButton({ btnContent, handleClick }) {
  return (
    <button
      onClick={handleClick}
      style={{
        border: "1px solid black",
        padding: "1rem",
        margin: "0.5rem",
        borderRadius: "50%",
        background: "grey",
        textDecoration: "none",
        color: "white",
      }}
    >
      {btnContent}
    </button>
  );
}
