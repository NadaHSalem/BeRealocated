import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase_setup/firebase";
const GetUser = () => {
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    return user;
    // ...
  } else {
    return null;
    // User is signed out
    // ...
  }
});
}
export default GetUser
