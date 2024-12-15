import { render, screen } from '@/test/utils';
import RolesTable from '../RolesTable';
import type { UserRole } from '@/types';

describe('RolesTable', () => {
  const mockRoles: UserRole[] = [
    {
      id: '1',
      name: 'Admin',
      type: 'DEFAULT',
      dateCreated: 'Jan 1, 2024',
      status: 'Active',
      users: [
        {
          id: '1',
          name: 'User 1',
          avatar: 'https://example.com/avatar1.jpg',
        },
      ],
    },
  ];

  it('renders table headers correctly', () => {
    render(<RolesTable roles={mockRoles} />);
    
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Type')).toBeInTheDocument();
    expect(screen.getByText('Date created')).toBeInTheDocument();
    expect(screen.getByText('Status')).toBeInTheDocument();
    expect(screen.getByText('Role users')).toBeInTheDocument();
  });

  it('renders role data correctly', () => {
    render(<RolesTable roles={mockRoles} />);
    
    expect(screen.getByText('Admin')).toBeInTheDocument();
    expect(screen.getByText('DEFAULT')).toBeInTheDocument();
    expect(screen.getByText('Jan 1, 2024')).toBeInTheDocument();
    expect(screen.getByText('Active')).toBeInTheDocument();
  });

  it('renders download button', () => {
    render(<RolesTable roles={mockRoles} />);
    
    expect(screen.getByText('Download all')).toBeInTheDocument();
  });
});