interface IProps {
  type?: "button" | "submit";
  onClick?: () => void;
  icon?: React.ReactNode;
  fill?: "solid" | "outline";
  color?: "indigo" | "red";
  className?: string;
}

const Button: React.FC<IProps> = ({
  children,
  type = "button",
  onClick,
  icon,
  fill = "solid",
  color = "indigo",
  className = "",
}) => {
  const fillClasses = {
    solid: {
      indigo:
        "text-white border-transparent bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500",
      red:
        "text-white border-transparent bg-red-600 hover:bg-red-700 focus:ring-red-500",
    },
    outline: {
      indigo:
        "text-indigo-600 border-indigo-600 bg-white hover:bg-gray-50 focus:ring-indigo-500",
      red:
        "text-red-600 border-red-600 bg-white hover:bg-gray-50 focus:ring-red-500",
    },
  };

  return (
    <button
      onClick={onClick}
      type={type}
      className={`inline-flex items-center py-2 px-3 border rounded-md shadow-sm text-sm leading-4 font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${fillClasses[fill][color]} ${className}`}
    >
      {children} {icon && <div className={children ? "ml-2" : ""}>{icon}</div>}
    </button>
  );
};

export default Button;
