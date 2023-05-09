import React, { Suspense } from "react";
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
    icon: (
      <Suspense fallback={<div>Loading...</div>}>
        <OverviewSvgLazy />
      </Suspense>
    ),
  },
  {
    id: nanoid(),
    path: `${DASHBOARD}${TICKETS}`,
    name: "Tickets",
    icon: (
      <Suspense fallback={<div>Loading...</div>}>
        <TicketsSvgLazy />
      </Suspense>
    ),
  },
  {
    id: nanoid(),
    path: `${DASHBOARD}${IDEAS}`,
    name: "Ideas",
    icon: (
      <Suspense fallback={<div>Loading...</div>}>
        <IdeasSvgLazy />
      </Suspense>
    ),
  },
  {
    id: nanoid(),
    path: `${DASHBOARD}${CONTACTS}`,
    name: "Contacts",
    icon: (
      <Suspense fallback={<div>Loading...</div>}>
        <ContactsSvgLazy />
      </Suspense>
    ),
  },
  {
    id: nanoid(),
    path: `${DASHBOARD}${AGENTS}`,
    name: "Agents",
    icon: (
      <Suspense fallback={<div>Loading...</div>}>
        <AgentsSvgLazy />
      </Suspense>
    ),
  },
  {
    id: nanoid(),
    path: `${DASHBOARD}${ARTICLES}`,
    name: "Articles",
    icon: (
      <Suspense fallback={<div>Loading...</div>}>
        <ArticlesSvgLazy />
      </Suspense>
    ),
  },
  {
    id: nanoid(),
    path: `${DASHBOARD}${SETTINGS}`,
    name: "Settings",
    icon: (
      <Suspense fallback={<div>Loading...</div>}>
        <SettingsSvgLazy />
      </Suspense>
    ),
  },
  {
    id: nanoid(),
    path: `${DASHBOARD}${SUBSCRIPTION}`,
    name: "Subscription",
    icon: (
      <Suspense fallback={<div>Loading...</div>}>
        <SubscriptionSvgLazy />
      </Suspense>
    ),
  },
];
