import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDoc,
    getDocs,  //Retrieves all documents from a collection.
    orderBy,  //We want the newest blogs first.
    query,  //Allows us to customize what we fetch.
    serverTimestamp,
    updateDoc
} from "firebase/firestore";

import { db } from "../firebase/config";



export const addBlog = (blogData) => {
    return addDoc( //ew document with an automatically generated ID.
        collection(db, "blogs"), //points to the blogs collection.
        {
            ...blogData,
            createdAt: serverTimestamp(),
        }
    );
};

export const getBlogs = async () => {
    const blogRef = collection(db, "blogs");

    const q = query(
        blogRef,
        orderBy("createdAt", "desc")
    );

    const snapshot = await getDocs(q);

    return snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),

    }));
};

export const getBlogById = async (id) => {
    const docRef = doc(db, "blogs", id);

    const snapshot = await getDoc(docRef);

    if (!snapshot.exists()) {
        return null;
    }

    return {
        id: snapshot.id,
        ...snapshot.data(),
    };
};

export const updateBlog = async (id, updatedBlog) => {
    const docRef = doc(db, "blogs", id);

    await updateDoc(docRef, updatedBlog);
}


export const deleteBlog = async (id) =>{
    const docRef = doc(db,"blogs" ,id);

    await deleteDoc(docRef);
};