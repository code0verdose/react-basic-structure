import { ButtonProps, ColorVariants, SizeVariants } from "./types/ButtonType";
import s from "./Button.module.scss";

//prettier-ignore
const sizeVariants: SizeVariants = {
  "small": s.button_small,
  "medium": s.button_medium,
  "large": s.button_large,
};

//prettier-ignore
const colorVariants: ColorVariants = {
  "red": s.button_red,
  "gray": s.button_gray,
  "green": s.button_green,
  "orange": s.button_orange
};

export const Button: React.FC<ButtonProps> = ({
  children,
  size,
  color,
  arrowPosition,
  arrowDirection,
}) => {
  const rootClasses: string[] = [s.button, sizeVariants[size], colorVariants[color]];

  // if (size === "small") {
  //   rootClasses.push(s.button_small);
  // }

  return <button className={rootClasses.join(" ")}>{children}</button>;
};
