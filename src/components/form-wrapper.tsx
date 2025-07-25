// components/FormWrapper.tsx
import { useForm, FormProvider } from "react-hook-form";

export default function FormWrapper({children}: {children?: React.ReactNode}) {
  const methods = useForm({
    defaultValues: {
      borderRadius: "0",
      width: "150",
      backgroundColor: "#ffffff",
    },
  });

  return (
    <FormProvider {...methods}>
      {children}
    </FormProvider>
  );
}
