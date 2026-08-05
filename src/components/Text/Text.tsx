import styled from "styled-components";
import { TextProps } from "./Text.types";

type StyledTextProps = {
  $backgroundColor?: string;
  disabled?: boolean;
};

const StyledText = styled.p<StyledTextProps>`
  padding: 10px;
  background-color: ${(props) =>
    props.disabled ? "grey" : props.$backgroundColor || "transparent"};
  color: ${(props) => (props.disabled ? "white" : "inherit")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "default")};
`;

export function Text({ text, backgroundColor, disabled }: TextProps) {
  return (
    <StyledText $backgroundColor={backgroundColor} disabled={disabled}>
      {text}
    </StyledText>
  );
}
