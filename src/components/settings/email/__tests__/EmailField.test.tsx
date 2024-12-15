import { render, screen } from '@/test/utils';
import { EmailField } from '../EmailField';

describe('EmailField', () => {
  const defaultProps = {
    label: 'Email Label',
    value: 'test@example.com',
  };

  it('renders with required props', () => {
    render(<EmailField {...defaultProps} />);
    
    expect(screen.getByText('Email Label')).toBeInTheDocument();
    expect(screen.getByDisplayValue('test@example.com')).toBeInTheDocument();
  });

  it('renders description when provided', () => {
    render(<EmailField {...defaultProps} description="Test description" />);
    
    expect(screen.getByText('Test description')).toBeInTheDocument();
  });
});