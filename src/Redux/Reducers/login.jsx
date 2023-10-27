import { STUDENT, TEACHER } from "../Constants/user";

function login(state = true, action) {
  switch (action.type) {
    case STUDENT:
      return state;
    case TEACHER:
      return !state;
    default:
      return state;
  }
}
export default login;
