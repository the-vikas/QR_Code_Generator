import React, { useState } from "react";
import QRCode from 'qrcode';
import './input_text.css';

const UserInput = (props) => {
    const [input, setInput] = useState();
    
    const generateCode = async (e) => {
        e.preventDefault();
        const response = await QRCode.toDataURL(input);
        props.getCode(response);
    }

    const takeValue = (e) => {
        setInput(e.target.value);
    }

    return (
        <form onSubmit={generateCode}>
            <h1>QR Generator</h1>
            <div className="user_input">
                <input type="text"
                    placeholder="Enter Your Text Here..."
                    onChange={takeValue}
                />
                <br />
                <button type="submit">Generate</button>
            </div>
        </form>
    );

}

export default UserInput;