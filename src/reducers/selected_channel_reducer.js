
import { initialState } from '../index';

export default function(state = null, action) {
  switch (action.type) {
    default:
      return initialState.selectChannel;
  }
}