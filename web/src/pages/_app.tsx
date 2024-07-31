import type {AppProps} from"next/app"
import "../pages/home/main.scss"
function App({Component, pageProps}: AppProps){
    return <Component {...pageProps} />

}
export default App