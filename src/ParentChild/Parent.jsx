import { lazy, Suspense } from "react";

const ChildComponents = lazy(() => import("./Child"));

const Parent = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <ChildComponents />
      </Suspense>
    </>
  );
};

export default Parent;