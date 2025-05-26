import combineContext from "@/utils/combineContext.jsx";
import { AuthContextProvider } from "./AuthContext.jsx";

export const AppContextProvider = combineContext(
    AuthContextProvider,
  
)