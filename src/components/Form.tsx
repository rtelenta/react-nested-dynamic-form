interface IProps {
  onSubmit: () => void;
}

const Form: React.FC<IProps> = ({ children, onSubmit }) => {
  return (
    <form className="mt-5 md:mt-0 md:col-span-2" onSubmit={onSubmit}>
      <div className="shadow overflow-hidden sm:rounded-md">{children}</div>
    </form>
  );
};

export default Form;
