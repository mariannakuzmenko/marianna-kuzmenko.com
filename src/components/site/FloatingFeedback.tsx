import { Link } from "react-router-dom";
import { useLang } from "@/i18n/LanguageContext";

export const FloatingFeedback = () => {
  const { path } = useLang();
  return (
    <Link to={path("inquiry")} className="floating-feedback hidden md:flex items-center gap-2">
      Feedback
    </Link>
  );
};
