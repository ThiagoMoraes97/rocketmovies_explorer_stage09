import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../resources/api";

const AuthContext = createContext({});

function AuthProvider ({children}) {

  const [ data , setData] = useState({});

  async function signIn( {email, password} ){

   try{
    const response = await api.post("/sessions", {email, password});
    const { user, token } = response.data;

    localStorage.setItem("@rocketmovies:user", JSON.stringify(user));
    localStorage.setItem("@rocketmovies:token", token);

    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    setData({user, token});

   }catch(error){ 

    if(error.response){
      alert(error.response.data.message)
    }else{
      alert("Não foi possível iniciar sessão!")
    }

   }
  };

  function signOut (){
    localStorage.removeItem("@rocketmovies:user");
    localStorage.removeItem("@rocketmovies:token");
    setData({});
  };

  async function updateProfile( user, avatarFile ) {
    try {

      if(avatarFile){
        const fileUpdateForm = new FormData();
        fileUpdateForm.append("avatar", avatarFile);
        const response =  await api.patch("users/avatar", fileUpdateForm);
        user.avatar = response.data.avatar;
      } 

      const currentUser = JSON.parse(localStorage.getItem("@rocketmovies:user"));

      const updatedUser = Object.assign(currentUser, user);

      await api.put("/users", updatedUser);

      localStorage.setItem("@rocketmovies:user", JSON.stringify(updatedUser));

      setData({user: updatedUser, token: data.token});

      alert("Perfil atualiado com sucesso!");
      
    } catch(error){

      if(error.response){
        alert(error.response.data.message)
      }else{
        alert("Não foi possível atualizar o perfil!")
      }
  
     }
  }

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("@rocketmovies:user"));
    const token = localStorage.getItem("@rocketmovies:token");

    if(user && token){
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setData({user, token})
    };
  }, []);

  return(
    <AuthContext.Provider value={{signIn, signOut, updateProfile ,user: data.user}}>
      {children}
    </AuthContext.Provider>
  )
};

function useAuth () {
  const context = useContext(AuthContext);

  return context
};

export {AuthProvider, useAuth};