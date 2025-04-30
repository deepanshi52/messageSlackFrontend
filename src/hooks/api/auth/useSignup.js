import { signUpRequest } from '@/apis/auth';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';


export const useSignup = () => {

    const { isPending, isSuccess, error, mutateAsync: signupMutation } = useMutation({
        mutationFn: signUpRequest,
        onSuccess: (data) => {
            console.log('Successfully signed up', data);
            toast(
             'Successfully signed up,You will be redirected to the login page in a few seconds.')
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
        signupMutation
    };
};