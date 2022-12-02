import { useAuthentication } from "../hooks/useAuthentication";
import { SignInWithGoogle } from "../libs/firebase.utils";
import UserInfo from "./UserInfo";

const Authenticate = () => { 
  const {user, loading} = useAuthentication();
  const handle = user?.email.replace(/@.+/, '');
  return (
    <div>
      {!loading && <UserInfo profileHandle={handle} showLogout={true} />}
      {!user && <button onClick={SignInWithGoogle}>Login</button>}
    </div>
  );
}

export default Authenticate;