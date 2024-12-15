import { render, screen } from '@/test/utils';
import { UserNav } from '../UserNav';

describe('UserNav', () => {
  it('renders user information correctly', () => {
    render(<UserNav />);
    
    expect(screen.getByText('Olivia Rhye')).toBeInTheDocument();
    expect(screen.getByText('olivia@untitledui.com')).toBeInTheDocument();
  });

  it('renders avatar with fallback', () => {
    render(<UserNav />);
    
    const avatar = screen.getByRole('img');
    expect(avatar).toBeInTheDocument();
  });
});