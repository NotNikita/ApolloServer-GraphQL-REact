import styled from "styled-components";

export interface StyledButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  active?: boolean;
  hoverColor?: string;
  backgroundColor: string;
  hoverBackgroundColor?: string;
  disabledBackgroundColor?: string;
  activeBackgroundColor?: string;
  activeColor?: string;
  activeBorder?: string;
  border?: string;
  marginRight?: string;
  marginLeft?: string;
  marginBottom?: string;
  marginTop?: string;
  justifyContent?: string;
  boxSizing?: string;
  borderRadius?: string;
  padding?: string;
  gap?: string;
  fontSize?: string;
  fontWeight?: string;
  lineHeight?: string;
  position?: string;
  topPosition?: string;
  bottomPosition?: string;
  rightPosition?: string;
  leftPosition?: string;
  buttonWidth?: string;
  buttonHeight?: string;
  boxShadow?: string;
  hoverBoxShadow?: string;
  zIndex?: string;
}

export const buttonBoxShadow =
  "0px 1px 3px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 3px 1px rgba(0, 0, 0, 0.12)";

export const StyledButton = styled.button<StyledButtonProps>`
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  box-shadow: ${buttonBoxShadow};
  font-size: 14px;
  border: none;
  border-radius: 4px;
  padding: 2px 8px;
  cursor: pointer;
  font-weight: 500;
  line-height: 24px;
  margin: 0;
  font-family: Roboto Medium;

  &:hover {
    transition: all 0.3s ease;
  }

  &:active {
    transition: all 0.3s ease;
  }
`;
