import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function HomePage() {
  const { auth } = useAuth();
  return (
    <>
      <p>HomePage</p>
      <Link to="/me">Go to Profile Page</Link>
    </>
  );
}
