import { useFormContext } from "react-hook-form";
import Addresses from "./Addresses";
import Label from "./Label";

const Fields: React.FC = () => {
  const { register } = useFormContext();

  return (
    <div className="px-4 py-5 bg-white sm:p-6">
      <div className="grid grid-cols-6 gap-6">
        <Label
          title="First name"
          htmlFor="first_name"
          className="sm:col-span-3"
        >
          <input
            type="text"
            name="first_name"
            id="first_name"
            autoComplete="given-name"
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            ref={register}
          />
        </Label>

        <Label title="Last name" htmlFor="last_name" className="sm:col-span-3">
          <input
            type="text"
            name="last_name"
            id="last_name"
            autoComplete="family-name"
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            ref={register}
          />
        </Label>

        <Label
          title="Email address"
          htmlFor="email_address"
          className="sm:col-span-4"
        >
          <input
            type="text"
            name="email_address"
            id="email_address"
            autoComplete="email"
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            ref={register}
          />
        </Label>

        <Label
          title="Country / Region"
          htmlFor="country"
          className="sm:col-span-3"
        >
          <select
            id="country"
            name="country"
            autoComplete="country"
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            ref={register}
          >
            <option>United States</option>
            <option>Canada</option>
            <option>Mexico</option>
          </select>
        </Label>
      </div>

      <Addresses />
    </div>
  );
};

export default Fields;
