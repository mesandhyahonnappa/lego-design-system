export type ButtonType = 'submit' | 'reset' | 'button';
export type ButtonVariant = 'primary' | 'secondary' | 'ghost';
export interface AnchorInterface {
  href: string | undefined;
  target: string | undefined;
  rel: string | undefined;
  download: string | undefined;
}

export interface ButtonInterface {
  type: ButtonType;
  disabled: boolean;
}
