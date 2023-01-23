import StyledForm from "../styles/organisms/StyledForm";

type Props = {
  submitFn: (e: any) => void;
  children: JSX.Element | JSX.Element[];
};

export default function Form({ submitFn, children }: Props) {
  console.log(submitFn);
  return (
    <StyledForm>
      <form className="form" onSubmit={submitFn}>
        {children}
      </form>
    </StyledForm>
  );
}
