import type {AppProps} from"next/app"
import "../pages/home/main.scss"
import "./movielist/main.scss"
import "./searchable-dropdown/main.scss"
import "../pages/style.scss"
import "./color-guessing/main.scss"


function App({Component, pageProps}: AppProps){
    return <Component {...pageProps} />

}
export default App;