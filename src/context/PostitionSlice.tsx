import React, { createContext, useState } from "react";
import { Idata, Iposition, IpositionContextType } from "../utils/models/interfaces";
import { data } from "../utils/info";

interface Iprops {
    children:JSX.Element | JSX.Element[];
}

export const PostitionContext = createContext<IpositionContextType | null>(null);

export const PositionProvider  = ({ children }:Iprops) => {
    const [numbers, setNumbers] = useState<Iposition["position"]>({
        position1:0,
        position2:1
    });

    const [info, setInfo] = useState<Idata>(data)

    return (<PostitionContext.Provider value={{numbers, setNumbers, info}}>{children}</PostitionContext.Provider>);
};





