import { ENQUEUE_STATUS, DEQUEUE_STATUS } from "../actionTypes";

export default function(state = [], action) {
  switch (action.type) {
    case ENQUEUE_STATUS:
      return [...state, action.status];

    case DEQUEUE_STATUS:
      return [...state.slice(0, 1)];

    default:
      return state;
  }
}
