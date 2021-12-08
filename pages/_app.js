
import { library , config} from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import "react-toggle/style.css"
import ThemeProviders from '../providers/ThemeProviders'

import { faSun,faMoon,faBorderAll,faList ,faSortNumericDown,faSortNumericUp} from '@fortawesome/free-solid-svg-icons'
config.autoAddCss=false;

library.add(faSun,faMoon,faList, faBorderAll,faSortNumericDown,faSortNumericUp)

import 'bootstrap/dist/css/bootstrap.min.css';
import 'highlight.js/styles/darcula.css'
import '../styles/index.scss'





export default ({Component , pageProps})=>
<ThemeProviders>

<Component {...pageProps}/>
</ThemeProviders>