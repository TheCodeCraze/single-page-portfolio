import * as Yup from "yup";

export const formSchema = Yup.object().shape({
  name: Yup.string().required("This field is required"),
  email: Yup.string()
    .email("Sorry, invalid format here")
    .required("This field is required"),
  message: Yup.string().required("This field is required"),
});
