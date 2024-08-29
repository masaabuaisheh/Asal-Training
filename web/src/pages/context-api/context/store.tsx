import React, { createContext, useReducer, useContext, ReactNode } from "react";
import reducer from "./reducer";

interface State {
  count: number;
}

const initialState: State = {
  count: 0,
};

// This creates a Context that will store our state and a dispatch function (used to change the state)
const StoreContext = createContext<
  | {
      state: State;
      dispatch: React.Dispatch<any>;
    }
  | undefined
>(undefined);

// This hook is a helper to access our context data (state and dispatch)
export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    // It ensures you are using this hook inside a StoreProvider
    throw new Error("useStore must be used within a StoreProvider");
  }
  return context;
};

// Define props for StoreProvider
//  is a special prop that represents whatever you put inside a component when you use it.
interface StoreProviderProps {
  children: ReactNode;
}

// Store provider component
export const StoreProvider: React.FC<StoreProviderProps> = ({ children }) => {
  // This is where the state and how to update it (dispatch) are managed
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    // It makes the state and dispatch available to any component inside this provider
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};
