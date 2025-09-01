import { Eye, EyeOff } from "lucide-react";
import React, { useContext, useRef, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import LocalStorageService from "../../utils/LocalStorage";

export default function Login() {
  const { setLoginStattus } = useContext(AuthContext);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [passType, setPassType] = useState("password");

  const LoginPassword = useRef();

  function submitHandal(e) {
    e.preventDefault();
    let users = LocalStorageService.getData();

    // Find user with matching credentials
    const user = users.find(
      (user) =>
        user.userInfo.email === email && user.userInfo.password === password
    );

    if (user) {
      // Update login status
      const updatedUser = {
        ...user,
        userInfo: {
          ...user.userInfo,
          loginStatus: true,
        },
      };

      // Update in localStorage
      const updated = LocalStorageService.updateUser(email, updatedUser);

      if (updated) {
        setLoginStattus(true);
        toast.success("Login successful!");
        window.location.href = "/dashboard";
      }
    } else {
      setLoginStattus(false);
      toast.error("Invalid email or password");
    }
  }

  function togglePassword() {
    if (passType === "text") {
      LoginPassword.current.type = "password";
      setPassType("password");
    } else {
      LoginPassword.current.type = "text";
      setPassType("text");
    }
  }

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-[95%] sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[40%] 2xl:w-[30%] glass-card border-[#ffffff33] rounded-2xl py-8 sm:py-8 md:py-10 lg:py-8 xl:py-8 2xl:py-10">
        <h1 className="text-[#f32170] drop-shadow-[0_0_20px_#f3217099] text-center text-3xl md:text-4xl font-semibold mb-5">
          Login BankDash.
        </h1>
        <form
          onSubmit={(e) => submitHandal(e)}
          className="px-7 md:px-16 flex justify-center items-center flex-col gap-5"
        >
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="border-none outline-none focus:ring-2 focus:ring-[#ff6b08] w-full py-3 px-2 rounded border-[#ffffff33] text-black transition-all duration-150"
            type="email"
            placeholder="Email.."
            required
          />
          <div className="w-full relative">
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              ref={LoginPassword}
              className="border-none outline-none focus:ring-2 focus:ring-[#ff6b08] w-full py-3 px-2 rounded border-[#ffffff33] text-black transition-all duration-150"
              type={passType}
              placeholder="Password.."
              required
            />
            <button
              onClick={togglePassword}
              className="absolute right-2 top-3 cursor-pointer"
            >
              {passType === "text" ? (
                <Eye color="#000000" />
              ) : (
                <EyeOff color="#000000" />
              )}
            </button>
          </div>
          <div className="w-full flex justify-center items-center">
            <button className="w-1/2 select-none button-gradient py-2 px-5 font-medium sm:text-lg text-gray-100 rounded">
              Login
            </button>
          </div>
        </form>
        <br />
        <div className="relative flex justify-center items-center flex-col">
          <hr className="opacity-40 z-10 absolute w-[80%]" />
          <span className="z-20 bg-[#130e1e] px-3 text_glow">Or</span>
        </div>
        <br />
        <h1 className="flex justify-center gap-2 items-center">
          <span className="mb-2 opacity-70">Dont have an account ? {"  "}</span>{" "}
          <Link className="gitid mb-1" to={"/register"}>
            {" "}
            Register
          </Link>
        </h1>
      </div>
    </div>
  );
}
