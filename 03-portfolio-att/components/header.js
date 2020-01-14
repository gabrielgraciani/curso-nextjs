import Raect from 'react';
import Link from 'next/link';


const Header = () => {
	return(
		<div id="wrap_header">
			<div className="indent">
				<div className="logo">
					<h2 class="bold">GABRIEL THOMAZ GRACIANI</h2>
				</div>

				<ul className="menu">
					<Link href="/">
						<li>HOME</li>
					</Link>
					<Link href="/sobre">
						<li>SOBRE</li>
					</Link>
					<Link href="/portfolio">
						<li>PORTFOLIO</li>
					</Link>
					<Link href="/blog">
						<li>BLOG</li>
					</Link>
					<Link href="/cv">
						<li>CV</li>
					</Link>
					<Link href="/login">
						<li>LOGIN</li>
					</Link>
					<Link href="/logout">
						<li>LOGOUT</li>
					</Link>
				</ul>
			</div>
		</div>
	)
};

export default Header;