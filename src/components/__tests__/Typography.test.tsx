import React from 'react';
import { render } from '@testing-library/react-native';
import Typography from '../Typography/Typography';

describe('Typography', () => {
  it('renders correctly with default props', () => {
    const { getByText } = render(<Typography>Test Text</Typography>);
    expect(getByText('Test Text')).toBeTruthy();
  });

  it('applies variant styles correctly', () => {
    const { getByText } = render(<Typography variant="h1">Heading 1</Typography>);
    const element = getByText('Heading 1');
    expect(element.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          fontSize: 32,
          fontWeight: '700',
        }),
      ])
    );
  });

  it('applies custom color correctly', () => {
    const testColor = '#FF0000';
    const { getByText } = render(<Typography color={testColor}>Colored Text</Typography>);
    const element = getByText('Colored Text');
    expect(element.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          color: testColor,
        }),
      ])
    );
  });

  it('applies text alignment correctly', () => {
    const { getByText } = render(<Typography align="center">Centered Text</Typography>);
    const element = getByText('Centered Text');
    const styles = element.props.style;

    // Find the alignment style in the flattened style array
    const alignStyle = styles.find((style: any) => style.textAlign === 'center');
    expect(alignStyle).toBeTruthy();
  });

  it('applies custom styles correctly', () => {
    const customStyle = { marginTop: 20 };
    const { getByText } = render(<Typography style={customStyle}>Custom Styled Text</Typography>);
    const element = getByText('Custom Styled Text');
    const styles = element.props.style;

    // Find the custom style in the flattened style array
    const appliedCustomStyle = styles.find((style: any) => style.marginTop === 20);
    expect(appliedCustomStyle).toBeTruthy();
  });

  it('handles numberOfLines prop correctly', () => {
    const { getByText } = render(<Typography numberOfLines={2}>Multi-line text</Typography>);
    const element = getByText('Multi-line text');
    expect(element.props.numberOfLines).toBe(2);
  });

  it('handles adjustsFontSizeToFit prop correctly', () => {
    const { getByText } = render(<Typography adjustsFontSizeToFit>Auto-sizing text</Typography>);
    const element = getByText('Auto-sizing text');
    expect(element.props.adjustsFontSizeToFit).toBe(true);
  });
});
