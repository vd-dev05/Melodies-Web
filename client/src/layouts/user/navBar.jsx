import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"
import {
    IconHome,
    IconExplore,
    IconAlbums,
    IconArtists,
    IconRecent,
    IconMostPlayed,
    IconHeart,
    IconPlaylist,
    // IconAddPlaylist,
    IconSettings,
    IconLogout
}
    from "@/assets/icon/config";
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Link } from "react-router";

const menuItems = [
    {
        title: "Menu",
        items: [
            { title: "Home", url: "home", icon: IconHome, highlight: true },
            { title: "Discover", url: "discover", icon: IconExplore },
            { title: "Albums", url: "albums", icon: IconAlbums },
            { title: "Artists", url: "artists", icon: IconArtists },
        ]
    },
    {
        title: "Library",
        items: [
            { title: "Recently Added", url: "recently-added", icon: IconRecent },
            { title: "Most Played", url: "most-played", icon: IconMostPlayed },
        ]
    },
    {
        title: "Playlist and Favorite",
        items: [
            { title: "Your favorites", url: "favorites", icon: IconHeart },
            { title: "Your playlist", url: "your-playlist", icon: IconPlaylist },
            // { title: "Add playlist", url: "add-playlist", icon: IconAdd, highlight: true },
        ]
    },
    {
        title: "General",
        items: [
            { title: "Setting", url: "settings", icon: IconSettings },
            { title: "Logout", url: "logout", icon: IconLogout, highlight: true },
        ]
    }
];

const NavbarDesktop = () => {
    return (
        <Sidebar >
            <SidebarContent className={"bg-[#0f1a20] text-white"}>
                <SidebarGroup>
                    <SidebarGroupLabel>Melodies</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {menuItems.map((section, index) => (
                                <div key={index} className="mb-4">
                                    <h3 className="text-xs uppercase text-gray-400 mb-2">{section.title}</h3>
                                    <ul>
                                        {section.items.map((item, idx) => (
                                            <li key={idx} className={`flex items-center p-2 rounded-md ${item.highlight ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white" : "hover:bg-gray-700"} transition-all cursor-pointer`}>
                                                <item.icon className="w-5 h-5 mr-2" />
                                                {item.title}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
}

export default NavbarDesktop;