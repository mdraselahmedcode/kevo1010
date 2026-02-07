import React from 'react';
import { ViewStyle, StyleProp, ColorValue } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

type GradientBoxProps = {
    size: number;
    colors: readonly [ColorValue, ColorValue, ...ColorValue[]];
    borderColor?: string;
    borderRadius?: number;
    children?: React.ReactNode;
    style?: StyleProp<ViewStyle>;
};

export default function GradientBox({
    size,
    colors,
    borderColor = '#2C80EC',
    borderRadius = 8,
    children,
    style,
}: GradientBoxProps) {
    return (
        <LinearGradient
            colors={colors}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            style={[
                {
                    height: size,
                    width: size,
                    borderRadius,
                    borderWidth: 1,
                    borderColor,
                    position: 'relative',

                    // inset highlight simulation
                    shadowColor: '#FFFFFF',
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.4,
                    shadowRadius: 0,
                },
                style,
            ]}
        >
            {children}
        </LinearGradient>
    );
}
