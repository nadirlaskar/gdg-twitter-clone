import { collection, getFirestore, onSnapshot, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';

const useProfile = (handle) => {
  const [status, setStatus] = useState('loading');
  const [user, setUser] = useState(null);
  useEffect(() => {
    if (handle) {
      const db = getFirestore();
      const q = query(collection(db, 'users'), where('handle', '==', handle));
      setStatus('success');
      return onSnapshot(q,(snapshot) => {
        if (snapshot.docs.length > 0) {
          const user = snapshot.docs[0].data();
          setUser(user);
        } else {
          setUser(null);
        }
      });
    }
  }, [handle]);
  return [status, user];
}

export default useProfile;