import { useEffect } from "react";
import IconBar from "./IconBar";
import CanvasContainer from "./CanvasContainer";
import OptionsPanel from "./OptionsPanel";

export default function Layout() {
  // const getToken = async () => {
  //   return await fetch("/api/getToken", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  // };
  // useEffect(() => {
  //   // get the authToken variable from the cookie
  //   let authToken = document.cookie.replace(
  //     /(?:(?:^|.*;\s*)authToken\s*\=\s*([^;]*).*$)|^.*$/,
  //     "$1"
  //   );
  //   // if there is no authToken, redirect to the login page
  //   if (!authToken) {
  //     const response = getToken();
  //     if (response.status === 200) {
  //       //set the cookie autHToken variable to the response.token and the expire date to the response.expires
  //       setCookie("authToken", response.token, response.expires);
  //     }
  //   }
  // }, []);

  return (
    <div className="layout">
      <IconBar />
      <OptionsPanel />
      <CanvasContainer />
    </div>
  );
}
