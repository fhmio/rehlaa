import { z } from "zod";
import { fetchTyped } from "@visa/utils";
import { ListServicesResponse } from "./schemas";

export function createApiClient(baseUrl: string) {
  const api = {
    listServices: () =>
      fetchTyped(`${baseUrl}/api/services`, { method: "GET" }, ListServicesResponse),
  };

  return api;
}

export type ApiClient = ReturnType<typeof createApiClient>;


