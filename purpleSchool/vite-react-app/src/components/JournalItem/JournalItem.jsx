<<<<<<< HEAD
import "./JournalItem.css"

function JournalItem ({title, text, date}) {

const formatedDate = new Intl.DateTimeFormat('ru-RU').format(date)

 return (
    <>
        <h2 className="journal-item__header">{title}</h2>
        <h2 className="journal-item__body">
            <div className="journal-item__date">{formatedDate}</div>
            <div className="journal-item__text">{text}</div>
        </h2>
    </>
 )
}

=======
import "./JournalItem.css"

function JournalItem ({title, text, date}) {

const formatedDate = new Intl.DateTimeFormat('ru-RU').format(date)

 return (
    <>
        <h2 className="journal-item__header">{title}</h2>
        <h2 className="journal-item__body">
            <div className="journal-item__date">{formatedDate}</div>
            <div className="journal-item__text">{text}</div>
        </h2>
    </>
 )
}

>>>>>>> 74b09b3caf063b2ee6a3d512777f0af827501a7a
export default JournalItem