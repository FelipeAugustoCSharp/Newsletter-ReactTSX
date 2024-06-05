import { User } from "../types/User";
import { Error } from "../types/Error";

export const validate = (data: User) => {
  const errors:Error = {};

  if (!data.name) {
    errors['name'] = "Name is required";
  }
  if (!data.email) {
    errors['email'] = "Email is required";
  }
  if (!data.agree) {
    errors['agree'] = "Agree is required";
  }
  return errors;
}