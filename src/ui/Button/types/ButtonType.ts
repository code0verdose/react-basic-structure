export enum SizeEnum {
  large = "large",
  medium = "medium",
  small = "small",
}

export enum ColorEnum {
  orange = "orange",
  red = "red",
  green = "green",
  gray = "gray",
}

export enum ArrowPositionEnum {
  left = "left",
  right = "right",
  double = "double",
}

export enum ArrowDirectionEnum {
  left = "left",
  right = "right",
}

export interface ButtonProps {
  children: JSX.Element | string;
  size: SizeEnum;
  color: ColorEnum;
  arrowPosition?: ArrowPositionEnum;
  arrowDirection?: ArrowDirectionEnum;
}

export type SizeVariants = {
  small: string;
  medium: string;
  large: string;
};

export type ColorVariants = {
  red: string;
  orange: string;
  green: string;
  gray: string;
};
