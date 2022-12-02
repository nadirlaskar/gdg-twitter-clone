import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
export const SignInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/user.birthday.read');
  provider.addScope('https://www.googleapis.com/auth/userinfo.profile');
  provider.setCustomParameters({
    prompt: 'select_account',
  })
  try {
    const result = await signInWithPopup(getAuth(), provider);
    return result;
  } catch (err) { 
    console.error(err);
  }
}

export const LogoutUser = async () => {
  const auth = getAuth();
  await auth.signOut();
}