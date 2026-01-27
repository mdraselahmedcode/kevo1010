import { Image, useWindowDimensions } from 'react-native';

export default function HeroImage({ src }: { src: any }) {
  const { width } = useWindowDimensions();
  const heroWidth = Math.min(width * 0.7, 400);
  const heroHeight = heroWidth * (194 / 288);

  return (
    <Image source={src} style={{ width: heroWidth, height: heroHeight }} resizeMode="contain" />
  );
}
