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

class Icon {
  constructor(props) {
    this.props = props;
  }

  render() {
    const { fallback, Svg } = this.props;
    return (
      <Suspense fallback={fallback}>
        <Svg />
      </Suspense>
    );
  }
}

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
    icon: new Icon({
      fallback: <div>Loading...</div>,
      Svg: OverviewSvgLazy,
    }),
  },
  {
    id: nanoid(),
    path: `${DASHBOARD}${TICKETS}`,
    name: "Tickets",
    icon: new Icon({
      fallback: <div>Loading...</div>,
      Svg: TicketsSvgLazy,
    }),
  },
  {
    id: nanoid(),
    path: `${DASHBOARD}${IDEAS}`,
    name: "Ideas",
    icon: new Icon({
      fallback: <div>Loading...</div>,
      Svg: IdeasSvgLazy,
    }),
  },
  {
    id: nanoid(),
    path: `${DASHBOARD}${CONTACTS}`,
    name: "Contacts",
    icon: new Icon({
      fallback: <div>Loading...</div>,
      Svg: ContactsSvgLazy,
    }),
  },
  {
    id: nanoid(),
    path: `${DASHBOARD}${AGENTS}`,
    name: "Agents",
    icon: new Icon({
      fallback: <div>Loading...</div>,
      Svg: AgentsSvgLazy,
    }),
  },
  {
    id: nanoid(),
    path: `${DASHBOARD}${ARTICLES}`,
    name: "Articles",
    icon: new Icon({
      fallback: <div>Loading...</div>,
      Svg: ArticlesSvgLazy,
    }),
  },
  {
    id: nanoid(),
    path: `${DASHBOARD}${SETTINGS}`,
    name: "Settings",
    icon: new Icon({
      fallback: <div>Loading...</div>,
      Svg: SettingsSvgLazy,
    }),
  },
  {
    id: nanoid(),
    path: `${DASHBOARD}${SUBSCRIPTION}`,
    name: "Subscription",
    icon: new Icon({
      fallback: <div>Loading...</div>,
      Svg: SubscriptionSvgLazy,
    }),
  },
];
