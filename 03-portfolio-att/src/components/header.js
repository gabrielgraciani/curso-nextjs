import React from 'react';
import Link from 'next/link';

const Header = () => (
	<div id="wrap_header">
		<div className="indent">
			<div className="logo">
				<Link href="/">
					<h2>GABRIEL THOMAZ GRACIANI</h2>
				</Link>
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
				<Link href="/cv">
					<li>CV</li>
				</Link>
			</ul>
		</div>
	</div>
);

export default Header;