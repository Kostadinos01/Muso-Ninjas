import { ref } from "vue"
import {projectAuth} from '../firebase/config'

const error = ref(null)
const isPending = ref(false)

const signUp = async (email, password, displayName) => {
    error.value = null
    isPending.value = true

    try{
      // Creating a new user  
      const res = await projectAuth.createUserWithEmailAndPassword(email, password)
      
      // In case we don't get a response
      if(!res) {
          throw new Error('Could not complete the SignUp')
      }
      // Updating the users profile
      await res.user.updateProfile({displayName})
      error.value = null
      isPending.value = false

      return res

      // Catching the error if there is one
    } catch(err){
       console.log(err.message)
       error.value = err.message
       isPending.value = false
    }
}

const useSignUp = () => {
    return {error, signUp, isPending}
}

export default useSignUp