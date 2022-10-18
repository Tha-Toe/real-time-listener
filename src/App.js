import { useRef, useState } from "react";
import "./App.css";
import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "./firebase";
import List from "./component/List";
function App() {
  const [name, setName] = useState(null);
  const [singer, setSinger] = useState(null);
  const nameRef = useRef(null);
  const singerRef = useRef(null);
  const handleAdd = async () => {
    if (name && singer) {
      await setDoc(doc(db, "songs", `${name}`), {
        name: name,
        singer: singer,
      });
      nameRef.current.value = "";
      singerRef.current.value = "";
    }
  };
  return (
    <div className="app-container">
      <input
        className="input-tag"
        placeholder="Song Name"
        onChange={(e) => setName(e.target.value)}
        ref={nameRef}
      />
      <input
        className="input-tag"
        placeholder="Singer Name"
        onChange={(e) => setSinger(e.target.value)}
        ref={singerRef}
      />
      <button className="add-button" onClick={handleAdd}>
        Add Song
      </button>
      <List />
    </div>
  );
}

export default App;
