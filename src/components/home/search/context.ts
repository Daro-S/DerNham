import { createFormContext } from "@mantine/form";
import { z } from "zod";

export const searchSchema = z.object({
  search: z.string(),
  guest: z.number().default(1),
  time: z.string(),
  date: z.string(),
});

type SearchFormValues = z.infer<typeof searchSchema>;

export const [SearchFormProvider, useSearchFormContext, useSearchForm] =
  createFormContext<SearchFormValues>();
