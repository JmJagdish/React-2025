import { useRouteError, Link } from "react-router";
import Button from "../ui/Button";

const Error = () => {
  const err = useRouteError();

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-teal-400 via-teal-600 to-teal-900 px-4">
      <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-10 max-w-md w-full text-center">
        <h1 className="text-7xl font-extrabold text-white mb-4">
          {err?.status || 404}
        </h1>

        <h2 className="text-xl font-semibold text-white/90 mb-3">
          {err?.statusText || "Something went wrong"}
        </h2>

        <p className="text-white/70 mb-8">
          Sorry, the page you are looking for doesn’t exist or has been moved.
        </p>

        <Link to="/">
          <Button variant="glass">Back to Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
