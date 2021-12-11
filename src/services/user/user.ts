import { auth, provider } from 'plugins/firebase'

const loginWithEmailAndPassword = async (email: string, password: string) => {
  await auth.signInWithEmailAndPassword(email, password)
}

const loginWithGoogle = async () => {
  await auth.signInWithPopup(provider)
}

const userService = {
  loginWithEmailAndPassword,
  loginWithGoogle,
}

export default userService
