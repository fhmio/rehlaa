import { z } from "zod";

export const ServiceSchema = z.object({
  id: z.string(),
  slug: z.string(),
  title: z.object({ ar: z.string(), en: z.string() }),
  country: z.string(),
  priceFrom: z.number(),
  duration: z.string(),
  requirements: z.array(z.string()).default([]),
  active: z.boolean().default(true),
  media: z.array(
    z.object({ id: z.string(), url: z.string().url(), type: z.string(), sort: z.number() }),
  ),
});

export const ApplicationSchema = z.object({
  id: z.string(),
  userId: z.string().nullable().optional(),
  serviceId: z.string(),
  formData: z.record(z.any()),
  status: z.enum(["draft", "submitted", "paid", "review", "approved", "rejected"]).default("draft"),
  createdAt: z.string(),
});

export type Service = z.infer<typeof ServiceSchema>;
export type Application = z.infer<typeof ApplicationSchema>;

export const ListServicesResponse = z.object({ services: z.array(ServiceSchema) });
export type ListServicesResponse = z.infer<typeof ListServicesResponse>;


