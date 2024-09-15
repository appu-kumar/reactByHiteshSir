import React, { useState, useCallback} from "react";

function App() {
  const [idx, setIdx] = useState(0);
  const arr = ['a', 'b', 'c'];

  // useCallback(() => {
  //   const st=setInterval(()=>{
  //      return ()=>{
  //       if(idx<3)
  //           clearInterval(st)
  //      }
  //   },2000)

      
  // }, []);

  return (
    <>
        <p onClick={()=>setIdx((idx+1)%arr.length)}>{arr[idx]}</p>
    </>
  );
}

export default App;
