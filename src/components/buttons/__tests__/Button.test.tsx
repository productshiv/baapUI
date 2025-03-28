import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Button } from '../Button';
import { ThemeProvider } from '../../../design-systems/theme/ThemeProvider';

const TestWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ThemeProvider>{children}</ThemeProvider>
);

describe('Button', () => {
  it('renders correctly with title', () => {
    const { getByText } = render(
      <TestWrapper>
        <Button title="Test Button" onPress={() => {}} />
      </TestWrapper>
    );
    expect(getByText('Test Button')).toBeTruthy();
  });

  it('handles onPress events', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <TestWrapper>
        <Button title="Test Button" onPress={onPressMock} />
      </TestWrapper>
    );
    
    fireEvent.press(getByText('Test Button'));
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  it('renders in disabled state', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <TestWrapper>
        <Button title="Test Button" onPress={onPressMock} disabled />
      </TestWrapper>
    );
    
    fireEvent.press(getByText('Test Button'));
    expect(onPressMock).not.toHaveBeenCalled();
  });

  it('renders with different variants', () => {
    const variants = ['primary', 'secondary', 'outline', 'ghost'] as const;
    
    variants.forEach(variant => {
      const { getByText } = render(
        <TestWrapper>
          <Button title={`${variant} button`} onPress={() => {}} variant={variant} />
        </TestWrapper>
      );
      expect(getByText(`${variant} button`)).toBeTruthy();
    });
  });

  it('renders with different sizes', () => {
    const sizes = ['small', 'medium', 'large'] as const;
    
    sizes.forEach(size => {
      const { getByText } = render(
        <TestWrapper>
          <Button title={`${size} button`} onPress={() => {}} size={size} />
        </TestWrapper>
      );
      expect(getByText(`${size} button`)).toBeTruthy();
    });
  });

  it('renders in loading state', () => {
    const { getByTestId } = render(
      <TestWrapper>
        <Button title="Loading Button" onPress={() => {}} loading />
      </TestWrapper>
    );
    expect(getByTestId('button-loading-indicator')).toBeTruthy();
  });
}); 