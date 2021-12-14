import {
  arrayUnion,
  collection,
  doc,
  getDocs,
  setDoc,
} from 'firebase/firestore'
import { auth, db, provider } from 'plugins/firebase'

const loginWithEmailAndPassword = async (email: string, password: string) => {
  await auth.signInWithEmailAndPassword(email, password)
}

const loginWithGoogle = async () => {
  await auth.signInWithPopup(provider)
}

const getFavorites = async () => {
  const ref = collection(db, 'favorites')
  const data = await getDocs(ref)

  return data
}

const addFavorite = async (data: any, userId: string) => {
  await setDoc(
    doc(db, 'favorites', userId),
    { movies: arrayUnion(data) },
    { merge: true }
  )
}
const userService = {
  loginWithEmailAndPassword,
  loginWithGoogle,
  getFavorites,
  addFavorite,
}

export default userService
