import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
    const navigate = useNavigate();
    return(
    <div
     className="flex h-screen w-full flex-col items-center justify-center bg-gray-100"
    >
     <Card className="text-center shadow-lg max-w-lg" >
     <CardHeader>
        <CardTitle>404 not found</CardTitle>
        <p className="text-gray-600">
            The page you are looking for doesn't exist.
        </p>
     </CardHeader>
     <CardContent>
     <img
     className="rounded-lg shadow-lg"
     src="https://cdn4.vectorstock.com/i/1000x1000/85/43/error-page-not-found-vector-27898543.jpg"
     />
        <Button
        variant="outlined"
        onClick={(() => navigate(-1))}
        className="mt-4"
        
        >
            Go Back
        </Button>

     </CardContent>
   </Card> 
  </div>
    );
};