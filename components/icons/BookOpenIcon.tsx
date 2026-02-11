import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
import { StyleProp, ViewStyle } from 'react-native';

type IconProps = SvgProps & {
  size?: number;
  color?: string;
  style?: StyleProp<ViewStyle>;
};

export function BookOpenIcon({ size = 24, color = '#000', style, ...props }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 10 10" fill="none" style={style} {...props}>
      <Path
        d="M7.51699 5.64615C7.34199 5.81699 7.24199 6.06282 7.26699 6.32532C7.30449 6.77532 7.71699 7.10449 8.16699 7.10449H8.95866V7.60032C8.95866 8.46282 8.25449 9.16699 7.39199 9.16699H2.60866C1.74616 9.16699 1.04199 8.46282 1.04199 7.60032V4.79616C1.04199 3.93366 1.74616 3.22949 2.60866 3.22949H7.39199C8.25449 3.22949 8.95866 3.93366 8.95866 4.79616V5.39616H8.11699C7.88366 5.39616 7.67116 5.48782 7.51699 5.64615Z"
        stroke={color}
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M1.04199 5.17104V3.26689C1.04199 2.77106 1.34616 2.32937 1.80866 2.15437L5.11699 0.904375C5.63366 0.708542 6.18783 1.09189 6.18783 1.64605V3.22938"
        stroke={color}
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.39983 5.82098V6.67934C9.39983 6.9085 9.2165 7.09599 8.98316 7.10432H8.1665C7.7165 7.10432 7.304 6.77515 7.2665 6.32515C7.2415 6.06265 7.3415 5.81682 7.5165 5.64599C7.67066 5.48765 7.88316 5.396 8.1165 5.396H8.98316C9.2165 5.40433 9.39983 5.59181 9.39983 5.82098Z"
        stroke={color}
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2.91699 5H5.83366"
        stroke={color}
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
