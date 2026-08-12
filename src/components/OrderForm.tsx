import { useId } from "react";
import css from "./OrderForm.module.css";
import { Formik, Form, Field, ErrorMessage, type FormikHelpers } from "formik";
import * as Yup from "yup";

const orderSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Name should contain at least 2 letters!")
    .required("Please, provide your name!"),
  email: Yup.string()
    .email("Sorry, your email is invalid!")
    .required("Please, provide your email!"),
  delivery: Yup.string().oneOf(["pickup", "courier", "drone"]).required(),
  restrictions: Yup.array().of(
    Yup.string().oneOf(["vegan", "gluten-free", "nut-free"]),
  ),
  deliveryTime: Yup.string().required("Please, provide time for delivery!"),
  message: Yup.string().max(500),
});

interface FormValues {
  username: string;
  email: string;
  delivery: "pickup" | "courier" | "drone";
  restrictions: ("vegan" | "gluten-free" | "nut-free")[];
  deliveryTime: string;
  message: string;
}

const initialValues: FormValues = {
  username: "",
  email: "",
  delivery: "pickup",
  restrictions: [],
  deliveryTime: "",
  message: "",
};

export default function OrderForm() {
  const fieldId = useId();

  const handleSubmit = async (
    values: FormValues,
    helpers: FormikHelpers<FormValues>,
  ) => {
    await new Promise((r) => setTimeout(r, 3000))
    console.log(values);
    helpers.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={orderSchema}
      validateOnBlur={false}
      validateOnChange={false}
    >
      {({ errors, isSubmitting, isValid, dirty }) => {
        console.log(errors);
        console.log(dirty)
        return (
          <Form className={css.form}>
            <fieldset className={css.fieldset}>
              <legend className={css.legend}>Client Info</legend>
              <label htmlFor={`${fieldId}-username`} className={css.label}>
                Name
              </label>
              <Field
                type="text"
                name="username"
                id={`${fieldId}-username`}
                className={css.input}
              />
              <ErrorMessage
                name="username"
                className={css.error}
                component="p"
              />
              <label htmlFor={`${fieldId}-email`} className={css.label}>
                Email
              </label>
              <Field
                type="email"
                name="email"
                id={`${fieldId}-email`}
                className={css.input}
              />
              <ErrorMessage name="email" className={css.error} component="p" />
            </fieldset>
            <fieldset className={css.fieldset}>
              <legend className={css.legend}>Delivery method</legend>

              <label className={css.option}>
                <Field type="radio" name="delivery" value="pickup" />
                Pickup
              </label>
              <label className={css.option}>
                <Field type="radio" name="delivery" value="courier" />
                Courier
              </label>
              <label className={css.option}>
                <Field type="radio" name="delivery" value="drone" />
                Drone delivery
              </label>
              <ErrorMessage
                name="delivery"
                className={css.error}
                component="p"
              />
            </fieldset>
            <fieldset className={css.fieldset}>
              <legend className={css.legend}>Dietary restrictions</legend>
              <label className={css.option}>
                <Field type="checkbox" name="restrictions" value="vegan" />
                Vegan
              </label>
              <label className={css.option}>
                <Field
                  type="checkbox"
                  name="restrictions"
                  value="gluten-free"
                />
                Gluten-free
              </label>
              <label className={css.option}>
                <Field type="checkbox" name="restrictions" value="nut-free" />
                Nut-free
              </label>
              <ErrorMessage
                name="restrictions"
                className={css.error}
                component="p"
              />
            </fieldset>
            <label htmlFor={`${fieldId}-deliveryTime`} className={css.label}>
              Preferred delivery time
            </label>
            <Field
              as="select"
              name="deliveryTime"
              id={`${fieldId}-deliveryTime`}
              className={css.input}
            >
              <option value="">-- Choose delivery time --</option>
              <option value="morning">Morning (8:00-12:00)</option>
              <option value="afternoon">Afternoon (12:00-16:00)</option>
              <option value="evening">Evening (16:00-20:00)</option>
            </Field>
            <ErrorMessage
              name="deliveryTime"
              className={css.error}
              component="p"
            />
            <label htmlFor={`${fieldId}-message`} className={css.label}>
              Additional message
            </label>
            <Field
              as="textarea"
              name="message"
              rows={4}
              id={`${fieldId}-message`}
              className={css.textarea}
            ></Field>
            <ErrorMessage name="message" className={css.error} component="p" />
            <button type="submit" className={css.button} disabled={!isValid || !dirty}>
              {isSubmitting ? "Submitting order" : "Submit"}
            </button>
          </Form>
        );
      }}
      {/* <Form className={css.form}>
        <fieldset className={css.fieldset}>
          <legend className={css.legend}>Client Info</legend>
          <label htmlFor={`${fieldId}-username`} className={css.label}>
            Name
          </label>
          <Field
            type="text"
            name="username"
            id={`${fieldId}-username`}
            className={css.input}
          />
          <label htmlFor={`${fieldId}-email`} className={css.label}>
            Email
          </label>
          <Field
            type="email"
            name="email"
            id={`${fieldId}-email`}
            className={css.input}
          />
        </fieldset>
        <fieldset className={css.fieldset}>
          <legend className={css.legend}>Delivery method</legend>

          <label className={css.option}>
            <Field type="radio" name="delivery" value="pickup" />
            Pickup
          </label>
          <label className={css.option}>
            <Field type="radio" name="delivery" value="courier" />
            Courier
          </label>
          <label className={css.option}>
            <Field type="radio" name="delivery" value="drone" />
            Drone delivery
          </label>
        </fieldset>
        <fieldset className={css.fieldset}>
          <legend className={css.legend}>Dietary restrictions</legend>
          <label className={css.option}>
            <Field type="checkbox" name="restrictions" value="vegan" />
            Vegan
          </label>
          <label className={css.option}>
            <Field type="checkbox" name="restrictions" value="gluten-free" />
            Gluten-free
          </label>
          <label className={css.option}>
            <Field type="checkbox" name="restrictions" value="nut-free" />
            Nut-free
          </label>
        </fieldset>
        <label htmlFor={`${fieldId}-deliveryTime`} className={css.label}>
          Preferred delivery time
        </label>
        <Field
          as="select"
          name="deliveryTime"
          id={`${fieldId}-deliveryTime`}
          className={css.input}
        >
          <option value="">-- Choose delivery time --</option>
          <option value="morning">Morning (8:00-12:00)</option>
          <option value="afternoon">Afternoon (12:00-16:00)</option>
          <option value="evening">Evening (16:00-20:00)</option>
        </Field>
        <label htmlFor={`${fieldId}-message`} className={css.label}>
          Additional message
        </label>
        <Field
          as="textarea"
          name="message"
          rows={4}
          id={`${fieldId}-message`}
          className={css.textarea}
        ></Field>
        <button type="submit" className={css.button}>
          Place order
        </button>
      </Form> */}
    </Formik>
  );
}
