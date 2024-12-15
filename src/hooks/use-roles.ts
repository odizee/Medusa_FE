import { useQuery } from "@tanstack/react-query";
import { getRoles, getActiveRoles } from "@/lib/api";

export function useRoles() {
  return useQuery({
    queryKey: ["roles"],
    queryFn: getRoles,
  });
}

export function useActiveRoles() {
  return useQuery({
    queryKey: ["activeRoles"],
    queryFn: getActiveRoles,
  });
}
