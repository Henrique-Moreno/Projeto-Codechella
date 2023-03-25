import { createContext, useState } from "react";
import api from "../services/api";

export const AuthContext = createContext({})

function AuthProvider({children}){

   const [user, setUser] = useState({})
   const [ingress, setIngress] = useState({})

   async function yuirTickes(ingresso){
      const res = await api.get('/ingressos', {ingresso: ingresso})
      setIngress({
         ingresso: ingresso,
      })
   }

   async function signUp(name, email, date_of_birth, ingresso_id) {

      const res = await api.post('/users', { name: name, email: email, date_of_birth: date_of_birth, ingresso_id: ingresso_id })
      setUser({
         name: name,    
      })
   }

   return(
      <AuthContext.Provider value={{ signUp, user, yuirTickes, ingress}}>
         {children}
      </AuthContext.Provider>
   )
}

export default AuthProvider;