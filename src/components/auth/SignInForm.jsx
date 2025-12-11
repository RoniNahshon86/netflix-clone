import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../assets/utilities/firebase/firebase";
import TextField from "../ui/TextField";
import Button from "../ui/Button";
import { Navigate } from "react-router-dom";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
    } catch (err) {
      const errorMessages = {
        "auth/invalid-email": "Invalid email address or password",
        "auth/user-disabled": "The user has been disabled",
        "auth/user-not-found": "Invalid email address or password",
        "auth/wrong-password": "Invalid email address or password",
        "auth/invalid-credential": "Invalid email address or password",
        "auth/too-many-requests": "Too many attempts. Try again later",
      };

      const errorMessage =
        errorMessages[err.code] ||
        "An unexpected error occurred. Please try again.";
      setError(errorMessage);
    } finally {
      setLoading(false);
      Navigate("/browse");
    }
  };

  return (
    <div
      className={`flex flex-col gap-8 w-[450px] bg-overlay-black-60 py-12 px-17`}
    >
      <div>
        <h1 className="title1">Sign In</h1>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <TextField
          type="email"
          placeholder="Email address"
          className="w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={loading}
        />
        <TextField
          type="password"
          placeholder="Password"
          className="w-full"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          disabled={loading}
        />

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <Button type="submit" className="w-full" size="lg" disabled={loading}>
          {loading ? "Login..." : "Sign In"}
        </Button>
      </form>
      <p className="text-neutral-gray-200 text-xs">
        This page is protected by Google reCAPTCHA to ensure you’re not a bot.
        Learn more.
      </p>
    </div>
  );
};

export default SignInForm;
