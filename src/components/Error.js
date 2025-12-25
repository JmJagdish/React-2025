import { useRouteError, Link } from "react-router";

const Error = () => {
  const err = useRouteError();

  return (
    <div className="error-page">
      <div className="error-content">
        <h1 className="error-code">{err?.status || 404}</h1>
        <h2 className="error-title">
          {err?.statusText || "Something went wrong"}
        </h2>
        <p className="error-message">
          Sorry, the page you are looking for doesn’t exist or has been moved.
        </p>

        <Link to="/" className="error-btn">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
