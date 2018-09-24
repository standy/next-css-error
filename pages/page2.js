
/* Without CSS Modules, maybe with PostCSS */

import * as css from '../style.css'

export default () => <div className={css.example}>
	Page2
</div>

/* With CSS Modules */
/*
import css from "../style.css"

export default () => <div className={css.example}>Hello World, I am being styled using CSS Modules!</div>
*/
