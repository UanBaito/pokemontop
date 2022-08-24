import React from "react";

export type {PokeIndex, Pokimon, Config}

interface PokeIndex
{name: string; url: string}

interface Pokimon
{
    name: string;
    sprites: string;
    id: number;
    types: [
        {slot: number
        type: {name: string; url: string;}},

        {slot: number
        type: {name: string; url: string;}}
    ]
    
};


interface Config 
{
    gen: number | string;
    type: string;
}

