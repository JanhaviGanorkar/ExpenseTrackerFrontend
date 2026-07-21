import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../../store/useUserStore";

const LoginSuccess = () => {
  const navigate = useNavigate();
  const fetchCurrentUser = useUserStore((state) => state.fetchCurrentUser);

  useEffect(() => {
    const loadUser = async () => {
      const success = await fetchCurrentUser();

      if (success) {
        navigate("/", { replace: true });
      } else {
        navigate("/login", { replace: true });
      }
    };

    loadUser();
  }, [fetchCurrentUser, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <h2 className="text-xl font-semibold">
        Signing you in...
      </h2>
    </div>
  );
};

export default LoginSuccess;