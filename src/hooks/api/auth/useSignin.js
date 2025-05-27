import { signInRequest } from '@/apis/auth';
import { useAuth } from '@/hooks/context/useAuth';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

export const useSignin = () => {
    const { setAuth } = useAuth();

    const { isPending, isSuccess, error, mutateAsync: signinMutation } = useMutation({
        mutationFn: signInRequest,
        onSuccess: (response) => {
            console.log('Successfully signed in', response);

            const userObject = JSON.stringify(response.data);
            localStorage.setItem('user', userObject); 
            localStorage.setItem('token', response.data.token);

            setAuth({
                token: response.data.token,
                user: response.data,
                loading: false
            });

            toast.success('Successfully signed In! You will be redirected to the home page in a few seconds');
        },
        onError: (error) => {
            console.error('Failed to sign in', error);
            toast.error(error.message || 'Failed to sign in');
        }
    });

    return {
        isPending,
        isSuccess,
        error,
        signinMutation
    };
};
