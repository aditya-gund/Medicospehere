//actual code to call existing java api will be written here using axios
const link = "http://localhost:8080/user";
import axios from "axios";

async function login(email, password) {
  const call = link + "/login";
  return axios.post(call, { email, password });
}

async function signup(firstName, lastName, email, password) {
  const call = link + "/signup";
  return axios.post(call, { firstName, lastName, email, password });
}

export { login, signup };
