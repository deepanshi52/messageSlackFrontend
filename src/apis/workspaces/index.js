import axios from '@/config/axiosConfig';
// Assuming 'worker' is used somewhere else (otherwise remove this import)

export const createWorkspaceRequest = async ({ name, description, token }) => {
  try {
    const response = await axios.post(
      '/workspaces',
      { name, description },
      {
        headers: {
          'x-access-token': token,
        },
      }
    );
    console.log("Response in create workspace request", response);
    return response?.data;
  } catch (error) {
    console.log("Error in create workspace request", error);
    throw error.response?.data ?? error;
  }
};

export const fetchWorkspacesRequest = async ({ token }) => {
  console.log("Token is ",token)
  try {
    const response = await axios.get('/workspaces', {
      headers: {
        'x-access-token': token,
      },
    });
    console.log("Response in fetch workspace request", response);
    return response?.data?.data;
  } catch (error) {
    console.log("Error in fetching workspace request", error);
    throw error.response?.data ?? error;
  }
};

export const fetchWorkspaceDetailsRequest = async ({ workspaceId, token }) => {
  console.log("Workosapce id is ",workspaceId)
  try {
    const response = await axios.get(`/workspaces/${workspaceId}`, {
      headers: {
        'x-access-token': token
      }
    });
    return response?.data?.data;
  } catch (error) {
    console.log("Error in fetching workspace details request", error);
    throw error.response?.data ?? error;
  }
};
