import { Box } from '@chakra-ui/react';

interface SimpleAvatarProps {
  name: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  bg?: string;
  color?: string;
}

const sizeMap = {
  xs: { w: 6, h: 6, fontSize: 'xs' },
  sm: { w: 8, h: 8, fontSize: 'sm' },
  md: { w: 10, h: 10, fontSize: 'md' },
  lg: { w: 12, h: 12, fontSize: 'lg' },
  xl: { w: 16, h: 16, fontSize: 'xl' },
  '2xl': { w: 24, h: 24, fontSize: '2xl' },
};

function getInitials(name: string): string {
  return name
    .split(' ')
    .map(part => part[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

export function SimpleAvatar({ name, size = 'md', bg = 'brand.gold', color = 'brand.black' }: SimpleAvatarProps) {
  const dimensions = sizeMap[size];

  return (
    <Box
      w={dimensions.w}
      h={dimensions.h}
      borderRadius="full"
      bg={bg}
      display="flex"
      alignItems="center"
      justifyContent="center"
      fontSize={dimensions.fontSize}
      fontWeight="bold"
      color={color}
      flexShrink={0}
    >
      {getInitials(name)}
    </Box>
  );
}
