import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

import { useCreateWorkspace } from "@/hooks/api/workspaces/useCreateWorkspace";
import { useCreateWorkspaceModal } from "@/hooks/context/useCreateWorkspaceModal";

export const CreateWorkspaceModal = () => {
  const { openCreateWorkspaceModal, setOpenCreateWorkspaceModal } = useCreateWorkspaceModal();
  const { createWorkspaceMutation, isLoading } = useCreateWorkspace();
  const [workspaceName, setWorkspaceName] = useState("");
  const navigate = useNavigate();

  const handleClose = () => {
    setOpenCreateWorkspaceModal(false);
    setWorkspaceName("");
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await createWorkspaceMutation({ name: workspaceName.trim() });
      console.log("Created the workspace", data);
      navigate("/workspaces");
      handleClose();
    } catch (error) {
      console.error("Failed to create workspace:", error);
      // Optional: Show user-facing error
    }
  };

  return (
    <Dialog open={openCreateWorkspaceModal} onOpenChange={setOpenCreateWorkspaceModal}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create a new workspace</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleFormSubmit} className="space-y-4">
          <Input
            required
            disabled={isLoading}
            minLength={3}
            placeholder="e.g. MyWorkspace, Dev Workspace"
            value={workspaceName}
            onChange={(e) => setWorkspaceName(e.target.value)}
          />

          <div className="flex justify-end">
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Creating..." : "Create Workspace"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
