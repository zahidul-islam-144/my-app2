'use client'
import ReusableButton from "@/components/ui/Button";
import FormInput from "@/components/ui/Input";
import ResuableLink from "@/components/ui/Link";
import ReusableForm from "@/components/ui/ReusableForm";
import loginFormSchema from "@/schemas/loginSchema";
import { TInputType } from "@/types/form.type";
import { loginFormInputs } from "@/utils/formUtils";
import { zodResolver } from "@hookform/resolvers/zod";
import { toCapitalizeFirstLetterInSentence } from "@/utils/helperFunctions";
import React, { FC } from "react";
import { FieldValues } from "react-hook-form";
import { useSigninMutation } from "@/redux-toolkit/features/auth/authApi";

const Signin: FC = () => {
  const [signin, { data, error, isLoading }] = useSigninMutation();

  const onSubmit = async (data: FieldValues) => {
    // localStorage.setItem("isAuthenticated", "true");
    console.log("---> 1", data);
    try {
      const userInfo = {
        mobile: data.mobile,
      };
      const res = await signin(userInfo).unwrap();
      console.log("---> res", res);
    } catch (err) {
      console.log(err);
    }
    // navigate("/");
  };

  return (
    <section className="login_main loginFormSection">
      <div className="auth_block">
        <div className="loginFormBlock">
          <h1>
            {toCapitalizeFirstLetterInSentence("please, signin at first")}
          </h1>
          <ReusableForm
            onSubmit={onSubmit}
            resolver={zodResolver(loginFormSchema)}
          >
            {loginFormInputs.map((input, i) => (
              <FormInput
                key={i}
                type={input?.type as TInputType}
                name={input?.name}
                label={input?.label}
                placeholder={input?.placeholder}
              />
            ))}
            <ReusableButton type={"submit"} content={"signin"} />
          </ReusableForm>
        </div>

        <div className="loginFormBottom_block">
          <h3>{toCapitalizeFirstLetterInSentence("new to this Site?")}</h3>
          <div>
            <ResuableLink href={"/signup"} contents={"sign up now"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signin;
