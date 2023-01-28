import React, { createContext, useState } from "react";
import { Iposition, IpositionContextType } from "../utils/models/interfaces";

interface Iprops {
    children:JSX.Element | JSX.Element[];
}

export const PostitionContext = createContext<IpositionContextType | null>(null);

export const PositionProvider  = ({ children }:Iprops) => {
    const [numbers, setNumbers] = useState<Iposition>({
        position1:1,
        position2:2
    });

    return (<PostitionContext.Provider value={{numbers, setNumbers}}>{children}</PostitionContext.Provider>);
};





