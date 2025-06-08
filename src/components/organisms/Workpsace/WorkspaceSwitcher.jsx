import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useGetByWorkspaceById } from "@/hooks/api/workspaces/useGetWorkspaceById";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react"; // or your own loader
import { useFetchWorkspace } from "@/hooks/api/workspaces/useFetchWorkspace";

export const WorkspaceSwitcher = () => {
  const navigate = useNavigate();
  const { workspaceId } = useParams();

  if (!workspaceId) return null;

  const { isFetching, data: workspace } = useGetByWorkspaceById(workspaceId);

  const { workspaces, isFetching: isFetchingWorkspace} = useFetchWorkspace();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button
          className="size-9 relative overflow-hidden bg-[#ABABAD] hover:bg-[#ABABAD]/80 font-semibold text-slate-800 text-xl"
          title={workspace?.name}
        >
          {isFetching ? (
            <Loader className="size-5 animate-spin" />
          ) : (
            workspace?.name?.charAt(0)?.toUpperCase() || "?"
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem
        className='cursor-pointer flex-col justify-start items-start'>

          {workspace?.name}
          <span className="text-xs text-muted-foreground ml-2">
            (Active Workspace)
          </span>
        </DropdownMenuItem>
        {isFetchingWorkspace ? ( <Loader className="size-5 animate-spin" />):(
            workspaces?.map(() => {
                if(workspace._id == workspaceId) {
                    return null;
                }
                return(
                      <DropdownMenuItem
                          className='cursor-pointer flex-col justify-start items-start'
                          onClick={()=> navigate(`/workspace/${workspace._id}`)}
                key={workspace._id}>
            <p
            className="truncate"
            >{workspace?.name}</p>
                </DropdownMenuItem>
                )
            }
              
            )
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
