import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";

const Loading = () => {
  return (
    <div className="fixed w-full h-full flex justify-center items-center bg-black/10 z-50">
      <CircularProgress />
    </div>
  );
};

export default Loading;
