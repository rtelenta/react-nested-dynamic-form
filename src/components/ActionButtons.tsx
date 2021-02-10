import Button from "./Button";

const ActionButtons: React.FC = () => {
  return (
    <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
      <Button type="submit">Save</Button>
    </div>
  );
};

export default ActionButtons;
