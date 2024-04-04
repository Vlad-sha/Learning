<<<<<<< HEAD
import { forwardRef } from "react"
import styles from "./Input.module.css"
import cn from 'classnames'

const Input = forwardRef (function Input ({className, isValid, appearance, ...props}, ref) {
return (
    <input {...props} ref={ref} className={cn(className, styles['input'],{
        [styles['invalid']]: !isValid,
        [styles['input-title']]: appearance === "title"
      })}/>
)
})

=======
import { forwardRef } from "react"
import styles from "./Input.module.css"
import cn from 'classnames'

const Input = forwardRef (function Input ({className, isValid, appearance, ...props}, ref) {
return (
    <input {...props} ref={ref} className={cn(className, styles['input'],{
        [styles['invalid']]: !isValid,
        [styles['input-title']]: appearance === "title"
      })}/>
)
})

>>>>>>> 74b09b3caf063b2ee6a3d512777f0af827501a7a
export default Input