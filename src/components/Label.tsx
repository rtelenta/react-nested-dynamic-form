interface IProps {
  className?: string;
  title?: string;
  htmlFor?: string;
}

const Label: React.FC<IProps> = ({
  className = "",
  children,
  title,
  htmlFor,
}) => {
  return (
    <div className={`col-span-6 ${className}`}>
      <label
        htmlFor={htmlFor}
        className="block text-sm font-medium text-gray-700"
      >
        {title}
      </label>

      {children}
    </div>
  );
};

export default Label;
