import { useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
export default () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [tweets, setTweets] = useState([]);

    useEffect(()=>{
        getDocs(collection(db, 'users')).then((snapshots)=>{
            if(!snapshots.empty){
                
            }
        })
    },[setLoading, setError, setTweets])
    
    return {loading, tweets, error}
}