import { ENQUEUE_STATUS, DEQUEUE_STATUS } from "../actionTypes";

export const enqueueStatus = status => ({
  type: ENQUEUE_STATUS,
  status
});

export const dequeueStatus = () => ({
  type: DEQUEUE_STATUS
});
