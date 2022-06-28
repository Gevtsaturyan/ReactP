import React, { useState } from "react";
import './Home.css'

export default function Home(){
    const [count,setCount]=useState(false)
    const [nkar,setNkar]=useState(false)
    const [real,setReal]=useState(false)
    return(
        <div>
        <div className="masin">
            <div className="as">
            <div className="xazachecoc" onClick={()=>setCount((e)=>!e)}></div>
            {count && <div className="real" ><a className="a1" href="https://www.google.com/search?q=shushi+ekexeci&rlz=1C1YTUH_ruAM1006AM1006&sxsrf=ALiCzsYgaMy-ezw71BhXd045JO20G0uA0A%3A1656427736918&ei=2BS7YtfLN6uAxc8P3f6agAw&oq=ekexeci+sh&gs_lcp=Cgdnd3Mtd2l6EAEYADIGCAAQHhAWMgYIABAeEBYyBggAEB4QFjIGCAAQHhAWMgYIABAeEBYyBggAEB4QFjIGCAAQHhAWMgYIABAeEBY6BwgAEEcQsAM6BwgAELADEEM6EgguEMcBEK8BEMgDELADEEMYAToFCAAQgAQ6CwguEIAEEMcBEK8BOgQIABBDOggIABAeEA8QFkoECEEYAEoECEYYAFD0MFjGN2DDR2gBcAF4AIAB5QGIAdMEkgEFMC4xLjKYAQCgAQHIAQrAAQHaAQQIARgI&sclient=gws-wiz">ekexeci </a></div>}
            </div>
            <div className="as">
            <div className="realakan" onClick={()=>setNkar((e)=>!e)}></div>
            {nkar && <div className="real"> <a className="a1" href="https://www.google.com/search?q=realakan+hamalsaran&rlz=1C1YTUH_ruAM1006AM1006&sxsrf=ALiCzsbZeSzeikR-GBhI9UEiSlTpBvLtOw%3A1656427749976&ei=5RS7YuLaOaWIxc8P-6-qwAM&ved=0ahUKEwii4YadstD4AhUlRPEDHfuXCjgQ4dUDCA4&uact=5&oq=realakan+hamalsaran&gs_lcp=Cgdnd3Mtd2l6EAMyBQghEKABMgUIIRCgAToECCMQJzoLCAAQgAQQsQMQgwE6DgguEIAEELEDEIMBENQCOgsILhCABBCxAxDUAjoRCC4QgAQQsQMQgwEQxwEQ0QM6EQguEIAEELEDEIMBEMcBEK8BOggIABCABBCxAzoICAAQsQMQgwE6BQgAEIAEOg4ILhCABBCxAxDHARDRAzoKCC4QsQMQ1AIQCjoKCAAQsQMQgwEQCjoECAAQCjoKCC4QxwEQ0QMQCjoHCC4QChDLAToHCAAQChDLAToECAAQHjoHCCEQChCgAUoECEEYAEoECEYYAFAAWLopYIgsaABwAXgAgAHGAYgBnheSAQQwLjE5mAEAoAEBwAEB&sclient=gws-wiz">realakan</a></div>}
            </div>
            <div className="as">
                <div className="mshakuyt" onClick={()=>setReal((e)=>!e)}></div>
                {real && <div className="real"> <a className="a1" href="https://www.google.com/search?q=mshakuyt+haykakan&rlz=1C1YTUH_ruAM1006AM1006&sxsrf=ALiCzsZADSpaEXfpgpL73w5WOHykB79n5A%3A1656428110718&ei=Tha7Yr-zK7yFxc8P4L2nmAg&oq=mshakuyt+&gs_lcp=Cgdnd3Mtd2l6EAEYADIFCAAQgAQyBggAEB4QBTIGCAAQHhAFMgYIABAeEAUyBggAEB4QBToHCAAQRxCwA0oECEEYAEoECEYYAFCVAliVAmCyC2gBcAF4AIABzQGIAc0BkgEDMi0xmAEAoAEByAEIwAEB&sclient=gws-wiz">mshakuyt</a></div>}
            </div>
        </div>
        </div>
    )
}