import React from "react";
import ComponentA from "./ComponentA";
import { createContext } from "react";

// Define the type for the context value
type ContextType = string | null;

// Create Context API to export (share) it with different components
export const UserContext = createContext<ContextType>(null);
export const ChannelContext = createContext<ContextType>(null);

const Index = () => {
  return (
    <div>
      {/* Provide data that I want to add in Context API to share it with ComponentA */}
      <UserContext.Provider value={"Masa"}>
        <ChannelContext.Provider value={"***********"}>
          <ComponentA />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
};

export default Index;
