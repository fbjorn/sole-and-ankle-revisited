import { css } from 'styled-components';

const BREAKPOINTS = {
  mobile: `${600 / 16}rem`,
  tablet: `${950 / 16}rem`,
  desktop: `${1300 / 16}rem`,
};

export const onMobile = `@media(max-width: ${BREAKPOINTS.mobile})`;
export const onTablet = `@media(max-width: ${BREAKPOINTS.tablet})`;
export const fromTablet = `@media(min-width: ${BREAKPOINTS.tablet})`;
export const onDesktop = `@media(min-width: ${BREAKPOINTS.desktop})`;

export const THEME = css`
  --color-white: hsl(0deg 0% 100%);

  --color-gray-100: hsl(185deg 5% 95%);
  --color-gray-300: hsl(190deg 5% 80%);
  --color-gray-500: hsl(186deg 4% 60%);
  --color-gray-700: hsl(220deg 5% 40%);
  --color-gray-900: hsl(220deg 3% 20%);

  --color-primary: hsl(340deg 65% 47%);
  --color-secondary: hsl(240deg 60% 63%);

  --font-weight-normal: 500;
  --font-weight-medium: 600;
  --font-weight-bold: 800;
`;
