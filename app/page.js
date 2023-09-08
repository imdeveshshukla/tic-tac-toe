"use client"
import { useState } from "react";

function Header({str}) {
  const [stri , changeStr] = useState(str);
  return (
    <p id="game-info" className="text-slate-200 ">
      {stri}
    </p>
  );
}
function Dabba({status,id}) {
  const [state,changestate]=useState(status);
  function clicked(){
    if(state == 'x')
      changestate('o');
    else 
      changestate('x');
  }
  return(
    <div className="boxes" id={id} onClick={clicked}>{state}</div>
  )
}
function Page() {
  function init(){
    
  }
  return(
    <div className="mainBox flex flex-col items-center justify-evenly">
    <Header str="Hello"/>
    <div id="tictactoeBox" className="grid grid-cols-3">
      <Dabba id="dabba1"/>
      <Dabba id="dabba2"/>
      <Dabba id="dabba3"/>
      <Dabba id="dabba4"/>
      <Dabba id="dabba5"/>
      <Dabba id="dabba6"/>
      <Dabba id="dabba7"/>
      <Dabba id="dabba8"/>
      <Dabba id="dabba9"/>
    </div>
    <button onClick={init}>Click to Start New Game</button>
    </div>
  )
}
export default Page;