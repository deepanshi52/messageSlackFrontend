import { Route, Routes } from 'react-router-dom';
import { Auth } from '@/pages/Auth/Auth';
import { NotFound } from './pages/Auth/Notfound/Notfound';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SignupContainer } from '@/components/organisms/Auth/SignupContainer';
import { SigninContainer } from './components/organisms/Auth/SigninContainer';
import { Toaster } from 'react-hot-toast';


const queryClient = new QueryClient();
function App() {
  

  return (
    <QueryClientProvider client={queryClient}>
     <Routes>
        <Route path="/auth/signup" element={<Auth><SignupContainer /></Auth>} />
        <Route path="/auth/signin" element={<Auth><SigninContainer/></Auth>} />
        <Route path="*" element={<NotFound />} />
        <Route path="/home" element={<Auth><h1>Home</h1></Auth>}/>
      </Routes>
      <Toaster position='left'/>
    </QueryClientProvider>
  );
}

export default App;
