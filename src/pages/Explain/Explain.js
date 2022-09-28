import React, { useState } from 'react';
import './Explain.css';

const Explain = () => {
    const [toggole, setToggole] = useState(true);
    console.log(toggole)
    console.count("Render")
    return (
        <div>
            { toggole && <h1>Explain</h1>}
            <button onClick={()=>setToggole(!toggole)}>{toggole ? "Hide" : "Show"}</button>
            
        </div>
    );
};

export default Explain;