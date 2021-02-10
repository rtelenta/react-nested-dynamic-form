import { useFormContext } from "react-hook-form";

const Sidebar: React.FC = () => {
  const { watch } = useFormContext();
  const fields = watch();

  return (
    <div className="md:col-span-1">
      <div className="px-4 sm:px-0">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          Personal Information
        </h3>
        <p className="mt-1 text-sm text-gray-600">
          Use a permanent address where you can receive mail.
        </p>
      </div>

      <div className="bg-gray-500 text-white p-4 mt-8">
        <code className="whitespace-pre-wrap break-words">
          {JSON.stringify(fields, null, "  ")}
        </code>
      </div>
    </div>
  );
};

export default Sidebar;
