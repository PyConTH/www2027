import type { ReactNode } from 'react';
import layeredWaves from '../assets/elements/layered_waves.svg?url';

type HeaderProps = {
	eyebrow: string;
	title: string;
	tagline?: string;
 	taglineHref?: string;
 	fullHeight?: boolean;
	children?: ReactNode;
};

function Header({ eyebrow, title, tagline, taglineHref, fullHeight = false, children }: HeaderProps) {
	return (
		<header
			className={`header-band ${fullHeight ? 'h-screen' : ''}`}
			style={{
				backgroundImage: `linear-gradient(to bottom, transparent 60%, var(--color-primary-900) 100%), url("${layeredWaves}")`,
			}}
		>
			<div className="header-content">
				<p className="page-eyebrow">{eyebrow}</p>
				<h1 className="page-title">{title}</h1>
				{tagline && (
					<p className="page-tagline">
						{taglineHref ? (
							<a href={taglineHref} target="_blank" rel="noreferrer">
								{tagline}
							</a>
						) : (
							tagline
						)}
					</p>
				)}
				{children}
			</div>
		</header>
	);
}

export default Header;
