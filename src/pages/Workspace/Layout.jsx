import { WorkspaceNavbar } from "@/components/organisms/Workpsace/WorkspaceNavbar";
import { WorkspaceSidebar } from "@/components/organisms/Workpsace/WorkspaceSidebar";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";

export const WorkspaceLayout = ( { children }) => {
    return(
        <div className="h-[100vh]">
            <WorkspaceNavbar />
       <div className="flex h-[calc(100vh-40px)]">
        <WorkspaceSidebar />
        <ResizablePanelGroup direction="horizontal" autoSaveId={"workspace-resize"}>
            <ResizablePanel
        defaultSize={20}
            minSize={11}
            className='bg-[#5E2C5F]'
            >
            <div>
          Sidebar
             </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
        </ResizablePanelGroup>
        { children }
       </div>
        </div>
    )
}