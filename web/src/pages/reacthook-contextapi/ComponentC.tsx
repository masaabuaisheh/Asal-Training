import React, { useContext } from "react";
import { UserContext, ChannelContext } from ".";

const ComponentC = () => {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);

  return (
    <div>
      <h1>
        My Name is {user} and My Channel is {channel}
      </h1>
    </div>
  );
};

export default ComponentC;

/*
{/* to get the data that inside userContext use Consumer 
<UserContext.Consumer>
{/* to return the value inside a userContext *
{(user) => {
  return (
    <ChannelContext.Consumer>
        {(channel) => {
            return <h1>
                My Name is {user} and My Channel is {channel}
            </h1>
        }}
     </ChannelContext.Consumer>
  )
}}
</UserContext.Consumer>
*/
