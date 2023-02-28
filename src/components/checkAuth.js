import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export const CheckAuth = ({ children }) => {
  const router = useRouter();
  const { user } = useAuthContext();

  if (!user) {
    return router.push("/login");
  }
  return children;
};
