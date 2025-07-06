import React, { useState } from 'react';
import { View, StyleSheet, ViewStyle, Pressable, Text } from '../../platform';
import { ThemeDesign } from '../../themes/types';
import { getNeumorphicStyles, NEUMORPHIC_COLORS } from '../../themes/utils/neumorphic';
import { getSkeuomorphicCardStyles, SKEUOMORPHIC_COLORS } from '../../themes/utils/skeuomorphic';
import { getGlassmorphicStyles, GLASSMORPHIC_COLORS } from '../../themes/utils/glassmorphic';
import { useThemeSafe } from '../../themes/ThemeContext';
import Typography from '../Typography/Typography';
import Button from '../Button/Button';
import Container from '../Container/Container';

export interface NavItem {
  label: string;
  onPress: () => void;
  active?: boolean;
}

export interface NavbarProps {
  logo?: React.ReactNode;
  logoText?: string;
  items?: NavItem[];
  actions?: React.ReactNode;
  style?: ViewStyle;
  design?: ThemeDesign;
  backgroundColor?: string;
  position?: 'static' | 'fixed' | 'sticky';
  shadow?: boolean;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

const Navbar: React.FC<NavbarProps> = ({
  logo,
  logoText,
  items = [],
  actions,
  style,
  design = 'flat',
  backgroundColor,
  position = 'static',
  shadow = true,
  maxWidth = 'xl',
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const themeContext = useThemeSafe();
  const activeDesign = design || themeContext?.design || 'flat';
  const themeMode = themeContext?.mode || 'light';

  const getNavbarStyles = (): ViewStyle[] => {
    const baseStyles: ViewStyle[] = [
      styles.navbar,
      position === 'fixed' && styles.fixed,
      position === 'sticky' && styles.sticky,
      shadow && styles.shadow,
    ];

    // Apply background
    if (backgroundColor) {
      baseStyles.push({ backgroundColor });
    } else if (activeDesign === 'neumorphic') {
      baseStyles.push({ backgroundColor: NEUMORPHIC_COLORS.background });
    } else if (activeDesign === 'glassmorphic') {
      // Glassmorphic background is handled in design-specific styles
    } else {
      baseStyles.push({ backgroundColor: '#ffffff' });
    }

    // Apply design-specific styles
    if (activeDesign === 'neumorphic') {
      baseStyles.push(
        ...getNeumorphicStyles({
          isPressed: false,
          customBackground: backgroundColor || NEUMORPHIC_COLORS.background,
        })
      );
    } else if (activeDesign === 'skeuomorphic') {
      const skeuomorphicStyles = getSkeuomorphicCardStyles(false);
      baseStyles.push(skeuomorphicStyles);
      if (backgroundColor) {
        baseStyles.push({ backgroundColor });
      }
    } else if (activeDesign === 'glassmorphic') {
      const glassmorphicStyles = getGlassmorphicStyles({
        intensity: 'medium',
        blur: 'medium',
        theme: themeMode,
      });
      baseStyles.push(glassmorphicStyles);
      baseStyles.push({
        borderBottomWidth: 1,
        borderBottomColor: themeMode === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)',
      });
    }

    if (style) {
      baseStyles.push(style);
    }

    return baseStyles;
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <View style={getNavbarStyles()}>
      <Container maxWidth={maxWidth} style={styles.container}>
        <View style={styles.content}>
          {/* Logo Section */}
          <View style={styles.logoSection}>
            {logo || (
              logoText && (
                <Typography variant="h6" style={styles.logoText} design={design}>
                  {logoText}
                </Typography>
              )
            )}
          </View>

          {/* Desktop Navigation */}
          <View style={styles.desktopNav}>
            {items.map((item, index) => (
              <Pressable
                key={index}
                onPress={item.onPress}
                style={[
                  styles.navItem,
                  item.active && styles.activeNavItem,
                ]}
              >
                <Typography
                  variant="body"
                  style={[
                    styles.navItemText,
                    item.active && styles.activeNavItemText,
                  ]}
                  design={design}
                >
                  {item.label}
                </Typography>
              </Pressable>
            ))}
          </View>

          {/* Actions Section */}
          <View style={styles.actionsSection}>
            {actions}
            
            {/* Mobile Menu Button */}
            <Pressable
              onPress={toggleMobileMenu}
              style={styles.mobileMenuButton}
            >
              <View style={styles.hamburger}>
                <View style={[styles.hamburgerLine, mobileMenuOpen && styles.hamburgerLineActive]} />
                <View style={[styles.hamburgerLine, mobileMenuOpen && styles.hamburgerLineActive]} />
                <View style={[styles.hamburgerLine, mobileMenuOpen && styles.hamburgerLineActive]} />
              </View>
            </Pressable>
          </View>
        </View>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <View style={styles.mobileNav}>
            {items.map((item, index) => (
              <Pressable
                key={index}
                onPress={() => {
                  item.onPress();
                  setMobileMenuOpen(false);
                }}
                style={[
                  styles.mobileNavItem,
                  item.active && styles.activeMobileNavItem,
                ]}
              >
                <Typography
                  variant="body"
                  style={[
                    styles.mobileNavItemText,
                    item.active && styles.activeMobileNavItemText,
                  ]}
                  design={design}
                >
                  {item.label}
                </Typography>
              </Pressable>
            ))}
          </View>
        )}
      </Container>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  } as ViewStyle,
  fixed: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
  } as ViewStyle,
  sticky: {
    position: 'sticky',
    top: 0,
    zIndex: 100,
  } as ViewStyle,
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  } as ViewStyle,
  container: {
    paddingVertical: 12,
  } as ViewStyle,
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  } as ViewStyle,
  logoSection: {
    flex: 1,
  } as ViewStyle,
  logoText: {
    fontWeight: 'bold',
  } as ViewStyle,
  desktopNav: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 24,
    '@media (max-width: 768px)': {
      display: 'none',
    },
  } as ViewStyle,
  navItem: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
  } as ViewStyle,
  activeNavItem: {
    backgroundColor: 'rgba(0, 123, 255, 0.1)',
  } as ViewStyle,
  navItemText: {
    color: '#333333',
  } as ViewStyle,
  activeNavItemText: {
    color: '#007bff',
    fontWeight: '600',
  } as ViewStyle,
  actionsSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  } as ViewStyle,
  mobileMenuButton: {
    padding: 8,
    '@media (min-width: 769px)': {
      display: 'none',
    },
  } as ViewStyle,
  hamburger: {
    width: 24,
    height: 18,
    justifyContent: 'space-between',
  } as ViewStyle,
  hamburgerLine: {
    height: 2,
    backgroundColor: '#333333',
    borderRadius: 1,
  } as ViewStyle,
  hamburgerLineActive: {
    backgroundColor: '#007bff',
  } as ViewStyle,
  mobileNav: {
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5',
    '@media (min-width: 769px)': {
      display: 'none',
    },
  } as ViewStyle,
  mobileNavItem: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 4,
  } as ViewStyle,
  activeMobileNavItem: {
    backgroundColor: 'rgba(0, 123, 255, 0.1)',
  } as ViewStyle,
  mobileNavItemText: {
    color: '#333333',
    fontSize: 16,
  } as ViewStyle,
  activeMobileNavItemText: {
    color: '#007bff',
    fontWeight: '600',
  } as ViewStyle,
});

export default Navbar;