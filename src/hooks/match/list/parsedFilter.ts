// utils/filters.ts
import { ParamsMatch, ParamsSchemaMatch } from "@/schemazod/match/paramsList";

// utils/filters.ts
export function parseFiltersMatch(query: Record<string, unknown>): ParamsMatch {
  const parsed = ParamsSchemaMatch.safeParse({
    status: typeof query.status === "string" ? query.status : undefined,
    stage: typeof query.stage === "string" ? query.stage : undefined,
    timeName: typeof query.timeName === "string" ? query.timeName : undefined,
  });

  if (!parsed.success) return {};

  // Remove chaves undefined antes de enviar para a API
  const filters: Record<string, string> = {};
  Object.entries(parsed.data).forEach(([key, value]) => {
    if (value !== undefined && value !== null) filters[key] = value;
  });

  return filters as ParamsMatch;
}

