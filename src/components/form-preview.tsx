import { useFormContext, useWatch } from "react-hook-form";

export default function FormValuesPreview() {
  const { control } = useFormContext();
  const values = useWatch({ control });

  return (
    <div  className="bg-gradient-to-b from-white to-blue-200 p-3 rounded-md">
      <h4>Live Form Values:</h4>
      <pre>{JSON.stringify(values, null, 2)}</pre>
    </div>
  );
}
