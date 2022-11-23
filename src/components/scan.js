
import React from "react";
import { useState, useEffect } from "react";
export default function Scan() {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  // const router = useRouter();
  function getWindowDimensions() {
    if (typeof window !== "undefined") {
      const { innerWidth: width, innerHeight: height } = window;
      return {
        width,
        height,
      };
    }
  }

  useEffect(() => {
    setHeight(getWindowDimensions().height);
    setWidth(getWindowDimensions().width);
  
  }, []);

  return (
      <div id="targetFrame">
        <iframe
          id="targetFrame"
          src="/scanT.html"
          width={width}
          height={height}
        ></iframe>
      </div>
   
  );
}
