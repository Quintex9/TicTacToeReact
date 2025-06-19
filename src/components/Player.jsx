import { useState } from "react";

export default function Player({name,symbol}) {
    const [oldName, setNewName] = useState(name);
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick(){
        setIsEditing((isEditing) => !isEditing);
    }

    function handleChange(event){
      setNewName(event.target.value);
    }

    let playerName = <span className="player-name">{oldName}</span>
    if (isEditing) {
        playerName = <input type="text" required value={oldName} onChange={handleChange} ></input>
    }
  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
