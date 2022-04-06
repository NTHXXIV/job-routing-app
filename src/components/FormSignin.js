import React, { useState } from "react";
import useAuth from "../hooks/useAuth";
import { useForm } from "react-hook-form";
import { FormProvider, FormTextField } from "./form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Stack, Alert, IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { useNavigate, useLocation } from "react-router-dom";

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string(),
  })
  .required();

function FormSignin() {
  const defaultValues = {
    email: "nth@gmail.com",
    password: "123",
  };

  const methods = useForm({ defaultValues, resolver: yupResolver(schema) });
  const {
    setError,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = methods;

  const [showPassword, setShowPassword] = useState(false);
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  console.log(location);

  const onSubmit = (data) => {
    setError("afterSubmit", { message: "Server Response Error" });
    setAuth({ ...data, isLogin: true });
    navigate(from, { replace: true });
  };

  return (
    <div>
      <LockOutlinedIcon />
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3}>
          {!!errors.afterSubmit && (
            <Alert severity="error">{errors.afterSubmit.message}</Alert>
          )}
          <FormTextField name="email" label="Email address" />

          <FormTextField
            name="password"
            label="Password"
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                    onMouseDown={(e) => e.preventDefault()}
                    edge="end"
                  >
                    {" "}
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <LoadingButton
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            loading={isSubmitting}
          >
            Login
          </LoadingButton>
        </Stack>
      </FormProvider>
    </div>
  );
}

export default FormSignin;
