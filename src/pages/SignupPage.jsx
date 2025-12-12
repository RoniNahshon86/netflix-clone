import Container from "../components/layout/Container";
import AuthBg from "../assets/images/auth-bg.webp";
import SignUpForm from "../components/auth/SignUpForm";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const SignupPage = () => {
  const { user } = useAuth();

  if (user) {
    return <Navigate to="/browse" replace />;
  }

  return (
    <section
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.80) 0%, rgba(0, 0, 0, 0.60) 50%, #000 100%), url(${AuthBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container className="h-full min-h-[80vh] flex justify-center items-center">
        <SignUpForm />
      </Container>
    </section>
  );
};

export default SignupPage;
