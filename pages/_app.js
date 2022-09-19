import React, { useEffect } from 'react';
import '../styles/main.scss';
import { wrapper, store } from "../redux/store";
import { Provider, useDispatch } from "react-redux";
import 'react-toastify/dist/ReactToastify.css';
import { refesh } from "../redux/actions";

const MyApp = ({ Component, pageProps }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(refesh());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(<Provider store={store}><Component {...pageProps} /></Provider>)
}

export default wrapper.withRedux(MyApp);
