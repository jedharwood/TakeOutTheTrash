import React from "react";
import { WideButton } from "../Components/Common/WideButton";

const NotFoundPage = () => {
  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-6 my-6">
        <div className="text-dark-gray text-center">
          <h2 className="text-3xl font-extrabold">Page Not Found</h2>
        </div>
        <WideButton buttonText="Back to Home" route="/" />
      </div>
    </div>
  );
};

export default NotFoundPage;
