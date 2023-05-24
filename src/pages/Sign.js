import React from "react";
import { useFormik } from "formik";
import { basicSchema } from "../validation/YupValidation";
import logo from "../assets/images/Logo (1).png";
import googleLogo from "../assets/images/google.png";
import appStore from "../assets/images/App Store Badge.png";
import googleStore from "../assets/images/Google Play Badge.png";
import phones from "../assets/images/Imgs.png";
import dots from "../assets/images/Slider dots.png";
import eclipse from "../assets/images/Ellipse 2.png";
import toast, { Toaster } from "react-hot-toast";

const Sign = () => {
  const [terms, setTerms] = React.useState(false);
  const [rememberMe, setRememberMe] = React.useState(false);

  const onSubmit = (values, actions) => {
    if (terms) {
      console.log(values);
      toast.success(` Welcome ${values.firstName} ${values.lastName}!`);

      actions.resetForm();
      setTerms(!terms);
      setRememberMe(false);
      // alert(JSON.stringify(values, null, 2));
    } else {
      toast.error("accept the terms and condition.");
    }
  };

  const { handleBlur, handleChange, handleSubmit, values, touched, errors } =
    useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        email_phone: "",
        dob: "",
        password: "",
        confirmPassword: "",
      },
      validationSchema: basicSchema,
      onSubmit,
    });

  return (
    <>
      <Toaster />
      <div className="min-h-screen flex">
        <div className="md:basis-5/12 hidden md:inline bg-gradient-to-br w-full from-[#0e70da] to-[#007aff]">
          <div className="p-10 flex flex-col h-full">
            <h1 className="text-white text-center max-w-xl font-semibold xl:text-3xl md:text-2xl">
              Social media shared today, tomorrow or by location
            </h1>
            <div className="flex justify-center flex-1 relative items-center">
              <img src={phones} alt="" className="z-[1]" />
              <img src={eclipse} className="absolute" alt="" />
            </div>
            <div className="flex justify-center items-center">
              <img src={dots} alt="" />
            </div>
          </div>
        </div>
        <div className="bg-white md:basis-7/12 p-5 w-full flex items-center rounded-xl">
          <div className="w-full">
            <div className="max-w-2xl mx-auto">
              {/* logo/icon */}
              <div>
                <img src={logo} alt="" className="w-28 mb-10" />
              </div>
              {/* Headers */}
              <div className="mb-10">
                <h1 className="text-3xl font-semibold">Create account</h1>
                <p className="text-xs tracking-wide">
                  For business , band or celebrity
                </p>
              </div>
              <form onSubmit={handleSubmit}>
                {/* firstName and lastName */}
                <div className="grid md:grid-cols-2 grid-cols-1 md:gap-x-5 gap-y-5 mb-5">
                  <div className="flex flex-col">
                    <label
                      htmlFor="firstName"
                      className="text-xs font-semibold flex justify-between items-center mb-2"
                    >
                      <span> First Name</span>
                      {errors.firstName && touched.firstName && (
                        <p className="text-red-500 text-[10px] font-semibold">
                          {errors.firstName}
                        </p>
                      )}
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className={`bg-white p-2 border px-5  rounded-md outline-none ${
                        errors.firstName && touched.firstName
                          ? "border-red-500 shake"
                          : "border-gray-300 focus:border-[#007aff]"
                      }`}
                      onChange={handleChange}
                      value={values.firstName}
                      onBlur={handleBlur}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="lastName"
                      className="text-xs font-semibold flex justify-between items-center mb-2"
                    >
                      <span> Last Name</span>
                      {errors.lastName && touched.lastName && (
                        <p className="text-red-500 text-[10px] font-semibold">
                          {errors.lastName}
                        </p>
                      )}
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className={`bg-white p-2 border px-5  rounded-md outline-none   ${
                        errors.lastName && touched.lastName
                          ? "border-red-500 shake"
                          : "border-gray-300 focus:border-[#007aff]"
                      }`}
                      onChange={handleChange}
                      value={values.lastName}
                      onBlur={handleBlur}
                    />
                  </div>
                </div>
                {/* email and dob */}
                <div className="grid md:grid-cols-2 grid-cols-1 md:gap-x-5 gap-y-5 mb-5">
                  <div className="flex flex-col">
                    <label
                      htmlFor="firstName"
                      className="text-xs font-semibold flex justify-between items-center mb-2"
                    >
                      <span>Email or phone number </span>
                      {errors.email_phone && touched.email_phone && (
                        <p className="text-red-500 text-[10px] font-semibold">
                          {errors.email_phone}
                        </p>
                      )}
                    </label>
                    <input
                      type="text"
                      id="email_phone"
                      className={`bg-white p-2 border px-5  rounded-md outline-none   ${
                        errors.email_phone && touched.email_phone
                          ? "border-red-500 shake"
                          : "border-gray-300 focus:border-[#007aff]"
                      }`}
                      onChange={handleChange}
                      value={values.email_phone}
                      onBlur={handleBlur}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="lastName"
                      className="text-xs flex justify-between items-center font-semibold mb-2"
                    >
                      <span>Date of birth (mm/dd/yy)</span>
                      {errors.dob && touched.dob && (
                        <p className="text-red-500 text-[10px] font-semibold">
                          {errors.dob}
                        </p>
                      )}
                    </label>
                    <input
                      type="text"
                      onFocus={(e) => (e.target.type = "date")}
                      // onBlur={(e) => (e.target.type = "text")}
                      // type="date"
                      id="dob"
                      placeholder="date"
                      className={`bg-white p-2 border px-5 placeholder-transparent rounded-md outline-none   ${
                        errors.dob && touched.dob
                          ? "border-red-500 shake"
                          : "border-gray-300 focus:border-[#007aff]"
                      }`}
                      onChange={handleChange}
                      value={values.dob}
                      onBlur={handleBlur}
                    />
                  </div>
                </div>
                {/* password and confirm password */}
                <div className="grid md:grid-cols-2 grid-cols-1 md:gap-x-5 gap-y-5 mb-5">
                  <div className="flex flex-col">
                    <label
                      htmlFor="password"
                      className="text-xs font-semibold flex justify-between items-center mb-2"
                    >
                      <span> Password</span>
                      {errors.password && touched.password && (
                        <p className="text-red-500 text-[10px] font-semibold">
                          {errors.password}
                        </p>
                      )}
                    </label>
                    <input
                      type="password"
                      id="password"
                      className={`bg-white p-2 border px-5  rounded-md outline-none   ${
                        errors.password && touched.password
                          ? "border-red-500 shake"
                          : "border-gray-300 focus:border-[#007aff]"
                      }`}
                      onChange={handleChange}
                      value={values.password}
                      onBlur={handleBlur}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="confirm_password"
                      className="text-xs flex justify-between items-center font-semibold mb-2"
                    >
                      <span> Confirm Password</span>
                      {errors.confirmPassword && touched.confirmPassword && (
                        <p className="text-red-500 text-[10px] font-semibold">
                          {errors.confirmPassword}
                        </p>
                      )}
                    </label>
                    <input
                      type="password"
                      id="confirmPassword"
                      className={`bg-white p-2 border px-5  rounded-md outline-none   ${
                        errors.confirmPassword && touched.confirmPassword
                          ? "border-red-500 shake"
                          : "border-gray-300 focus:border-[#007aff]"
                      }`}
                      onChange={handleChange}
                      value={values.confirmPassword}
                      onBlur={handleBlur}
                    />
                  </div>
                </div>
                {/* remember me and forgot password */}
                <div className="flex justify-between items-center mb-5">
                  <div className="flex items-center">
                    <input
                      id="rememberMe"
                      type="checkbox"
                      onChange={() => setRememberMe(!rememberMe)}
                      defaultChecked={rememberMe}
                      checked={rememberMe}
                      className="w-4 h-4 text-blue-600 bg-white cursor-pointer border-gray-100 rounded focus:ring-blue-500 "
                    />
                    <label
                      for="rememberMe"
                      className="ml-2 text-xs font-semibold"
                    >
                      Remember me
                    </label>
                  </div>
                  <p className="text-[#007aff] underline text-xs cursor-pointer font-semibold">
                    Forgot password?
                  </p>
                </div>
                {/* terms */}
                <div className="flex items-center mb-5">
                  <input
                    // id="terms"
                    // name="terms"
                    type="checkbox"
                    onChange={() => setTerms(!terms)}
                    defaultValue={terms}
                    checked={terms}
                    className={`w-4 h-4 cursor-pointer text-blue-600 bg-white rounded focus:ring-blue-500   ${
                      errors.terms && touched.terms
                        ? "border-red-500 shake"
                        : "border-gray-100 focus:border-[#007aff]"
                    }`}
                  />
                  <label for="terms " className="ml-2 text-xs font-semibold">
                    I agree to all{" "}
                    <span className="hover:underline cursor-pointer text-[#007aff]">
                      {" "}
                      Terms
                    </span>{" "}
                    and{" "}
                    <span className="hover:underline cursor-pointer text-[#007aff]">
                      Privacy policy
                    </span>
                  </label>
                </div>
                {/* buttons */}
                <div className="grid md:grid-cols-2 grid-cols-1 md:gap-x-5 gap-y-5 mb-5">
                  <button
                    className="py-2.5 bg-[#007aff] text-white rounded-md text-sm font-semibold active:scale-95 duration-200 transition"
                    type="submit"
                  >
                    Create account
                  </button>
                  <div className="py-2.5 bg-[#2d3748] text-white flex justify-center items-center rounded-md text-sm font-semibold">
                    <span>
                      <img src={googleLogo} className="mr-3" alt="" />
                    </span>
                    Sign-in with google
                  </div>
                </div>
                {/* account */}
                <div>
                  <p className="text-center text-xs font-semibold">
                    Don't have an account?{" "}
                    <span className="hover:underline cursor-pointer text-[#007aff]">
                      {" "}
                      Log In
                    </span>
                  </p>
                </div>
              </form>
              {/* store */}
              <div className="flex items-center justify-center md:justify-start space-x-3 mt-10">
                <img src={appStore} alt="" className="w-28 cursor-pointer" />
                <img src={googleStore} alt="" className="w-28 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sign;
