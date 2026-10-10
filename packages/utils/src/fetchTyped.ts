import { z } from "zod";

export type FetchOptions<TBody> = Omit<RequestInit, "body" | "headers"> & {
  body?: TBody;
  headers?: Record<string, string>;
};

export async function fetchTyped<TResp, TBody = unknown>(
  input: RequestInfo | URL,
  options: FetchOptions<TBody> = {},
  schema?: z.ZodType<TResp>,
): Promise<TResp> {
  const { body, headers, ...rest } = options;
  const resp = await fetch(input, {
    ...rest,
    headers: { "Content-Type": "application/json", ...(headers ?? {}) },
    body: body ? JSON.stringify(body) : undefined,
  });
  if (!resp.ok) {
    const text = await resp.text().catch(() => "");
    throw new Error(`HTTP ${resp.status}: ${text}`);
  }
  const json = (await resp.json()) as unknown;
  if (schema) return schema.parse(json);
  return json as TResp;
}


