import { UserButton } from "@/components/atoms/UserButton/UserButton"
import { SideBarButton } from "@/components/molecules/SideBarButton/SideBarButton"
import { BellIcon, HomeIcon, MessageSquareIcon, MoreHorizontalIcon } from "lucide-react"
import { WorkspaceSwitcher } from "@/components/organisms/Workpsace/WorkspaceSwitcher"

export const WorkspaceSidebar = () => {
    return(
      <aside className="w-[70px] h-full bg-[#481349] flex flex-col gap-y-4 items-center pt-[10px] pb-[5px]"
      >


      {/* <WorkspaceSwitcher /> */}


        <SideBarButton 
        Icon={HomeIcon}
        label="Home"
        />
     
     <SideBarButton 
        Icon={MessageSquareIcon}
        label="DMs"
        />
         
     <SideBarButton 
        Icon={BellIcon}
        label="Notifications"
        />

         
     <SideBarButton 
        Icon={MoreHorizontalIcon}
        label="More"
        />
     
    <div className="flex flex-col items-center justify-center mt-auto mb-5 gap-y-1"> 
        <UserButton />
        </div> 


      </aside>
    )
}