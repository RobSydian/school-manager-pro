import StyledButtonContainer from "../styles/molecules/StyledButtonContainer";

type Props = {
  children: JSX.Element | JSX.Element[];
};

export default function ButtonContainer({ children }: Props) {
  return <StyledButtonContainer>{children}</StyledButtonContainer>;
}
