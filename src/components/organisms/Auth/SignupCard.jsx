import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { FaCheck } from "react-icons/fa";
import { Separator } from "@/components/ui/separator";
import { LucideLoader2, TriangleAlert } from "lucide-react";

import { useNavigate } from "react-router-dom";


export const SignupCard = ({ 
    signupForm , 
    setSignupForm,
     validationError,
      onSignupFormSubmit,
      error,
      isPending,
      isSuccess
    }) => {
    
    const navigate = useNavigate();
   
     return(
    <Card className="w-full h-full">
     <CardHeader>
        <CardTitle>Sign Up</CardTitle>
        <CardDescription>Sign up to access your account</CardDescription>

    {validationError && (
        <div className='bg-destructive/15 p-4 rounded-md flex  items-center gap-x-2 text-sm text-destructive mb-6'>
    <TriangleAlert className='size-5' />
      <p>{validationError.message}</p>
        </div>
    )}

     {validationError && (
        <div className='bg-destructive/15 p-4 rounded-md flex  items-center gap-x-2 text-sm text-destructive mb-6'>
    <TriangleAlert className='size-5' />
      <p>{validationError.message}</p>
        </div>
    )}
         {error && (
        <div className='bg-destructive/15 p-4 rounded-md flex  items-center gap-x-2 text-sm text-destructive mb-6'>
    <TriangleAlert className='size-5' />
      <p>{error.message}</p>
        </div>
    )}

    {isSuccess && (
        <div className='bg-primary/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-primary mb-5'>
          <FaCheck className='size-5'  /> 
            <p>
        Successfully signed up. You will be redirected to the login page in few seconds.
        <LucideLoader2 className="animate-spin ml-2" />
            </p>
        </div>
    )}
     </CardHeader>
     <CardContent>
        <form className='space-y-3' onSubmit={onSignupFormSubmit}>
            <Input  
            placeholder="Email"
            required
            onChange={(e) => setSignupForm({ ...signupForm, email: e.target.value })}
            value={signupForm.email}
            type="email"
            disabled={false} 
            />
             <Input  
            placeholder="Password"
            required
            onChange={(e) => setSignupForm({ ...signupForm, password: e.target.value })}
            value={signupForm.password}
            type="password"
            disabled={false} 
            />
              <Input  
            placeholder="Confirm Password"
            required
            onChange={(e) => setSignupForm({ ...signupForm, confirmPassword: e.target.value })}
            value={signupForm.confirmPassword}
            type="Password"
            disabled={false} 
            /> 
            <Input  
            placeholder="Your username"
            required
            onChange={(e) => setSignupForm({ ...signupForm, username: e.target.value })}
            value={signupForm.username}
            type="username"
            disabled={false} 
            />
            <Button 
            disabled={false}
            size="lg"
            type="submit"
            className="w-full"
            >
                Continue
            </Button>
        </form>
        <Separator  className="my-5" />
        <p
        className="text-s text-muted-foreground mt-4 ">
            Already have an account? { '' }
            < span
             className="text-sky-600 hover:underline cursor-pointer"
             onClick={() => navigate('/auth/signin')}
            >
                Sign in
                </span>
        </p>
     </CardContent>
    </Card>
    )
}

