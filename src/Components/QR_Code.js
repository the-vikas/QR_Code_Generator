import { useState } from "react";
import QRCode from 'qrcode';
import './QR_Code.css';
import logo from './demo.png';
import UserInput from './UserInput';

const QrCode = () => {
    const [value, setValue] = useState();
    
    const code = (response) => {
        setValue(response);
    }

    return (
        <div className="container">
            <UserInput getCode={code} />
            <div className="qr_box">
                <img src={value} />
            </div>
        </div>
    );
}
export default QrCode;