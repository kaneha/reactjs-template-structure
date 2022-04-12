import { ITheme } from 'types/theme';

export const theme: ITheme = {
  palette: {
    common: {
      white: '#fff',
      black: '#000',
    },
    primary: { main: '#29b6f6', light: '#81d4fa' },
    secondary: { main: '#81c784', light: '#c8e6c9' },
    info: { main: '#42a5f5', light: '#90caf9' },
    warning: { main: '#ffee58', light: '#fff59d' },
    success: { main: '#66bb6a', light: '#a5d6a7' },
    error: { main: '#ef5350', light: '#ef9a9a' },
    text: {
      primary: 'rgba(0,0,0,0.87)',
      secondary: 'rgba(0,0,0,0.6)',
      disabled: 'rgba(0,0,0,0.38)',
    },
    grey: {
      '50': '#fafafa',
      '100': '#f5f5f5',
      '200': '#eeeeee',
      '300': '#e0e0e0',
      '400': '#bdbdbd',
      '500': '#9e9e9e',
      '600': '#757575',
      '700': '#616161',
      '800': '#424242',
      '900': '#212121',
    },
    action: {
      active: 'rgba(0,0,0,0.54)',
      hover: 'rgba(0,0,0,0.04)',
      hoverOpacity: 0.04,
      selected: 'rgba(0,0,0,0.08)',
      selectedOpacity: 0.08,
      disabled: 'rgba(0,0,0,0.26)',
      disabledBackground: 'rgba(0,0,0,0.12)',
      disabledOpacity: 0.38,
      focus: 'rgba(0,0,0,0.12)',
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
  },
  zIndex: {
    speedDial: 1050,
    appBar: 1100,
    toast: 1400,
    tooltip: 1500,
    modal: 1999,
  },
};
