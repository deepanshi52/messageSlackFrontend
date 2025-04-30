import { signInRequest } from '@/apis/auth';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';


export const useSignin = () => {

    const { isPending, isSuccess, error, mutateAsync: signinMutation } = useMutation({
        mutationFn: signInRequest,
        onSuccess: (data) => {
            console.log('Successfully signed in', data);
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