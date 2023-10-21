import { STUDENT, TEACHER } from "../Constants/user";

export const teacherAction = () => {
  return {
    type: TEACHER,
    payload: "You are in the teacher's account ",
  };
};

export const studentAction = () => {
  return {
    type: STUDENT,
    payload: "You are in the student's account ",
  };
};
