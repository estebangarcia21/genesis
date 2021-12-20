import { ContentContainer } from './ContentContainer';
import { render } from '@testing-library/react';

describe('ContentContainer', () => {
  it('renders its children', () => {
    const { getByText } = render(
      <ContentContainer>
        <p>Hello world!</p>
      </ContentContainer>
    );

    const child = getByText(/hello world/i);

    expect(child).toBeInTheDocument();
  });

  it('sets the parent tag', () => {
    const { getByText } = render(
      <ContentContainer tag="section">
        <p>Hello world!</p>
      </ContentContainer>
    );

    const child = getByText(/hello world/i);

    expect(child.parentElement?.tagName).toMatch(/section/i);
  });

  it('wraps the container with a classname', () => {
    const { container } = render(
      <ContentContainer className="some-class">
        <p>Hello world!</p>
      </ContentContainer>
    );

    expect(container.tagName).toMatch(/div/i);
    expect(container.firstChild).toHaveClass('some-class');
  });
});
