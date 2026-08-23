import { useEffect, type ReactNode } from 'react';
import Lenis from 'lenis';
import Navbar, { type PageSection } from './Navbar';
import Footer from './Footer';

type PageFrameProps = {
	children: ReactNode;
	sections?: PageSection[];
};

function PageFrame({ children, sections }: PageFrameProps) {
	{/* Lenis Smooth Scroll */}
	useEffect(() => {
		const lenis = new Lenis({
			autoRaf: true,
			anchors: true,
		});
 		window.lenisInstance = lenis;

		return () => {
			lenis.destroy();
			window.lenisInstance = undefined;
		};
	}, []);

	return (
		<>
			<Navbar sections={sections} />
				{children}
			<Footer />
		</>
	);
}

export default PageFrame;
