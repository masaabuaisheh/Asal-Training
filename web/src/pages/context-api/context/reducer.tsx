import { INCREMENT, DECREMENT } from "./actionTypes";

interface State {
  count: number;
}

interface IncrementAction {
  type: typeof INCREMENT;
}

interface DecrementAction {
  type: typeof DECREMENT;
}

type Action = IncrementAction | DecrementAction;

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };

    default:
      return state;
  }
};

export default reducer;
