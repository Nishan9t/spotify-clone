import { createContext,useContext,useReducer } from "react";

export const StateContext=createContext();

export const StateProvider=({childern,initialState,reducer})=>(

    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {childern}
    </StateContext.Provider>
);

export const useStateProvider = ()=> useContext(StateContext);