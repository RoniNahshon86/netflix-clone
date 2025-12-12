import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../assets/utilities/firebase/firebase";
import TextField from "../ui/TextField";
import Button from "../ui/Button";
import { Link } from "react-router-dom";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setLoading(true);

    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      const errorMessages = {
        "auth/email-already-in-use": "This email is already registered",
        "auth/invalid-email": "Invalid email address",
        "auth/operation-not-allowed": "Registration is currently disabled",
        "auth/weak-password": "Password is too weak",
      };

      const errorMessage =
        errorMessages[err.code] ||
        "An unexpected error occurred. Please try again.";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-8 w-[450px] bg-overlay-black-60 py-12 px-17">
      <div>
        <h1 className="title1">Sign Up</h1>
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
        <TextField
          type="password"
          placeholder="Confirm password"
          className="w-full"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          disabled={loading}
        />

        {error && <p className="text-primary-red text-sm">{error}</p>}

        <Button type="submit" className="w-full" size="lg" disabled={loading}>
          {loading ? "Creating account..." : "Sign Up"}
        </Button>
      </form>

      <p className="text-neutral-gray-100">
        Already have an account?{" "}
        <Link to="/login" className="text-primary-white hover:underline">
          Sign in
        </Link>
      </p>

      <p className="text-neutral-gray-200 text-xs">
        This page is protected by Google reCAPTCHA to ensure you're not a bot.
        Learn more.
      </p>
    </div>
  );
};

export default SignUpForm;
