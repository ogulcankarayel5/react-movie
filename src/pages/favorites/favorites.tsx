import React, { useEffect, useState } from 'react'
import { doc, getDoc } from '@firebase/firestore'
import { db } from 'plugins/firebase'
import firebase from 'firebase/compat'

export const Favorites = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [favorites, setFavorites] = useState(null)
  const docRef = doc(db, 'favorites', firebase.auth().currentUser?.uid || '')
  useEffect(() => {
    const getData = async () => {
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        setFavorites(docSnap.data().movies)
      }
    }
    getData()
  }, [])

  return <div />
}
