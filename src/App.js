import Counter from "./Counter";
import { useState } from "react";


function App() {
  const {state,setState} = useState(false)
  return (
    <div className="App">

    <h1 onClick={()=>setState(!state)}> show/hide</h1>

    {state ? <Counter /> : null}
    </div>
  );
}

export default App;
