import { lazy } from "react";

function createLazySvgComponent(svg) {
  return lazy(() => Promise.resolve({ default: svg }));
}

export const LogoSvgLazy = createLazySvgComponent(
  require("./svg/logo.svg").ReactComponent
);
export const OverviewSvgLazy = createLazySvgComponent(
  require("./svg/overview.svg").ReactComponent
);
export const TicketsSvgLazy = createLazySvgComponent(
  require("./svg/tickets.svg").ReactComponent
);
export const IdeasSvgLazy = createLazySvgComponent(
  require("./svg/ideas.svg").ReactComponent
);
export const ContactsSvgLazy = createLazySvgComponent(
  require("./svg/contacts.svg").ReactComponent
);
export const AgentsSvgLazy = createLazySvgComponent(
  require("./svg/agents.svg").ReactComponent
);
export const ArticlesSvgLazy = createLazySvgComponent(
  require("./svg/articles.svg").ReactComponent
);
export const SettingsSvgLazy = createLazySvgComponent(
  require("./svg/setting.svg").ReactComponent
);
export const SubscriptionSvgLazy = createLazySvgComponent(
  require("./svg/subscription.svg").ReactComponent
);
