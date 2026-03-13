import Image, { ImageProps } from 'next/image';

type LogoProps = Omit<ImageProps, 'src' | 'alt'>;

const Logo = ({ width = 100, height = 50, ...props }: LogoProps) => {
  return (
    <Image
      src="/logo.png"
      alt="Logo"
      width={width}
      height={height}
      priority
      {...props}
    />
  );
};

export default Logo;
