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
  function clicked(){
    
  }
  return(
    <div className="boxes" id={id} onClick={status}>{status}</div>
  )
}
function Page() {
  return(
    <>
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
    </>
  )
}
export default Page;