import { useNavigate } from "react-router-dom";

export function useRoutes() {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };

  const toTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/");
  };

  const goBack = () => {
    navigate(-1);
  };

  return {
    navigateTo,
    toTop,
    goBack
  };
}