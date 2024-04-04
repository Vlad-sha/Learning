import "./Button.css"
import { useState } from "react"

function Button ({children, onClick}) {

    return (
        <button className="button accent" onClick={onClick}>{children}</button>
    )
}

export default Button