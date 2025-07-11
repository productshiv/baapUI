/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Typography from '../Typography/Typography';

describe('Typography', () => {
  it('renders correctly with default props', () => {
    const { getByText } = render(<Typography>Test Text</Typography>);
    expect(getByText('Test Text')).toBeTruthy();
  });

  it('applies variant styles correctly', () => {
    const { getByText } = render(<Typography variant="h1">Heading 1</Typography>);
    const element = getByText('Heading 1');
    expect(element).toHaveStyle({ fontSize: '32px', fontWeight: '700' });
  });

  it('applies custom color correctly', () => {
    const testColor = '#FF0000';
    const { getByText } = render(<Typography color={testColor}>Colored Text</Typography>);
    const element = getByText('Colored Text');
    expect(element).toHaveStyle({ color: testColor });
  });

  it('applies text alignment correctly', () => {
    const { getByText } = render(<Typography align="center">Centered Text</Typography>);
    const element = getByText('Centered Text');
    expect(element).toHaveStyle({ textAlign: 'center' });
  });

  it('applies custom styles correctly', () => {
    const customStyle = { marginTop: 20 };
    const { getByText } = render(<Typography style={customStyle}>Custom Styled Text</Typography>);
    const element = getByText('Custom Styled Text');
    expect(element).toHaveStyle({ marginTop: '20px' });
  });

  it('renders with basic text content', () => {
    const { getByText } = render(<Typography numberOfLines={2}>Multi-line text</Typography>);
    const element = getByText('Multi-line text');
    expect(element).toBeInTheDocument();
  });

  it('renders with auto-sizing text', () => {
    const { getByText } = render(<Typography adjustsFontSizeToFit>Auto-sizing text</Typography>);
    const element = getByText('Auto-sizing text');
    expect(element).toBeInTheDocument();
  });
});
