import React from "react"
import Address from "./profile/Address"
import Image from "./profile/ProfilPhoto"
import Name from "./profile/FullName"
import "./Main.css"



function Main(){
return(
    <form className="form">
<Image/>
<Name/>
<Address/>
    </form>
)
}

export default Main
