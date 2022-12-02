import { collection, doc, getDocs, getFirestore, onSnapshot, query, setDoc } from "firebase/firestore"
import { useEffect, useState } from "react";
const db = getFirestore();
export const useDocsFromFirestoreCollection = (collectionName, conditions=[]) => {
    const [results, setResults] = useState([]);
    useEffect(()=>{
        const collectionRef = collection(db, collectionName);
        const q = query(collectionRef,...conditions);
        return onSnapshot(q,(docs)=>{
            const updates = [];
            docs.forEach((doc)=>{
                const data = doc.data();
                data.id = doc.id;
                results.push(data);
            })
            setResults(updates);
        })
    },[collectionName, conditions])
    return results;
}
export const useGetDocFromFirestore = (collectionName, docId) => {
    const [result, setResult] = useState([]);
    useEffect(()=>{
        const docRef = doc(db,collectionName, docId);
        return onSnapshot(docRef,(doc)=>{
            const data = doc.data();
            data.id = doc.id;
            setResult(doc);
        })
    },[collectionName, conditions])
    return result;
}