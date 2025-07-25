import { useFormContext } from "react-hook-form";

const fields = [
  {
    name: "backgroundColor",
    label: "Background Color",
    type: "text",
    defaultValue: "#ffffff",
  },
  {
    name: "borderRadius",
    label: "Border Radius",
    type: "text",
    defaultValue: "0",
  },
  {
    name: "width",
    label: "Width",
    type: "text",
    defaultValue: "150",
  },
];

const HookForm = () => {
  const { register, handleSubmit } = useFormContext();

  return (
    <form
      onSubmit={handleSubmit((data) => console.log("Submitted", data))}
      className="p-4 rounded-md shadow-lg flex flex-col gap-2.5 w-full max-w-md bg-gradient-to-b from-gray-300 to-white"
    >
      {fields.map(({ name, label, type, defaultValue }) => (
        <label key={name} className="block">
          <span className="text-md font-medium">{label}</span>
          <input
            type={type}
            defaultValue={defaultValue}
            className="w-full mt-1 border rounded px-2 py-1"
            {...register(name)}
          />
        </label>
      ))}
      <button
        type="submit"
        className="border bg-[#212121] px-4 py-2 text-sm font-sans self-end mt-4 text-white rounded-md  w-fit "
      >
        Submit
      </button>
    </form>
  );
};

export default HookForm;
