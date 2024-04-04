<<<<<<< HEAD
import "./Button.css"
import { useState } from "react"

function Button ({children, onClick}) {

    return (
        <button className="button accent" onClick={onClick}>{children}</button>
    )
}

=======
import "./Button.css"
import { useState } from "react"

function Button ({children, onClick}) {

    return (
        <button className="button accent" onClick={onClick}>{children}</button>
    )
}

>>>>>>> 74b09b3caf063b2ee6a3d512777f0af827501a7a
export default Button