import {createContext} from "react" 
// import {useState} from "react"

export const AuthContext = createContext()

function AppContextProvider({children}) {
     <AuthContext.Provider>
     {children}
     </AuthContext.Provider>
}

export default AppContextProvider;
