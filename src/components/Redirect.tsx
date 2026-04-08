import { Navigate, useLocation } from "react-router-dom";

/** Client-side 301-style redirect — preserves search params and hash */
const Redirect = ({ to }: { to: string }) => {
  const { search, hash } = useLocation();
  return <Navigate to={`${to}${search}${hash}`} replace />;
};

export default Redirect;
