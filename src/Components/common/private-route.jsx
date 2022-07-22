import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/slices/user";
import { useEffect } from "react";

export default function PrivateRoute({ children, reversePrivateRoute }) {
  const router = useRouter();
  const user = useSelector((state) => selectUser(state));

  useEffect(() => {
    if (!reversePrivateRoute && !user.jwt.token)
      router.replace("?modal=login", "/auth/login");
    else if (reversePrivateRoute && user.jwt.token)
      router.replace("/");
  }, [user]);

  if (user.jwt.loading) return <h1>درحال بارگذاری</h1>;

  if (
    (reversePrivateRoute && user.jwt.token) ||
    (!reversePrivateRoute && !user.jwt.token)
  ) {
    return null;
  }

  return children;
}
