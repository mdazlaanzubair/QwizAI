import React from "react";
import { FidgetSpinner } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="flex flex-col justify-center items-center fixed top-0 left-0 bg-white w-screen h-screen">
      <FidgetSpinner
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
        ballColors={["#000000", "#000000", "#000000"]}
        backgroundColor="#470bcd"
      />
      <h1 className="mt-12 text-2xl lg:text-3xl font-bold">Please Wait!</h1>
      <h1 className="my-3 text-xl lg:text-xl">
        While <strong className="text-indigo-600">Qwizbot</strong> is processing
        . . .
      </h1>
    </div>
  );
};

export default Loader;
