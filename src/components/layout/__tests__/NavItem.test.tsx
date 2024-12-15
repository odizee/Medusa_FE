import { render, screen } from '@/test/utils';
import { NavItem } from '../NavItem';
import { Home } from 'lucide-react';

describe('NavItem', () => {
  const defaultProps = {
    icon: Home,
    label: 'Home',
  };

  it('renders correctly with basic props', () => {
    render(<NavItem {...defaultProps} />);
    
    expect(screen.getByText('Home')).toBeInTheDocument();
  });

  it('displays count when provided', () => {
    render(<NavItem {...defaultProps} count="5" />);
    
    expect(screen.getByText('5')).toBeInTheDocument();
  });

  it('applies active styles when isActive is true', () => {
    const { container } = render(<NavItem {...defaultProps} isActive />);
    
    expect(container.firstChild).toHaveClass('bg-gray-100');
  });
});