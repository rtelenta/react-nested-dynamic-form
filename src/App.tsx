import { FormProvider, useForm } from "react-hook-form";

import ActionButtons from "./components/ActionButtons";
import Fields from "./components/Fields";
import Form from "./components/Form";
import Layout from "./components/Layout";
import Sidebar from "./components/Sidebar";

export type directionType = {
  street_address: string;
  city: string;
  state: string;
  postal_code: string;
};

export const defaultDirection = {
  street_address: "",
  city: "",
  state: "",
  postal_code: "",
};

export const defaultValues = {
  country: "United States",
  email_address: "",
  first_name: "",
  last_name: "",
  directions: [defaultDirection] as directionType[],
};

function App() {
  const methods = useForm({
    defaultValues,
  });

  const onSubmit = methods.handleSubmit((data) => {
    alert(JSON.stringify(data, null, 4));
  });

  return (
    <FormProvider {...methods}>
      <Layout>
        <Sidebar />
        <Form onSubmit={onSubmit}>
          <Fields />
          <ActionButtons />
        </Form>
      </Layout>
    </FormProvider>
  );
}

export default App;
