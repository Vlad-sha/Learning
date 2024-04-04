import { useContext, useEffect, useReducer, useRef } from "react";
import Button from "../Button/Button";
import styles from "./JournalForm.module.css"
import cn from 'classnames'
import { INITIAL_STATE, formReducer } from "./JournalForm.state";
import Input from "../Input/Input";
import { UserContext } from "../../context/user.context";

function JournalForm ({onSubmit, data, onDelete}) {

    const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE)
    const {isValid, isFormReadyToSubmit, values} = formState
    const dateRef = useRef()
    const titleRef = useRef()
    const textRef = useRef()
    const {userId} = useContext(UserContext)

    const focusError = (isValid)  => {
      switch(true) {
        case !isValid.title:
          titleRef.current.focus()
          break;
        case !isValid.date:
          dateRef.current.focus()
          break;
        case !isValid.text:
          textRef.current.focus()
          break;
      }
    }

  useEffect(() => {
    if (!data) {
      dispatchForm({type: 'CLEAR'})
      dispatchForm({type : 'SET_VALUES', payload: {userId}})
    }
    dispatchForm({type: 'SET_VALUES', payload: {...data}})
  },[data])

  useEffect(() => {
    let timerId;
    if (!isValid.title || !isValid.text || !isValid.date) {
      focusError(isValid)
      timerId = setTimeout(() => {
        dispatchForm({type : 'RESET_VALIDITY'} )
      },2000)   
    }
    return () => {
      clearTimeout(timerId)
    }
  },[isValid])

  useEffect(() => {
    if (isFormReadyToSubmit) {
      onSubmit(values)
      dispatchForm({type: 'CLEAR'})
      dispatchForm({type : 'SET_VALUES', payload: {userId}})
    }
  }, [isFormReadyToSubmit,values,onSubmit,userId])

  useEffect(()=> {
    dispatchForm({type : 'SET_VALUES', payload: {userId}})
  },[userId])

  const onChange = (e) => {
    dispatchForm({type : 'SET_VALUES', payload: {[e.target.name]: e.target.value}})
  }


  const addJournalItem = (e) => {
    e.preventDefault();
    dispatchForm({type: 'SUBMIT'})
  }


  const deleteJournalItem = () => {
    onDelete(data.id)
    dispatchForm({type: 'CLEAR'})
    dispatchForm({type : 'SET_VALUES', payload: {userId}})
  }

return (
      <form className={styles['journal-form']} onSubmit={addJournalItem}>
        <div className={styles['form-row']}>
          <Input type="text" onChange={onChange} isValid={isValid.title} ref={titleRef} value={values.title} name="title" appearance='title'/>
          {data?.id && <button className={styles['delete']} type="button" onClick={() => deleteJournalItem() }>
            <img src="/archive.svg" alt="Кнопка удалисть"></img>
          </button>}
        </div>
        <div className={styles['form-row']}>
          <label htmlFor="date" className={styles['form-label']}>
            <img src="/calendar.svg" alt="Иконка календаря"/>
            <span>Дата</span>
          </label>
        <Input type="date" onChange={onChange} isValid={isValid.date} ref={dateRef} value={values.date ? new Date(values.date).toISOString().slice(0,10) : ''} name="date" id="date" />
        </div>
        <div className={styles['form-row']}>
          <label htmlFor="tag" className={styles['form-label']}>
            <img src="/folder.svg" alt="Иконка папки"/>
            <span>Метки</span>
          </label>
          <Input type='text' onChange={onChange} isValid={isValid.text} value={values.tag} id="tag" name="tag" className={styles['input']} />
        </div>
        
        <textarea name='text' id='' cols="30" rows="10" onChange={onChange} ref={textRef} value={values.text} className={cn(styles['input'], {
            [styles['invalid']]: !isValid.text
          })}></textarea>
        <Button onClick={() => {console.log('нажали')}}>Сохранить</Button>
        </form>
    )
}

export default JournalForm