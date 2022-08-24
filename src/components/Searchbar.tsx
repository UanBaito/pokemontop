import  {MouseEvent, SyntheticEvent } from "react";
import data from "./data.json"
import { FixedSizeList } from 'react-window';
import InfiniteLoader from "react-window-infinite-loader";


let itemStatusMap: any = {};
let itemCount: number

export default function Searchbar({handleAdd, searchBarValue, typeState, genState}: {handleAdd: any, searchBarValue: string, typeState: string, genState: string}){
  
  let filteredPokedex = []
  for(const poke of data){
    switch (genState){
      case "0":
        if(poke.types[0].type.name === typeState || poke.types[1]?.type.name === typeState || typeState === "all"){
          filteredPokedex.push(poke)
        }
        break;
      case "1":
        if (poke.id < 152 && (poke.types[0].type.name === typeState || poke.types[1]?.type.name === typeState || typeState === "all")) {
          filteredPokedex.push(poke)
        }
        break;
      case "2":
        if ((poke.id >= 152 && poke.id < 252) && (poke.types[0].type.name === typeState || poke.types[1]?.type.name === typeState || typeState === "all")) {
          filteredPokedex.push(poke)
        }
        break;
      case "3":
        if((poke.id >= 252 && poke.id < 387) && (poke.types[0].type.name === typeState || poke.types[1]?.type.name === typeState || typeState === "all")) {
          filteredPokedex.push(poke)
        }
        break;
      case "4":
        if((poke.id >= 387 && poke.id < 495) && (poke.types[0].type.name === typeState || poke.types[1]?.type.name === typeState || typeState === "all")) {
        filteredPokedex.push(poke)
        }
        break;
      case "5":
        if((poke.id >= 495 && poke.id < 650) && (poke.types[0].type.name === typeState || poke.types[1]?.type.name === typeState || typeState === "all")){
          filteredPokedex.push(poke)
        }
        break;
      case "6":
        if((poke.id >= 650 && poke.id < 722) && (poke.types[0].type.name === typeState || poke.types[1]?.type.name === typeState || typeState === "all")){
          filteredPokedex.push(poke)
        }
        break;
      case "7":
        if((poke.id >= 722 && poke.id < 810) && (poke.types[0].type.name === typeState || poke.types[1]?.type.name === typeState || typeState === "all")){
          filteredPokedex.push(poke)
        }
        break;
      case "8":
        if((poke.id >= 810 && poke.id < 906) && (poke.types[0].type.name === typeState || poke.types[1]?.type.name === typeState || typeState === "all")) {
          filteredPokedex.push(poke)
        }
        break;
    }
  }

  let mappedpokedex = filteredPokedex.map((value) => { 

    return (
      <div key={value.id} className="searchbar-pokemonItem" onClick={(event: MouseEvent) => {handleAdd(event, value)}}>
        <img className="pokemonItem-img" src={value.sprites}/>
        <span className="pokemonItem-name">{value.name}</span>
      </div>)
  })

  if(searchBarValue === "") {
      
      const LOADING = 1;
      const LOADED = 2;

      
      const isItemLoaded = (index: number) => !!itemStatusMap[index];
      const loadMoreItems = (startIndex: number, stopIndex: number) => {
          for (let index = startIndex; index <= stopIndex; index++) {
          itemStatusMap[index] = LOADING;
          }
          return new Promise<void>(resolve =>{ 
            for (let index = startIndex; index <= stopIndex; index++) {  
              itemStatusMap[index] = LOADED;
            }
            resolve();
            }  
          );
      };

        
        const Row = (data: any) => {
          let pokemonIitem
          if (itemStatusMap[data.index] === LOADED) {
          pokemonIitem = mappedpokedex[data.index];
          } else {
            pokemonIitem = "Loading...";
          }
          return (
            <div
              className="ListItem"
              style={data.style}
            >
              {pokemonIitem}
            </div>
          );
        };
        itemCount = filteredPokedex.length
        return (

            <InfiniteLoader
              isItemLoaded={isItemLoaded}
              itemCount={itemCount}
              loadMoreItems={loadMoreItems}
            >
             {({ onItemsRendered, ref }) => {
             return (<FixedSizeList
                className="List"
                height={700}
                itemCount={itemCount}
                itemSize={80}
                onItemsRendered={onItemsRendered}
                ref={ref}
                width={`100%`}
                >
                {Row}
              </FixedSizeList>)
            }}
            </InfiniteLoader>
        )
    }

  let searchBarRegex = new RegExp(`^${searchBarValue}`, "gi");
  let filteredPokes = filteredPokedex.filter((element) => {
    if(searchBarRegex.test(element.name)) {
      return true
    }
    return false
  })

  let mappedPokes = filteredPokes.map((element) => (
    <div key={element.id} className="searchbar-pokemonItem" onClick={(event:SyntheticEvent) => {handleAdd(event, element)}}>
      <img className="pokemonItem-img" src={element.sprites}/>
      <span className="pokemonItem-name">{element.name}</span>
    </div>)
  )

  return (
    <div className="mappedpokescontainer">
        {mappedPokes}
    </div>
  )
}

