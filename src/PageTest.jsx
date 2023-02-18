import React, { useState } from "react"

import Datareceived from './Data';
import App from './lib/App';

export default function PageTest() {

    const [value, setValue] = useState(null)

    return (
        <div style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <App dropdownMessage="Select" onDataReceived={Datareceived} value={value} onChange={setValue}/>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, tempora impedit! Neque saepe, amet exercitationem itaque eligendi qui facilis voluptates quos officia! Quasi odio porro dolor, inventore blanditiis assumenda nostrum.</div>
            <button onClick={() => setValue(null)}>Reset</button>
        </div>
        
    )
}