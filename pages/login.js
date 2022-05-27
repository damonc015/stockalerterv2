import { useForm } from "react-hook-form";
import { VscBellDot } from "react-icons/vsc";
import { signIn, getSession } from "next-auth/client";
import { useState } from "react";
import { useRouter } from "next/router";
import Blob from "../components/loginpage/Blob";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [showErr, setShowErr] = useState(false);
  const router = useRouter();

  async function onSubmit(data) {
    try {
      const result = await signIn("credentials", {
        redirect: false,
        username: data.Username,
        password: data.Password,
      });
      if (!result.error) {
        router.replace("/");
      }
      if (result.error) {
        setShowErr(result.error);
      }
      reset();
    } catch {
      reset();
    }
  }

  return (
    <div
      className="container"
      style={{ flexDirection: "column", gap: "2rem" }}
      onClick={() => {
        setShowErr(false);
      }}
    >
      <Blob />
      <div className="loginTitle">
        <h1>Stock Alerter</h1>
        <VscBellDot
          style={{
            fontSize: "1.5rem",
            animation: "changeBell 6s ease-out 5s infinite",
          }}
        ></VscBellDot>
      </div>
      <form
        className="loginForm"
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
      >
        <div className="inputContainer">
          <input
            type="text"
            placeholder="Username"
            {...register("Username", { required: true, minLength: 6 })}
          />
          {errors.Username?.type === "required" && (
            <p className="errorMsg">Username required</p>
          )}
          {errors.Username?.type === "minLength" && (
            <p className="errorMsg">
              Username must be atleast 6 characters long
            </p>
          )}
          {showErr && (
            <p
              className="errorMsg"
              style={{
                top: "-1.6rem",
                left: "50%",
                transform: "translate(-50%, 0)",
              }}
            >
              {showErr}
            </p>
          )}
        </div>
        <div className="inputContainer">
          <input
            type="password"
            placeholder="Password"
            {...register("Password", { required: true, minLength: 6 })}
          />
          {errors.Password?.type === "required" && (
            <p className="errorMsg">Password required</p>
          )}
          {errors.Password?.type === "minLength" && (
            <p className="errorMsg">
              Password must be atleast 6 characters long
            </p>
          )}
        </div>
        <input type="submit" value="Login" className="inputSubmit" />
      </form>
      <p
        style={{
          position: "relative",
          zIndex: "2",
          fontFamily: "Raleway, sans-serif",
        }}
      >
        Login info can be found on my portfolio!
      </p>
    </div>
  );
};

export default Login;

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });
  if (session) {
    return {
      redirect: { destination: "/", permanent: false },
    };
  }
  return { props: {} };
}
