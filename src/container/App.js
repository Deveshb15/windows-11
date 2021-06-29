import React, {useState} from "react";
import Taskbar from "../components/Taskbar/Taskbar";
import StartMenu from "../components/StartMenu/StartMenu";

function App() {

  const [clsName, setClsName] = useState(true)

  const toggleStartMenu = () => {
    setClsName(clsName => !clsName)
  }

  return (
    <div className="App">
      <Taskbar onToggleStart={toggleStartMenu} />
      <StartMenu name={clsName ? 'startmenu' : 'startmenu grow'} />
    </div>
  );
}

export default App;
