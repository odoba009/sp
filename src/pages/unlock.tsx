import React from 'react'
import QR from "../assets/qr.jpeg"

export default function Pay() {

    const [copy, isCopied] = React.useState(false)

    function handleCopy(){
        navigator.clipboard.writeText("19BbCgZqTNQ2bcRaB9TSxECvt7RDyZaL4R");
        isCopied(true);
        setTimeout(() => {
            isCopied(false)
        }, 3000);
    }
  return (
    <div className='container'>
      <div className="mainwindow">
      <p style={{fontSize:20}}>BTC Deposit Address</p>
        <div className="image">
            
        <img src={QR} height={120} alt="" />
        </div>
       
        <p style={{wordWrap:"break-word"}}>19BbCgZqTNQ2bcRaB9TSxECvt7RDyZaL4R</p>
        <div className="button" style={{cursor:"pointer"}}>
            {
                copy?
<button onClick={handleCopy}> <span id='copy'> Copied</span></button>
                :
          <button onClick={handleCopy}> <span id='copy'> Copy</span></button>
          }
        </div>
        
      </div>
      {/* <p>New to snapchat </p> */}
    </div>
  )
}
