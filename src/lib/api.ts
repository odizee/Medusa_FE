import axios from "axios";
import type { UserRole, ActiveRole } from "@/types";

const api = axios.create({
  baseURL: "https://medusa-be-eosin.vercel.app/api",
});

export async function getRoles(): Promise<UserRole[]> {
  const { data } = await api.get<UserRole[]>("/roles");
  return data;
}

export async function getActiveRoles(): Promise<ActiveRole[]> {
  const roles = await getRoles();
  return roles
    .filter((role) => role.status === "Active")
    .map((role) => ({
      name: role.name,
      lastActive: role.dateCreated,
      isDefault: role.type === "DEFAULT",
    }));
}
