import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../assets/utilities/firebase/firebase";
import { useAuth } from "../../context/AuthContext";
import Button from "../ui/Button";
import logo from "../../assets/netflix-logo.svg";

const Header = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <header className="absolute top-6 left-0 right-0 z-50 flex justify-between items-center px-4 max-w-[90vw] mx-auto">
      <Link to="/">
        <img src={logo} alt="Netflix logo" className="w-[148px] h-auto" />
      </Link>

      {user ? (
        <Button size="sm" onClick={handleSignOut}>
          Sign Out
        </Button>
      ) : (
        <Link to="/login">
          <Button size="sm">Sign In</Button>
        </Link>
      )}
    </header>
  );
};

export default Header;
