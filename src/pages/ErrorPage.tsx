import { useRouteError } from "react-router-dom";
import { Header } from "../components/Header";

interface RouteError {
  statusText?: string;
  message?: string;
}

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  const isRouteError = (error: unknown): error is RouteError => {
    return (error as RouteError).statusText !== undefined || (error as RouteError).message !== undefined;
  };

  const errorMessage = isRouteError(error)
    ? error.statusText || error.message
    : String(error);

  const errorNumberToText: string = errorMessage === "Not Found" ? "404 " : ""
  
  return (
    <>
      <Header />
      <main id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{errorNumberToText + errorMessage}</i>
      </p>
    </main>
    </>
  );
}

export { ErrorPage };
