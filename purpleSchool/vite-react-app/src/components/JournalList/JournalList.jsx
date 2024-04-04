<<<<<<< HEAD
import "./JournalList.css"
import CardButton from "../CardButton/CardButton";
import JournalItem from '../JournalItem/JournalItem'
import { useContext, useMemo } from "react";
import { UserContext } from "../../context/user.context";

function JournalList ({items, setItem}) {
  const {userId} = useContext(UserContext)

  const sortItems = (a,b) => {
    if (a.date > b.date) {
      return -1;
        }
    else {
          return 1;
        }
    }

  const filteredItems = useMemo( () => items
  .filter(el => el.userId === userId)
  .sort(sortItems),[items, userId])

    if (items.length === 0 ) {
        return <p>Здесь пока еще ничего нет, создайте запись</p>
    }

    
return (
        <div className="journal-list">{filteredItems
          .map(el => (
            <CardButton key={el.id} onClick={() => setItem(el)} >
            <JournalItem 
              title={el.title}
              text={el.text}
              date={el.date}
            />
          </CardButton>
          ))} 
    </div>
    )
}

=======
import "./JournalList.css"
import CardButton from "../CardButton/CardButton";
import JournalItem from '../JournalItem/JournalItem'
import { useContext, useMemo } from "react";
import { UserContext } from "../../context/user.context";

function JournalList ({items, setItem}) {
  const {userId} = useContext(UserContext)

  const sortItems = (a,b) => {
    if (a.date > b.date) {
      return -1;
        }
    else {
          return 1;
        }
    }

  const filteredItems = useMemo( () => items
  .filter(el => el.userId === userId)
  .sort(sortItems),[items, userId])

    if (items.length === 0 ) {
        return <p>Здесь пока еще ничего нет, создайте запись</p>
    }

    
return (
        <div className="journal-list">{filteredItems
          .map(el => (
            <CardButton key={el.id} onClick={() => setItem(el)} >
            <JournalItem 
              title={el.title}
              text={el.text}
              date={el.date}
            />
          </CardButton>
          ))} 
    </div>
    )
}

>>>>>>> 74b09b3caf063b2ee6a3d512777f0af827501a7a
export default JournalList