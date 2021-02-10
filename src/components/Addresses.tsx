import { ArrowDown, ArrowUp, PlusCircle, XCircle } from "react-feather";
import { useFieldArray, useFormContext } from "react-hook-form";
import { defaultDirection, directionType } from "../App";
import Button from "./Button";
import Label from "./Label";

const Addresses: React.FC = () => {
  const { control, register } = useFormContext();

  const fieldName = "directions";

  const { fields, append, remove, move } = useFieldArray<directionType>({
    control,
    name: fieldName,
  });

  const onNewDirection = () => {
    append(defaultDirection);
  };

  const onMoveUp = (index: number) => {
    const minIndex = 0;
    const prevIndex = index - 1;

    if (index > minIndex) move(index, prevIndex);
  };

  const onMoveDown = (index: number) => {
    const maxIndex = fields.length - 1;
    const nextIndex = index + 1;

    if (index < maxIndex) move(index, nextIndex);
  };

  return (
    <div className="mt-16">
      <div className="flex items-center">
        <h2 className="mr-8 text-xl">Directions</h2>

        <Button onClick={onNewDirection} fill="outline" icon={<PlusCircle />}>
          New direction
        </Button>
      </div>

      <div className="col-span-6" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200"></div>
        </div>
      </div>

      {fields.map(
        ({ id, street_address, city, state, postal_code }, index: number) => (
          <div className="grid grid-cols-6 gap-6 mt-4" key={id}>
            <div className="col-span-6">
              <div className="sm:flex items-center justify-between">
                <h3 className="font-medium mr-8 mb-4 sm:mb-0">
                  Address {index + 1}
                </h3>

                <div className="flex items-center">
                  <Button
                    className="mr-2"
                    icon={<ArrowUp />}
                    fill="outline"
                    onClick={() => onMoveUp(index)}
                  />
                  <Button
                    className="mr-8"
                    icon={<ArrowDown />}
                    fill="outline"
                    onClick={() => onMoveDown(index)}
                  />
                  <Button
                    onClick={() => remove(index)}
                    fill="outline"
                    icon={<XCircle />}
                    color="red"
                  >
                    Remove
                  </Button>
                </div>
              </div>
            </div>

            <Label
              title="Street address"
              htmlFor={`${fieldName}[${index}].street_address`}
            >
              <input
                type="text"
                name={`${fieldName}[${index}].street_address`}
                id={`${fieldName}[${index}].street_address`}
                autoComplete="street-address"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                ref={register()}
                defaultValue={street_address}
              />
            </Label>

            <Label
              title="City"
              htmlFor={`${fieldName}[${index}].city`}
              className="sm:col-span-6 lg:col-span-2"
            >
              <input
                type="text"
                name={`${fieldName}[${index}].city`}
                id={`${fieldName}[${index}].city`}
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                ref={register()}
                defaultValue={city}
              />
            </Label>

            <Label
              title="State / Province"
              htmlFor={`${fieldName}[${index}].state`}
              className="sm:col-span-6 lg:col-span-2"
            >
              <input
                type="text"
                name={`${fieldName}[${index}].state`}
                id={`${fieldName}[${index}].state`}
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                ref={register()}
                defaultValue={state}
              />
            </Label>

            <Label
              title="ZIP / Postal"
              htmlFor={`${fieldName}[${index}].postal_code`}
              className="sm:col-span-6 lg:col-span-2"
            >
              <input
                type="text"
                name={`${fieldName}[${index}].postal_code`}
                id={`${fieldName}[${index}].postal_code`}
                autoComplete="postal-code"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                ref={register()}
                defaultValue={postal_code}
              />
            </Label>

            <div className="col-span-6" aria-hidden="true">
              <div className="py-5">
                <div className="border-t border-gray-200"></div>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Addresses;
