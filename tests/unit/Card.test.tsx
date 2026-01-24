import { render, screen } from '@testing-library/react';
import Card from '@/components/ui/Card';

describe('Card Component', () => {
  it('renders children correctly', () => {
    render(
      <Card>
        <p>Card content</p>
      </Card>
    );
    expect(screen.getByText('Card content')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(
      <Card className="custom-class">
        <p>Content</p>
      </Card>
    );
    const card = screen.getByText('Content').parentElement;
    expect(card).toHaveClass('custom-class');
  });

  it('has default styling classes', () => {
    render(
      <Card>
        <p>Content</p>
      </Card>
    );
    const card = screen.getByText('Content').parentElement;
    expect(card).toHaveClass('bg-white', 'rounded-xl', 'shadow-sm');
  });
});
