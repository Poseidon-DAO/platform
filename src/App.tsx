import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import LandingPage from "pages/LandingPage";
import { toast, ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";
import { RootState } from "redux/reducers";
import { useEffect } from "react";

export default function App() {
  const toastData = useSelector((state: RootState) => state.utils.toast);

  useEffect(() => {
    if (toastData.text.length) {
      toast[toastData.type](toastData.text, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }, [toastData]);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" render={(props: any) => <LandingPage {...props} />} />
        <Redirect from="/" to="/components" />
      </Switch>
      <ToastContainer />
    </BrowserRouter>
  );
}
