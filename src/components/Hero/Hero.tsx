import React from 'react';
import { View, StyleSheet, ViewStyle } from '../../platform';
import { ThemeDesign } from '../../themes/types';
import { getNeumorphicStyles, NEUMORPHIC_COLORS } from '../../themes/utils/neumorphic';
import Typography from '../Typography/Typography';
import Button from '../Button/Button';
import Container from '../Container/Container';

export interface HeroAction {
  label: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
}

export interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  actions?: HeroAction[];
  style?: ViewStyle;
  design?: ThemeDesign;
  alignment?: 'left' | 'center' | 'right';
  backgroundColor?: string;
  backgroundImage?: string;
  overlay?: boolean;
  overlayOpacity?: number;
  minHeight?: number | string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  description,
  actions = [],
  style,
  design = 'flat',
  alignment = 'center',
  backgroundColor,
  backgroundImage,
  overlay = false,
  overlayOpacity = 0.5,
  minHeight = 400,
  maxWidth = 'lg',
}) => {
  const getTextAlign = () => {
    switch (alignment) {
      case 'left':
        return 'left';
      case 'right':
        return 'right';
      default:
        return 'center';
    }
  };

  const getJustifyContent = () => {
    switch (alignment) {
      case 'left':
        return 'flex-start';
      case 'right':
        return 'flex-end';
      default:
        return 'center';
    }
  };

  const getHeroStyles = (): ViewStyle[] => {
    const baseStyles: ViewStyle[] = [
      styles.container,
      {
        minHeight,
        justifyContent: 'center',
        alignItems: alignment === 'center' ? 'center' : 'stretch',
      },
    ];

    // Apply background
    if (backgroundImage) {
      baseStyles.push({
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      } as ViewStyle);
    } else if (backgroundColor) {
      baseStyles.push({ backgroundColor });
    } else if (design === 'neumorphic') {
      baseStyles.push({ backgroundColor: NEUMORPHIC_COLORS.background });
    }

    // Apply design-specific styles
    if (design === 'neumorphic') {
      baseStyles.push(
        ...getNeumorphicStyles({
          isPressed: false,
          customBackground: backgroundColor || NEUMORPHIC_COLORS.background,
        })
      );
    }

    if (style) {
      baseStyles.push(style);
    }

    return baseStyles;
  };

  const overlayStyles: ViewStyle = overlay
    ? {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})`,
      }
    : {};

  const contentStyles: ViewStyle[] = [
    styles.content,
    {
      alignItems: alignment === 'center' ? 'center' : alignment === 'right' ? 'flex-end' : 'flex-start',
    },
  ];

  const textAlign = getTextAlign();

  return (
    <View style={getHeroStyles()}>
      {overlay && <View style={overlayStyles} />}
      <Container maxWidth={maxWidth} style={styles.containerInner}>
        <View style={contentStyles}>
          {subtitle && (
            <Typography
              variant="overline"
              style={[styles.subtitle, { textAlign }]}
              design={design}
            >
              {subtitle}
            </Typography>
          )}
          
          <Typography
            variant="h1"
            style={[styles.title, { textAlign }]}
            design={design}
          >
            {title}
          </Typography>

          {description && (
            <Typography
              variant="body1"
              style={[styles.description, { textAlign }]}
              design={design}
            >
              {description}
            </Typography>
          )}

          {actions.length > 0 && (
            <View style={[styles.actions, { justifyContent: getJustifyContent() }]}>
              {actions.map((action, index) => (
                <Button
                  key={index}
                  onPress={action.onPress}
                  variant={action.variant || 'primary'}
                  design={design}
                  style={styles.actionButton}
                >
                  {action.label}
                </Button>
              ))}
            </View>
          )}
        </View>
      </Container>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'relative',
  } as ViewStyle,
  containerInner: {
    height: '100%',
    justifyContent: 'center',
  } as ViewStyle,
  content: {
    zIndex: 1,
    width: '100%',
  } as ViewStyle,
  subtitle: {
    marginBottom: 8,
    opacity: 0.8,
  } as ViewStyle,
  title: {
    marginBottom: 16,
    fontWeight: 'bold',
  } as ViewStyle,
  description: {
    marginBottom: 32,
    opacity: 0.9,
    maxWidth: 600,
    lineHeight: 24,
  } as ViewStyle,
  actions: {
    flexDirection: 'row',
    gap: 16,
    flexWrap: 'wrap',
    '@media (max-width: 768px)': {
      flexDirection: 'column',
      alignItems: 'stretch',
    },
  } as ViewStyle,
  actionButton: {
    '@media (max-width: 768px)': {
      marginBottom: 8,
    },
  } as ViewStyle,
});

export default Hero; 