import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_SERVER}/`);
        console.log('res :>> ', res);
        if (!res.ok) {
          throw new Error("Failed to fetch");
        }

        const result = await res.json();
        setMsg(result.message);
      } catch (error) {
        console.error(error);
        setMsg("Error fetching message");
      }
    };

    fetchMessage();
  }, []);

  return (
    <main style={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", minHeight: "100vh"}}>
      <h1>This is a React Docker Application</h1>
      <p>
        <b>Docker Message: </b>
        {msg}
      </p>
    </main>
  );
}

export default App;