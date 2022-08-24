import { ChangeEventHandler, SetStateAction } from "react";


export default function Config({ genState , handleSelectGen, typeState, handleSelectType}: {genState: string; handleSelectGen: ChangeEventHandler; typeState: string; handleSelectType: ChangeEventHandler}) {
    return (
        <div id="config-container">
            <form className="config-form">
                <label htmlFor="">
                    Select gen:
                    <select value={genState} onChange={handleSelectGen} name="gen" id="gen">
                        <option value={"0"}>all</option>
                        <option value={"1"}>gen 1</option>
                        <option value={"2"}>gen 2</option>
                        <option value={"3"}>gen 3</option>
                        <option value={"4"}>gen 4</option>
                        <option value={"5"}>gen 5</option>
                        <option value={"6"}>gen 6</option>
                        <option value={"7"}>gen 7</option>
                        <option value={"8"}>gen 8</option>
                    </select>
                </label>
                <label htmlFor="">
                    Select type:
                    <select value={typeState} onChange={handleSelectType} name="type" id="type">
                        <option value={"all"}>all</option>
                        <option value={"fire"}>Fire</option>
                        <option value={"water"}>Water</option>
                        <option value={"ghost"}>Ghost</option>
                        <option value={"bug"}>Bug</option>
                        <option value={"dragon"}>Dragon</option>
                        <option value={"electric"}>Electric</option>
                        <option value={"fighting"}>Fighting</option>
                        <option value={"flying"}>Flying</option>
                        <option value={"grass"}>Grass</option>
                        <option value={"ground"}>Ground</option>
                        <option value={"rock"}>Rock</option>
                        <option value={"ice"}>Ice</option>
                        <option value={"normal"}>Normal</option>
                        <option value={"poison"}>Poison</option>
                        <option value={"psychic"}>Psychic</option>
                        <option value={"steel"}>Steel</option>
                        <option value={"fairy"}>Fairy</option>    
                        <option value={"dark"}>Dark</option>
                    </select>
                </label>
            </form>
        </div>
    )
}