import { signInRequest } from '@/apis/auth';
import { useAuth } from '@/hooks/context/useAuth';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';


export const useSignin = () => {
    const { setAuth } = useAuth();
    const { isPending, isSuccess, error, mutateAsync: signinMutation } = useMutation({
        mutationFn: signInRequest,
        onSuccess: (response) => {
            console.log('Successfully signed in', response);

        const userObject = JSON.stringify(response.data)

        localStorage.setItem('user',userObject);
        localStorage.setItem('token', response.data.token);

        setAuth({
            token: response.data.token,
            user: response.data,
            loading: false
        })

        toast('Successfully signed In ! You will be redirected to the home page in few seconds');
        },
        onError: (error) => {
            console.error('Failed to sign up', error);
            toast.error(error.message || 'Failed to sign up');
        }

    });

    return {
        isPending,
        isSuccess,
        error,
        signinMutation
    };
};