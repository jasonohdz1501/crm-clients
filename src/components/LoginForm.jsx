import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import Alert from "./Alert";
import Spinner from "./Spinner";

const LoginForm = ({ client, loading }) => {
  let navigate = useNavigate();

  const newClientSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Min 3 characters")
      .max(20, "Ops! max 20 characters")
      .required("Name is required"),
    company: Yup.string()
      .min(3, "Min 3 characters")
      .max(40, "Max 40 characters")
      .required("Company is required"),
    email: Yup.string().email("Not valid email").required("Email is required"),
    telephone: Yup.number()
      .integer("Don't include periods")
      .positive("Just positive numbers")
      .typeError("Not a valid number"),
  });

  const handleSubmit = async (values) => {
    try {
      if (client.id) {
        const response = await fetch(
          `${import.meta.env.VITE_APP_API_URL}/${client.id}`,
          {
            method: "PUT",
            body: JSON.stringify(values),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          }
        );

        const result = await response.json();
      } else {
        const response = await fetch(import.meta.env.VITE_APP_API_URL, {
          method: "POST",
          body: JSON.stringify(values),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        });

        const result = await response.json();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto">
          <h1 className="text-gray-600 text-xl font-bold text-center uppercase">
            {client?.name ? "Edit Client" : "New Client"}
          </h1>
          <Formik
            initialValues={{
              name: client?.name ?? "",
              company: client?.company ?? "",
              email: client?.email ?? "",
              telephone: client?.telephone ?? "",
              notes: client?.notes ?? "",
            }}
            onSubmit={async (values, { resetForm }) => {
              await handleSubmit(values);
              resetForm();
              navigate("/clients", { replace: true });
            }}
            enableReinitialize
            validationSchema={newClientSchema}
          >
            {({ errors, touched }) => (
              <Form className="mt-10">
                <div className="mb-4">
                  <label htmlFor="name" className="text-gray-800">
                    Name:
                  </label>
                  <Field
                    type="text"
                    id="name"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Client's name"
                    name="name"
                  />
                  {errors.name && touched.name && <Alert>{errors.name}</Alert>}
                </div>
                <div className="mb-4">
                  <label htmlFor="company" className="text-gray-800">
                    Company:
                  </label>
                  <Field
                    type="text"
                    id="company"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="Company"
                    name="company"
                  />
                  {errors.company && touched.company && (
                    <Alert>{errors.company}</Alert>
                  )}
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="text-gray-800">
                    Email:
                  </label>
                  <Field
                    type="text"
                    id="email"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="emails"
                    name="email"
                  />
                  {errors.email && touched.email && (
                    <Alert>{errors.email}</Alert>
                  )}
                </div>
                <div className="mb-4">
                  <label htmlFor="telephone" className="text-gray-800">
                    Telephone:
                  </label>
                  <Field
                    type="tel"
                    id="telephone"
                    className="mt-2 block w-full p-3 bg-gray-50"
                    placeholder="telephone"
                    name="telephone"
                  />
                  {errors.telephone && touched.telephone && (
                    <Alert>{errors.telephone}</Alert>
                  )}
                </div>
                <div className="mb-4">
                  <label htmlFor="notes" className="text-gray-800">
                    Notes:
                  </label>
                  <Field
                    as="textarea"
                    type="text"
                    id="notes"
                    className="mt-2 block w-full p-3 bg-gray-50 h-40"
                    placeholder="notes"
                    name="notes"
                  />
                  {errors.notes && touched.notes && (
                    <Alert>{errors.notes}</Alert>
                  )}
                </div>
                <input
                  type="submit"
                  value={client?.name ? "Edit Client" : "New Client"}
                  className="mt-5 w-full  cursor-pointer 
           bg-blue-800 text-white text-lg p-3 uppercase font-bold"
                />
              </Form>
            )}
          </Formik>
        </div>
      )}
    </>
  );
};

LoginForm.defaultProps = {
  client: {},
  loading: false,
};

export default LoginForm;
