import ServiceCall from "./service-call";
import { home } from "./service-routes.json";

export async function GetMenuListApi() {
  const response = await ServiceCall({
    ...home.menuList
  });

  return response;
}
export async function GetIconsListApi() {
  const response = await ServiceCall({
    ...home.Highlights
  });

  return response;
}

export async function GetPageContentApi() {
  const response = await ServiceCall({
    ...home.content
  });
  return response;
}

export async function GetActivityMetrics() {
  const response = await ServiceCall({
    ...home.ActivityMetrics
  });

  return response;
}
export async function GetSubscriptionApi() {
  const response = await ServiceCall({
    ...home.subscription
  });

  return response;
}
export async function GetSubscriptionListApi() {
  const response = await ServiceCall({
    ...home.Subscription1
  });

  return response;
}


export async function GetTestmonials() {
  const response = await ServiceCall({
    ...home.testmonial
  });

  return response;
}
