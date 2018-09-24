import Link from 'next/link'

export default () => <div>
	<Link href='/page2'>
		<a>Click to reproduce</a>
	</Link>
</div>

/* With CSS Modules */
/*
import css from "../style.css"

export default () => <div className={css.example}>Hello World, I am being styled using CSS Modules!</div>
*/
