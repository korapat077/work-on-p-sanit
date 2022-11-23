import React from "react";
import { useState, useEffect } from "react";
export default function Scansucceed() {
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

  // useEffect(() => {
  //   const jelId = window.localStorage.getItem("jelId");
  //   const eventId = window.localStorage.getItem("eventId");
  //   setJelId(jelId);
  //   setEventId(eventId);
  // }, []);
  // const onPatch = () => {
  //   axios({
  //     method: "patch",
  //     data: {
  //       isSuccess: true,
  //     },
  //     url: `${process.env.NEXT_PUBLIC_APP_NAME}/join-event-list/${jelId}`,
  //     responseType: "stream",
  //   }).then(() => {
  //     router.push(`/checksucceed/${eventId}`)
  //   })

  // };

  return (
    <div>
      <div id="targetFrame1">
        <iframe
          id="targetFrame1"
          src="/gesture.html"
          width={width}
          height={height}
        ></iframe>
      </div>
    </div>
  );
}
