<<<<<<< HEAD
import "./CardButton.css"

function CardButton ({children, className, ...props}) {
    const cl = 'card-button' + (className ? ' '+ className : '');
    return (
        <button {...props} className={cl}>
            {children}
        </button>
    )
}

=======
import "./CardButton.css"

function CardButton ({children, className, ...props}) {
    const cl = 'card-button' + (className ? ' '+ className : '');
    return (
        <button {...props} className={cl}>
            {children}
        </button>
    )
}

>>>>>>> 74b09b3caf063b2ee6a3d512777f0af827501a7a
export default CardButton