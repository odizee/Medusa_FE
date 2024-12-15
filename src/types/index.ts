export interface UserRole {
  id: string;
  name: string;
  type: 'DEFAULT' | 'CUSTOM' | 'SYSTEM-CUSTOM';
  dateCreated: string;
  status: 'Active' | 'Inactive';
  users: {
    id: string;
    name: string;
    avatar: string;
  }[];
}

export interface ActiveRole {
  name: string;
  lastActive: string;
  isDefault?: boolean;
}