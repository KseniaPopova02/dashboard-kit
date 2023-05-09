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
import { ReactComponent as ArticlesSvg } from "../../assets/svg/articles.svg";
import { ReactComponent as SettingsSvg } from "../../assets/svg/setting.svg";
import { ReactComponent as SubscriptionSvg } from "../../assets/svg/subscription.svg";
import { nanoid } from "nanoid";

export const menuItems = [
  {
    id: nanoid(),
    path: "/dashboard/Overview",
    name: "Overview",
    icon: (
      <Suspense fallback={<div>Loading...</div>}>
        <OverviewSvgLazy />
      </Suspense>
    ),
  },
  {
    id: nanoid(),
    path: "/dashboard/Tickets",
    name: "Tickets",
    icon: (
      <Suspense fallback={<div>Loading...</div>}>
        <TicketsSvgLazy />
      </Suspense>
    ),
  },
  {
    id: nanoid(),
    path: "/dashboard/Ideas",
    name: "Ideas",
    icon: (
      <Suspense fallback={<div>Loading...</div>}>
        <IdeasSvgLazy />
      </Suspense>
    ),
  },
  {
    id: nanoid(),
    path: "/dashboard/Contacts",
    name: "Contacts",
    icon: (
      <Suspense fallback={<div>Loading...</div>}>
        <ContactsSvgLazy />
      </Suspense>
    ),
  },
  {
    id: nanoid(),
    path: "/dashboard/Agents",
    name: "Agents",
    icon: (
      <Suspense fallback={<div>Loading...</div>}>
        <AgentsSvgLazy />
      </Suspense>
    ),
  },
  {
    id: nanoid(),
    path: "/dashboard/Articles",
    name: "Articles",
    icon: (
      <Suspense fallback={<div>Loading...</div>}>
        <ArticlesSvgLazy />
      </Suspense>
    ),
  },
  {
    id: nanoid(),
    path: "/dashboard/Settings",
    name: "Settings",
    icon: (
      <Suspense fallback={<div>Loading...</div>}>
        <SettingsSvgLazy />
      </Suspense>
    ),
  },
  {
    id: nanoid(),
    path: "/dashboard/Subscription",
    name: "Subscription",
    icon: (
      <Suspense fallback={<div>Loading...</div>}>
        <SubscriptionSvgLazy />
      </Suspense>
    ),
  },
];
