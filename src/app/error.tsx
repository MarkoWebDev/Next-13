"use client"; // using component on client side
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    //on production we gonna get error from this commponent
    <div>
      <h2>Something went wrong! Try refresh the browser!!!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
