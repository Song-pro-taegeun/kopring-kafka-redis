import { useNavigate } from "react-router-dom";

export default function Home() {
  const nav = useNavigate();
  return (
    <>
      <div className="home">home</div>

      <button
        onClick={() => {
          nav("/chatList");
        }}
      >
        채팅
      </button>
    </>
  );
}
