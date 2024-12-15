import { render, screen } from '@/test/utils';
import { ActiveRoleCard } from '../ActiveRoleCard';
import type { ActiveRole } from '@/types';

describe('ActiveRoleCard', () => {
  const mockRole: ActiveRole = {
    name: 'Admin',
    lastActive: '01/2024',
    isDefault: true,
  };

  it('renders role information correctly', () => {
    render(<ActiveRoleCard role={mockRole} />);
    
    expect(screen.getByText('Admin')).toBeInTheDocument();
    expect(screen.getByText('Last active 01/2024')).toBeInTheDocument();
  });

  it('shows default badge when role is default', () => {
    render(<ActiveRoleCard role={mockRole} />);
    
    expect(screen.getByText('Default')).toBeInTheDocument();
  });

  it('does not show default badge when role is not default', () => {
    const nonDefaultRole = { ...mockRole, isDefault: false };
    render(<ActiveRoleCard role={nonDefaultRole} />);
    
    expect(screen.queryByText('Default')).not.toBeInTheDocument();
  });
});