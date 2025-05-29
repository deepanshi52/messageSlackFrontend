import combineContext from "@/utils/combineContext.jsx";
import { AuthContextProvider } from "./AuthContext.jsx";
import { CreateWorkspaceContextProvider } from "./CreateWorkspaceContext.jsx";

export const AppContextProvider = combineContext(
    AuthContextProvider,
    CreateWorkspaceContextProvider
  
)