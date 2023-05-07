import { ReactComponent as OverviewSvg } from "../../assets/svg/overview.svg";
import { ReactComponent as TicketsSvg } from "../../assets/svg/tickets.svg";
import { ReactComponent as IdeasSvg } from "../../assets/svg/ideas.svg";
import { ReactComponent as ContactsSvg } from "../../assets/svg/contacts.svg";
import { ReactComponent as AgentsSvg } from "../../assets/svg/agents.svg";
import { ReactComponent as ArticlesSvg } from "../../assets/svg/articles.svg";
import { ReactComponent as SettingsSvg } from "../../assets/svg/setting.svg";
import { ReactComponent as SubscriptionSvg } from "../../assets/svg/subscription.svg";
import { nanoid } from "nanoid";

export const menuItems = [
  {
    id: nanoid(),
    path: "/dashboard/Overview",
    name: "Overview",
    icon: <OverviewSvg />,
  },
  {
    id: nanoid(),
    path: "/dashboard/Tickets",
    name: "Tickets",
    icon: <TicketsSvg />,
  },
  {
    id: nanoid(),
    path: "/dashboard/Ideas",
    name: "Ideas",
    icon: <IdeasSvg />,
  },
  {
    id: nanoid(),
    path: "/dashboard/Contacts",
    name: "Contacts",
    icon: <ContactsSvg />,
  },
  {
    id: nanoid(),
    path: "/dashboard/Agents",
    name: "Agents",
    icon: <AgentsSvg />,
  },
  {
    id: nanoid(),
    path: "/dashboard/Articles",
    name: "Articles",
    icon: <ArticlesSvg />,
  },
  {
    id: nanoid(),
    path: "/dashboard/Settings",
    name: "Settings",
    icon: <SettingsSvg />,
  },
  {
    id: nanoid(),
    path: "/dashboard/Subscription",
    name: "Subscription",
    icon: <SubscriptionSvg />,
  },
];
