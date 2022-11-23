import logo from "./logo.svg";
import "./App.css";
import CheckGps from "./components/CheckGps";
import { useEffect, useState } from "react";
import { getDistance } from "geolib";
import { Router } from "react-router-dom";

function App() {
  // const location = CheckGps();
  // const [myLocation, setMylocation] = useState({
  //   lat: "",
  //   lng: "",
  // });
  // const [ischeckArea, setIsCheckArea] = useState(false);
  useEffect(() => {
    // const myLocation = async () => {
    //   const data = (await location.loaded)
    //     ? JSON.stringify(location)
    //     : "Location not available yet";
    //   if (!location.loaded) {
    //   } else {
    //     setMylocation(location.coordinates);
    //     // console.log(location.coordinates);
     
    //   }
    // };
    // myLocation();
    calDistance();
  });

  const calDistance = () =>{
    // var distance = getDistance(
    //   {
    //     latitude: parseFloat(13.6864179),
    //     longitude: parseFloat(100.611214),
    //   },
    //   {
    //     latitude: parseFloat(myLocation.lat),
    //     longitude: parseFloat(myLocation.lng),
    //   }
    // )
    // var distances = parseFloat(distance); 
    // console.log("ระยะห่าง (KM)", distances);
    // if(distance <= 100000){
      // if(ischeckArea === false){
      //   console.log("อยู่ในพื้นที่");
        // window.location.assign("/scan")
        window.location.assign("/scan")
    //   }
    // }else{
    //   console.log("อยู่นอกพื้นที่");
    // }
  }

  return (
    <div className="App">
      {/* <button>test</button> */}
    </div>
  );
}

export default App;
