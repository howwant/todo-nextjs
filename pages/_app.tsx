import { AppProps } from "next/app";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { wrapper } from "../store";
import GlobalStyle from "../styles/GlobalStyle";

const app = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <GlobalStyle/>
            <div className="max-width">
                <Header />
                <Component {...pageProps}/>
                <Footer />
            </div>
        </>
    );
};

export default wrapper.withRedux(app);