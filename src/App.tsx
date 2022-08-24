import { useState } from 'react'
import './App.css'
import Searchbar from "./components/Searchbar"
import React from 'react'
import { Pokimon } from './interface'
import Toplist from './components/Toplist'
import Navbar from './components/Navbar'
import Config from './components/Config'
import { ThemeProvider } from '@mui/material'
import theme from './components/Theme'
import ToplistButtons from './components/ToplistButtons'
import "../src/assets/pokeball2.svg"


function App() { 
  type OnChangeEvent = React.ChangeEvent<HTMLInputElement>
  type OnClickEvent = React.MouseEvent<HTMLInputElement>
  

  const [searchBarValue, setSearchBarValue] = useState("")
  const [toplistState, setToplistState] = useState(Array(6).fill(null))
  const [genState, setGenState] = useState("0")
  const [typeState, setTypeState] = useState("all")
  const [titleState, setTitleState] = useState("")

  function IsAlreadyOnList(element: Pokimon, list: Array<Pokimon>) {
    if(list.find((value) => value === element)){
      return true
    }
    return false
  }

  function handleClear() {
    setToplistState(Array(6).fill(null))
   
  }

  function handleAdd(event: OnClickEvent, element: Pokimon): void {
    if (!(IsAlreadyOnList(element, toplistState))){
      let indexToInsert = toplistState.findIndex((value) => value === null) 
      if(indexToInsert !== -1){
        setToplistState(prevState => {
          
          let newArray = [...prevState]
          newArray[indexToInsert] = element
          return newArray
        })
      
      } /* return "list full" */
    }
    /* return "already on list" */
  }

  function handleRemove(indexPoke: number){
    setToplistState((prevState) => {
      let newArray: Array<Pokimon | null> = []
      prevState.forEach((value, index) => {
        if (index === indexPoke){
          newArray.push(null)
        } else {
          newArray.push(value)
        }
      })
      console.log(newArray)
      return newArray
    })
  }

  function handlechange(event: OnChangeEvent): void{
    setSearchBarValue(event.target.value)
  }

  function handleTitleChange(event: OnChangeEvent): void{
    setTitleState(event.target.value)
  }

  function handleSelectGen(event: OnChangeEvent): void {
    setGenState(event.target.value)
    
  }

  function handleSelectType(event: OnChangeEvent): void {
    setTypeState(event.target.value)
  }

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Navbar />
        <div className='appbody'>
          <div>
            <div className="topPokemon-container" id="downloadNode">
              <form className='topPokemon-title-form' spellCheck="false">
                <textarea className='topPokemon-title' maxLength={260} placeholder='Write a title...'></textarea>
              </form>
              <Toplist toplistState={toplistState} handleRemove={handleRemove}/>
            </div>
            <ToplistButtons handleClear={handleClear}/>
          </div>
          <div className='searchbar-container'>
            <input type="text" name="searchbar" className="searchbar"value={searchBarValue} onChange={handlechange}/>
            <Config handleSelectGen={handleSelectGen} genState={genState} typeState={typeState} handleSelectType={handleSelectType}/>
            <div className='container-pokemonIitem'>
              <Searchbar handleAdd={handleAdd} searchBarValue={searchBarValue} typeState={typeState} genState={genState} />
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}
export default App
