import { Eye, EyeOff } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const [passType, setPassType] = useState("password");
  const [confirmPassType, setConfirmPassType] = useState("password");
  const [error, setError] = useState(false);
  const [matchError, setMatchError] = useState(false);

  // Inputs
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");

  const rules = {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    number: /[0-9]/.test(password),
    special: /[!@#$%^&*(),.?":{}|<>]/.test(password),
  };

  useEffect(() => {
    let hasError = Object.values(rules).some((err) => err === false);
    setError(password !== "" && hasError);
  }, [password]);

  useEffect(() => {
    setMatchError(cPassword !== "" && cPassword !== password);
  }, [cPassword, password]);

  function togglePassword(Type, setType) {
    setType(Type === "password" ? "text" : "password");
  }

  function submitHanler(e) {
    e.preventDefault();
    console.log(e);
    console.log(error || matchError);
  }

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-[95%] sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[40%] 2xl:w-[30%] glass-card border-[#ffffff33] rounded-2xl py-8 sm:py-8 md:py-10 lg:py-8 xl:py-8 2xl:py-10">
        <h1 className="text-[#f32170] drop-shadow-[0_0_20px_#f3217099] text-center text-3xl md:text-4xl font-semibold mb-10">
          Craete a Accaount
        </h1>
        <form
          onSubmit={(e) => submitHanler(e)}
          className="px-7 md:px-16 flex justify-center items-center flex-col gap-5"
        >
          <div className="w-full flex  gap-5">
            <input
              onChange={(e) => setFullName(e.target.value.trim())}
              value={fullName}
              className="border-none outline-none focus:ring-2 focus:ring-[#ff6b08] w-1/2 py-3 px-2 rounded border-[#ffffff33] text-black transition-all duration-150"
              type="text"
              placeholder="Enter Your Full Name.."
              required
            />
            <input
              onChange={(e) => setUserName(e.target.value.trim())}
              value={userName}
              className="border-none outline-none focus:ring-2 focus:ring-[#ff6b08] w-1/2 py-3 px-2 rounded border-[#ffffff33] text-black transition-all duration-150"
              type="text"
              placeholder="Type your username.."
              required
            />
          </div>
          <input
            onChange={(e) => setEmail(e.target.value.trim())}
            value={email}
            className="border-none outline-none focus:ring-2 focus:ring-[#ff6b08] w-full py-3 px-2 rounded border-[#ffffff33] text-black transition-all duration-150"
            type="email"
            placeholder="Enter your Email.."
            required
          />
          <div className="w-full relative">
            <input
              onChange={(e) => {
                setPassword(e.target.value.trim());
                if (e.target.value == "") {
                  setError(false);
                }
              }}
              value={password}
              className={`${
                error
                  ? "text-red-600 focus:ring-[#ff0000]"
                  : "text-black focus:ring-[#ff6b08]"
              }border-none outline-none focus:ring-2 focus:ring-[#ff6b08] w-full py-3 px-2 rounded border-[#ffffff33] text-black transition-all duration-150`}
              type={passType}
              placeholder="Craete a Password.."
              required
            />
            <button
              onClick={() => togglePassword(passType, setPassType)}
              className="absolute right-2 top-3 cursor-pointer"
            >
              {passType === "text" ? (
                <Eye color="#000000" />
              ) : (
                <EyeOff color="#000000" />
              )}
            </button>

            <div
              className={`${
                error ? "flex" : "hidden"
              } flex-col justify-start gap-2 mt-4 transition-all duration-300`}
            >
              <ul className="text-sm mt-2">
                <li
                  className={rules.length ? "text-green-500" : "text-red-500"}
                >
                  {rules.length ? "✅" : "❌"} At least 8 characters
                </li>
                <li
                  className={
                    rules.uppercase ? "text-green-500" : "text-red-500"
                  }
                >
                  {rules.uppercase ? "✅" : "❌"} One uppercase letter
                </li>
                <li
                  className={rules.number ? "text-green-500" : "text-red-500"}
                >
                  {rules.number ? "✅" : "❌"} One number
                </li>
                <li
                  className={rules.special ? "text-green-500" : "text-red-500"}
                >
                  {rules.special ? "✅" : "❌"} One special character
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full relative">
            <input
              onChange={(e) => setCPassword(e.target.value.trim())}
              value={cPassword}
              className={`${
                matchError
                  ? "text-red-600 focus:ring-[#ff0000]"
                  : "text-black focus:ring-[#ff6b08]"
              } border-none outline-none focus:ring-2 w-full py-3 px-2 rounded border-[#ffffff33] transition-all duration-150`}
              type={confirmPassType}
              placeholder="Confirm password.."
              required
            />
            <button
              onClick={() =>
                togglePassword(confirmPassType, setConfirmPassType)
              }
              className="absolute right-2 top-3 cursor-pointer"
            >
              {confirmPassType === "text" ? (
                <Eye color="#000000" />
              ) : (
                <EyeOff color="#000000" />
              )}
            </button>
            {matchError && (
              <p className="text-red-500 text-sm mt-2">
                Passwords do not match
              </p>
            )}
          </div>
          <div className="w-full flex justify-center items-center">
            <button
              className={`${
                error || matchError ? "disabledMy" : ""
              } w-1/2 select-none button-gradient py-2 px-5 font-medium sm:text-lg text-gray-100 rounded`}
              disabled={error || matchError}
            >
              Register
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
          <span className="mb-2 opacity-70">
            Already have an account ? {"  "}
          </span>{" "}
          <Link className="gitid mb-1" to={"/login"}>
            {" "}
            Login
          </Link>
        </h1>
      </div>
    </div>
  );
}
