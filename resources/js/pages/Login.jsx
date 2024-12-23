import React, { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import bgLogin from "../../../public/image/chris-lee-70l1tDAI6rM-unsplash 2.png";
import FormInputError from "../components/FormUI/FormInputError";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { FormButton } from "../components/FormUI/FormButton";
import { useNavigate } from "react-router-dom";
import { handleLogin } from '../api/services/Login'

const Login = () => {
    const [error, setError] = useState(null);
    const schema = yup
        .object()
        .shape({
            email: yup.string().required("Email is required"),
            email: yup.string().email("This is a email"),
            password: yup.string().required("Password is required"),
        })
        .required();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onChange",
        resolver: yupResolver(schema),
    });

    const onSubmitHandler = (data) => {
        handleLogin(data)

    };
    return (
        <div className="w-100 d-flex">
            <div className="bg-white w-50 d-flex justify-content-center align-items-center vh-100">
                <div className="w-75">
                    <h2>Welcome back!</h2>
                    <span>Enter your Credentials to access your account</span>
                    <div>
                        <form onSubmit={handleSubmit(onSubmitHandler)}>
                            <FormInputError
                                type="text"
                                fieldName="email"
                                label="Email address"
                                placeHolder="Enter Email"
                                register={register}
                                error={error}
                                errors={errors}
                                clearError={() => setError(null)}
                            />
                            <FormInputError
                                type="password"
                                fieldName="password"
                                label="Password"
                                placeHolder="Enter Password"
                                register={register}
                                error={error}
                                errors={errors}
                                clearError={() => setError(null)}
                                other="forgot password"
                            />
                            <FormButton
                                name="Login"
                                type="submit"
                                className="w-75 border border-success p-2 border-opacity-10 rounded-3 mt-8 text-white"
                                style={{ backgroundColor: "#3A5B22" }}
                            />
                        </form>
                    </div>
                </div>
            </div>
            <div class="bg-secondary-subtle w-50">
                <img class="w-100" src={bgLogin} alt="Logo" />;
            </div>
        </div>
    );
};

export default Login;
