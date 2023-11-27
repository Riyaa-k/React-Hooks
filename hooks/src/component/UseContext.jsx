import { useContext, useState,useEffect } from "react";
// import { ToggleTheme } from "../App";
// import UseEffect from "./UseEffect";

function UseContext(){
    const [con,setCon]=useState(false) ;
    const [like,setlike]=useState(0);
    const [theme,setTheme]=useState(false)
    
  
    const themeStyle = {
        backgroundColor: theme?"black":"grey",
        color:theme?"grey":"black",
        padding:"2rem",
        margin:"2rem"
  }

    useEffect(()=>{
        alert(`Content button clicked`)
    },[con]);
  
  return(
    <>
    <button onClick={()=>setTheme(!theme)}>Toggle</button>
    <div style={themeStyle}>
        {
            con ? <p>Something that appears different from what it is, or something that is not real but seems to be. For example, a video game may give the illusion of controlling an airplane.</p>
            : null
        }
    </div>
    <button onClick={()=>setCon(!con)}>Content</button>
    <br />
    <br />
    <p>
        {like}
    </p>
    <button onClick={()=>setlike(prevlike=>prevlike+1)}>like</button>
    </>
  )
}

export default UseContext;