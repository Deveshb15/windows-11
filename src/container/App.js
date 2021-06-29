import React, {useState} from "react";
import Taskbar from "../components/Taskbar/Taskbar";
import StartMenu from "../components/StartMenu/StartMenu";
import FileExplorer from "../components/FileExplorer/FileExplorer";

function App() {
  // console.log();

  const [startClsName, setStartClsName] = useState(true)

  const[fileClsName, setFileClsName] = useState(true)

  const toggleStartMenu = () => {
    setStartClsName(clsName => !clsName)
  }

  const toggleFileMenu = () => {
    setFileClsName(clsName => !clsName)
  }

  return (
    <div className="App">
      <Taskbar onToggleStart={toggleStartMenu} onToggleFile={toggleFileMenu} />
      <StartMenu name={startClsName ? 'startmenu' : 'startmenu grow'} />
      <FileExplorer name={fileClsName ? 'fileExplorer' : 'fileExplorer grow'} />
    </div>
  );
}

export default App;
