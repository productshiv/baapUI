import React from 'react';
import { View, StyleSheet, ViewStyle, Pressable } from '../../platform';
import { ThemeDesign } from '../../themes/types';
import { getNeumorphicStyles, NEUMORPHIC_COLORS } from '../../themes/utils/neumorphic';
import { getSkeuomorphicCardStyles, SKEUOMORPHIC_COLORS } from '../../themes/utils/skeuomorphic';
import Typography from '../Typography/Typography';
import Container from '../Container/Container';

export interface FooterLink {
  label: string;
  onPress: () => void;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface FooterProps {
  sections?: FooterSection[];
  copyright?: string;
  logo?: React.ReactNode;
  logoText?: string;
  socialLinks?: React.ReactNode;
  style?: ViewStyle;
  design?: ThemeDesign;
  backgroundColor?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

const Footer: React.FC<FooterProps> = ({
  sections = [],
  copyright,
  logo,
  logoText,
  socialLinks,
  style,
  design = 'flat',
  backgroundColor,
  maxWidth = 'xl',
}) => {
  const getFooterStyles = (): ViewStyle[] => {
    const baseStyles: ViewStyle[] = [
      styles.footer,
    ];

    // Apply background
    if (backgroundColor) {
      baseStyles.push({ backgroundColor });
    } else if (design === 'neumorphic') {
      baseStyles.push({ backgroundColor: NEUMORPHIC_COLORS.background });
    } else {
      baseStyles.push({ backgroundColor: '#f8f9fa' });
    }

    // Apply design-specific styles
    if (design === 'neumorphic') {
      baseStyles.push(
        ...getNeumorphicStyles({
          isPressed: false,
          customBackground: backgroundColor || NEUMORPHIC_COLORS.background,
        })
      );
    } else if (design === 'skeuomorphic') {
      const skeuomorphicStyles = getSkeuomorphicCardStyles(false);
      baseStyles.push(skeuomorphicStyles);
      if (backgroundColor) {
        baseStyles.push({ backgroundColor });
      }
    }

    if (style) {
      baseStyles.push(style);
    }

    return baseStyles;
  };

  const currentYear = new Date().getFullYear();
  const defaultCopyright = `© ${currentYear} All rights reserved.`;

  return (
    <View style={getFooterStyles()}>
      <Container maxWidth={maxWidth} style={styles.container}>
        {/* Main Footer Content */}
        {(sections.length > 0 || logo || logoText || socialLinks) && (
          <View style={styles.mainContent}>
            {/* Logo/Brand Section */}
            {(logo || logoText) && (
              <View style={styles.brandSection}>
                {logo || (
                  logoText && (
                    <Typography variant="h6" style={styles.logoText} design={design}>
                      {logoText}
                    </Typography>
                  )
                )}
                {socialLinks && (
                  <View style={styles.socialLinks}>
                    {socialLinks}
                  </View>
                )}
              </View>
            )}

            {/* Links Sections */}
            {sections.length > 0 && (
              <View style={styles.linksContainer}>
                {sections.map((section, sectionIndex) => (
                  <View key={sectionIndex} style={styles.linkSection}>
                    <Typography
                      variant="body2"
                      style={styles.sectionTitle}
                      design={design}
                    >
                      {section.title}
                    </Typography>
                    <View style={styles.linksList}>
                      {section.links.map((link, linkIndex) => (
                        <Pressable
                          key={linkIndex}
                          onPress={link.onPress}
                          style={styles.linkItem}
                        >
                          <Typography
                            variant="body2"
                            style={styles.linkText}
                            design={design}
                          >
                            {link.label}
                          </Typography>
                        </Pressable>
                      ))}
                    </View>
                  </View>
                ))}
              </View>
            )}
          </View>
        )}

        {/* Copyright Section */}
        <View style={styles.copyrightSection}>
          <View style={styles.divider} />
          <Typography
            variant="caption"
            style={styles.copyrightText}
            design={design}
          >
            {copyright || defaultCopyright}
          </Typography>
        </View>
      </Container>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    width: '100%',
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5',
  } as ViewStyle,
  container: {
    paddingVertical: 40,
  } as ViewStyle,
  mainContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 32,
    '@media (max-width: 768px)': {
      flexDirection: 'column',
      gap: 32,
    },
  } as ViewStyle,
  brandSection: {
    flex: 1,
    maxWidth: 300,
    '@media (max-width: 768px)': {
      maxWidth: '100%',
    },
  } as ViewStyle,
  logoText: {
    fontWeight: 'bold',
    marginBottom: 16,
  } as ViewStyle,
  socialLinks: {
    flexDirection: 'row',
    gap: 12,
  } as ViewStyle,
  linksContainer: {
    flexDirection: 'row',
    gap: 48,
    '@media (max-width: 768px)': {
      flexDirection: 'column',
      gap: 24,
    },
  } as ViewStyle,
  linkSection: {
    minWidth: 120,
  } as ViewStyle,
  sectionTitle: {
    fontWeight: '600',
    marginBottom: 16,
    color: '#333333',
  } as ViewStyle,
  linksList: {
    gap: 8,
  } as ViewStyle,
  linkItem: {
    paddingVertical: 4,
  } as ViewStyle,
  linkText: {
    color: '#666666',
    ':hover': {
      color: '#007bff',
    },
  } as ViewStyle,
  copyrightSection: {
    alignItems: 'center',
  } as ViewStyle,
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#E5E5E5',
    marginBottom: 24,
  } as ViewStyle,
  copyrightText: {
    color: '#666666',
    textAlign: 'center',
  } as ViewStyle,
});

export default Footer;