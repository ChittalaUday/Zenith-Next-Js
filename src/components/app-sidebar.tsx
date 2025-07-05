"use client";

import * as React from "react";
import {
  AudioWaveform,
  Users,
  Library,
  Command,
  ChartNoAxesGantt,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  PanelRightDashed,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// Icon mapping
const iconMap: Record<string, React.ElementType> = {
  AudioWaveform,
  Users,
  Library,
  Command,
  ChartNoAxesGantt,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  PanelRightDashed,
};

// Function to fetch dashboard data from API
async function getDashboardData() {
  try {
    const response = await fetch('/api/dashboard');
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
    // Fallback data
    return {
      user: {
        name: "shadcn",
        email: "m@example.com",
        avatar: "/avatars/shadcn.jpg",
      },
      teams: [
        {
          name: "Acme Inc",
          logo: "GalleryVerticalEnd",
          plan: "Enterprise",
        },
      ],
      navMain: [
        {
          title: "Dashboard",
          url: "/dashboard",
          icon: "PanelRightDashed",
          isActive: false,
        },
      ],
      projects: [
        {
          name: "Design Engineering",
          url: "/about",
          icon: "Frame",
        },
      ],
    };
  }
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [data, setData] = React.useState<any>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const dashboardData = await getDashboardData();
        setData(dashboardData);
      } catch (error) {
        console.error('Error fetching dashboard:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  if (loading || !data) {
    return (
      <Sidebar collapsible="icon" {...props}>
        <SidebarHeader>
          <div className="animate-pulse">
            <div className="h-12 bg-muted rounded-lg"></div>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <div className="animate-pulse space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-8 bg-muted rounded"></div>
            ))}
          </div>
        </SidebarContent>
        <SidebarFooter>
          <div className="animate-pulse">
            <div className="h-12 bg-muted rounded-lg"></div>
          </div>
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>
    );
  }

  // Transform data to include icon components
  const transformedData = {
    ...data,
    teams: data.teams.map((team: any) => ({
      ...team,
      logo: iconMap[team.logo] || GalleryVerticalEnd,
    })),
    navMain: data.navMain.map((item: any) => ({
      ...item,
      icon: iconMap[item.icon] || PanelRightDashed,
    })),
    projects: data.projects.map((project: any) => ({
      ...project,
      icon: iconMap[project.icon] || Frame,
    })),
  };

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={transformedData.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={transformedData.navMain} />
        <NavProjects projects={transformedData.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={transformedData.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}


