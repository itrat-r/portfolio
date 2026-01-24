import { render, screen } from '@testing-library/react';
import SectionTitle from '@/components/ui/SectionTitle';

describe('SectionTitle Component', () => {
  it('renders title correctly', () => {
    render(<SectionTitle title="Test Title" />);
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Test Title');
  });

  it('renders subtitle when provided', () => {
    render(<SectionTitle title="Title" subtitle="Subtitle text" />);
    expect(screen.getByText('Subtitle text')).toBeInTheDocument();
  });

  it('does not render subtitle when not provided', () => {
    render(<SectionTitle title="Title Only" />);
    expect(screen.queryByText(/subtitle/i)).not.toBeInTheDocument();
  });

  it('centers content by default', () => {
    render(<SectionTitle title="Centered" />);
    const container = screen.getByRole('heading').parentElement;
    expect(container).toHaveClass('text-center');
  });

  it('does not center content when centered is false', () => {
    render(<SectionTitle title="Left Aligned" centered={false} />);
    const container = screen.getByRole('heading').parentElement;
    expect(container).not.toHaveClass('text-center');
  });
});
