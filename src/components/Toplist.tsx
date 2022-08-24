import { Pokimon } from "../interface";
import colours from "../assets/pokemon-type-colours"

export default function Toplist(props: any){

    let mappedTop = props.toplistState.map((element: Pokimon, index: number) => {
        
        let type = element?.types[0].type.name
        return (
            <div key={index} className={"topPokemon-itemcontainer " + `${element === null ? "" : "topPokemon-itemcontainer-filled"}` } onClick={() => {props.handleRemove(index)}} style={{backgroundColor: element === null ? "#242424" :`${colours[type]}`}}>
                {element === null ? "" : <img src={element.sprites}/>}
                <span className="topPokemon-name">{element?.name}</span>
            </div>
        )
    })

    return(
        mappedTop
    )
}