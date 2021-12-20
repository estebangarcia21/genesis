import { Container } from './Container';
import { render } from '@testing-library/react';

describe('Container', () => {
  it('renders its children', () => {
    const { getByText } = render(
      <Container>
        <p>Hello world!</p>
      </Container>
    );

    const child = getByText(/hello world/i);

    expect(child).toBeInTheDocument();
  });

  it('sets the parent tag', () => {
    const { getByText } = render(
      <Container tag="section">
        <p>Hello world!</p>
      </Container>
    );

    const child = getByText(/hello world/i);

    expect(child.parentElement?.tagName).toMatch(/section/i);
  });

  it('wraps the container with a classname', () => {
    const { container } = render(
      <Container className="some-class">
        <p>Hello world!</p>
      </Container>
    );

    expect(container.tagName).toMatch(/div/i);
    expect(container.firstChild).toHaveClass('some-class');
  });
});
