import firebase_app from "../config";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const auth = getAuth(firebase_app);

export default async function resetPassword(email) {
  let result = null,
    error = null;
  try {
    await sendPasswordResetEmail(auth, email);
    result = "email-send";
  } catch (e) {
    error = e;
  }

  return { result, error };
}
