import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/hooks/context/useAuth";
import { LogOutIcon, PencilIcon, SettingsIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-hot-toast';
import { useCreateWorkspaceModal } from "@/hooks/context/useCreateWorkspaceModal";

export const UserButton = () => {
  const navigate = useNavigate();
  const { auth, logout } = useAuth();
  const { setOpenCreateWorkspaceModal } = useCreateWorkspaceModal();

  function handleFunction() {
    setOpenCreateWorkspaceModal(true);
  }

  async function handleLogout() {
    try {
      await logout();
      toast.success('Successfully signed out!');
      navigate('/auth/signin');
    } catch (error) {
      console.error('Failed to log out', error);
      toast.error(error.message || 'Failed to log out');
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button type="button" className="outline-none relative">
          <Avatar className="size-10 hover:opacity-65 transition">
            <AvatarImage src={auth?.user?.avatar} />
            <AvatarFallback>
              {auth?.user?.username?.[0]?.toUpperCase() ?? "U"}
            </AvatarFallback>
          </Avatar>
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuItem onClick={handleFunction}>
          <PencilIcon className="mr-2 h-4 w-4" />
          Create Workspace
        </DropdownMenuItem>

        <DropdownMenuItem>
          <SettingsIcon className="mr-2 h-4 w-4" />
          Settings
        </DropdownMenuItem>

        <DropdownMenuItem onClick={handleLogout}>
          <LogOutIcon className="mr-2 h-4 w-4" />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
