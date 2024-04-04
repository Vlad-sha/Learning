import './App.css'
import Leftpanel from './layouts/LeftPanel/LeftPanel'
import Body from './layouts/Body/Body'
import Header from './components/Header/Header'
import JournalList from './components/JournalList/JournalList'
import JournalAddButton from './components/JournalAddButton/JournalAddButton'
import JournalForm from './components/JournalForm/JournalForm'
import { useLocalStorage } from './hooks/useLocalStorage.hook'
import { UserContext, UserContextProvider } from './context/user.context'
import { useState } from 'react'


function mapItems (data) {
 if (!data) {
  return []
 }
 return data.map(el => ({
  ...el,
  date: new Date(el.date)
}))
}

function App() {

    const [data,setData] = useLocalStorage('data')
    const [selectedItem, setSelectedItem] = useState(null)


    


    const addItem = (el) => {
    if (!el.id) {
      setData( [...mapItems(data), {
      ...el,
      date: new Date(el.date),
      id : data.length > 0 ? Math.max(...data.map( i => i.id)) +1 : 1,
    }])
  } else {
    setData([...mapItems(data).map(i => {
      if (i.id === el.id) {
        return {
          ...el
        }
      }
      return i;
    })])
  }
  }

  const deleteItem = (id) => {
      setData([...data.filter(i => i.id !== id)])
  }

  return (
    <UserContextProvider>
    <div className='app'>
      <Leftpanel>
        <Header/>
        <JournalAddButton clearForm={() => {setSelectedItem(null)}}/>
        <JournalList items={mapItems(data)} setItem={setSelectedItem}/>
      </Leftpanel>
      <Body>
        <JournalForm onSubmit={addItem} onDelete = {deleteItem} data={selectedItem}/>
      </Body>
      
    </div>
    </UserContextProvider>
  )
}

export default App
