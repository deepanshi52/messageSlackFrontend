import axios from '@/config/axiosConfig';
import { worker } from 'globals';


export const createWorkspaceRequest = async ({ name, description, token}) => {
    try {
      const response = await axios.post('/workspaces', {name, description},{
          headers: {
        'x-access-token': token
      }
      });
    console.log("Response in create workspace request", response);
    return response?.data;

    } catch (error) {
      console.log("Error in create workspace request", error);
      throw error.response.data;
        
    }
};

export const fetchWorkspacesRequest = async ({ token }) => {
     try {
      const response = await axios.get('/workspaces',{
          headers: {
        'x-access-token': token
      }
      });
    console.log("Response in fetch workspace request", response);
    return response?.data?.data;

    } catch (error) {
      console.log("Error in fetching workspace request", error);
      throw error.response.data;
        
    }
};



export const fetchWorkspaceDetailsRequest = async ({ workspaceId, token }) => {
   try {
    const response = await axios.get(`/workspaces/${workspaceId}`, {
      headers: {
        'x-access-token': token
        
      }
    });
   } catch (error) {
    console.log('Error in fetching workspace details error', error);
    throw error.response.data;
    
   }

}

