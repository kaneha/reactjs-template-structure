export interface ITheme {
  palette: {
    common: {
      white: string;
      black: string;
    };
    primary: { main: string; light: string };
    secondary: { main: string; light: string };
    info: { main: string; light: string };
    warning: { main: string; light: string };
    success: { main: string; light: string };
    error: { main: string; light: string };
    text: { primary: string; secondary: string; disabled: string };
    grey: {
      '50': string;
      '100': string;
      '200': string;
      '300': string;
      '400': string;
      '500': string;
      '600': string;
      '700': string;
      '800': string;
      '900': string;
    };
    action: {
      active: string;
      hover: string;
      hoverOpacity: number;
      selected: string;
      selectedOpacity: number;
      disabled: string;
      disabledBackground: string;
      disabledOpacity: number;
      focus: string;
      focusOpacity: number;
      activatedOpacity: number;
    };
  };
  zIndex: {
    speedDial: number;
    appBar: number;
    toast: number;
    tooltip: number;
    modal: number;
  };
}
