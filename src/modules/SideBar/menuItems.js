import {
  OverviewSvgLazy,
  TicketsSvgLazy,
  IdeasSvgLazy,
  ContactsSvgLazy,
  AgentsSvgLazy,
  ArticlesSvgLazy,
  SettingsSvgLazy,
  SubscriptionSvgLazy,
} from "../../assets/LogoSvgLazy";
import { ROUTES } from "../../Routes/routes";
import { nanoid } from "nanoid";

const {
  DASHBOARD,
  OVERVIEW,
  TICKETS,
  IDEAS,
  CONTACTS,
  AGENTS,
  ARTICLES,
  SETTINGS,
  SUBSCRIPTION,
} = ROUTES;

export const menuItems = [
  {
    id: nanoid(),
    path: `${DASHBOARD}${OVERVIEW}`,
    name: "Overview",
    icon: OverviewSvgLazy,
  },
  {
    id: nanoid(),
    path: `${DASHBOARD}${TICKETS}`,
    name: "Tickets",
    icon: TicketsSvgLazy,
  },
  {
    id: nanoid(),
    path: `${DASHBOARD}${IDEAS}`,
    name: "Ideas",
    icon: IdeasSvgLazy,
  },
  {
    id: nanoid(),
    path: `${DASHBOARD}${CONTACTS}`,
    name: "Contacts",
    icon: ContactsSvgLazy,
  },
  {
    id: nanoid(),
    path: `${DASHBOARD}${AGENTS}`,
    name: "Agents",
    icon: AgentsSvgLazy,
  },
  {
    id: nanoid(),
    path: `${DASHBOARD}${ARTICLES}`,
    name: "Articles",
    icon: ArticlesSvgLazy,
  },
  {
    id: nanoid(),
    path: `${DASHBOARD}${SETTINGS}`,
    name: "Settings",
    icon: SettingsSvgLazy,
  },
  {
    id: nanoid(),
    path: `${DASHBOARD}${SUBSCRIPTION}`,
    name: "Subscription",
    icon: SubscriptionSvgLazy,
  },
];
