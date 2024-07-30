import * as yup from "yup";

let EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const contactSchemas = yup.object().shape({
  name: yup.string().required("Please entre your name"),
  email: yup
    .string()
    .matches(EMAIL_REGEX, "Please entre a valiad email")
    .required("Please entre your email"),
  desc: yup.string().optional(),
});
