import { collection, getDocs, getFirestore } from 'firebase/firestore/lite';
import { useEffect, useState } from "react";
export default () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [tweets, setTweets] = useState([]);

    useEffect(()=>{
        const db = getFirestore();
        const tweetsCollection = collection(db, 'tweets');
        getDocs(tweetsCollection).then((querySnapshot) => {
            const tweets = querySnapshot.docs.map((doc) => doc.data());
            setTweets(tweets);
            setLoading(false);
        }).catch((err) => {
            setError(err);
            setLoading(false);
        });
    },[setLoading, setError, setTweets])
    
    return {loading, tweets, error}
}