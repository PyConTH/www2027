import { useEffect, useState } from 'react';
import pyconth27_primary_logo from '../../assets/common/pyconth27_primary_logo.svg?url';

type MenuType = {
	name: string;
	hrefLink?: string;
	link?: string;
	subMenu?: MenuType[];
};

export type PageSection = {
	name: string;
	href: string;
	subItems?: { name: string; href: string }[];
};

const menu: MenuType[] = [
	{
		name: 'About',
		subMenu: [
			{
				name: 'Code of conduct',
				link: '/conduct',
			},
		],
	},
	{
		name : 'Schedule',
		hrefLink: '/comingsoon',
	},
	{
		name : 'Speakers',
		hrefLink: '/comingsoon',
	},
	{
		name : 'Venue',
		hrefLink: '/venue',
	},
	{
		name: "Previous",
		subMenu: [
		{
			name: "PyCon Thailand 2025",
			hrefLink: "https://2025.th.pycon.org/",
		},
		{
			name: "PyCon Thailand 2023",
			hrefLink: "https://2023.th.pycon.org/",
		},
		{
			name: "PyCon Thailand 2021",
			hrefLink: "https://2021.th.pycon.org/",
		},
		{
			name: "PyCon Thailand 2019",
			hrefLink: "https://2019.th.pycon.org/",
		},
		{
			name: "PyCon Thailand 2018",
			hrefLink: "https://2019.th.pycon.org/pycon2018/",
		},
		],
	},
];

const SOLID_SCROLL_THRESHOLD = 10;

// Single CTA slot shown in the nav (desktop) and drawer (mobile). Only one
// button is ever shown to switch it from "Buy Ticket" to "Submit Proposal"
// just change label/href here, both places pick it up.
// TODO: Buy Ticket replace href with the "Eventpop event link" once it's live.
// TODO: Submit Proposal replace href with the "Sessionize CFP link" once it's live !
const ctaButton = {
	label: 'Buy Ticket',
	href: 'https://www.eventpop.me/e/168229',
};

// Hide the CTA button until it's ready to go live (flip back to true to show it again).
const SHOW_CTA_BUTTON = false;

type CtaButtonProps = {
	className?: string;
};

const CtaButton = ({ className = '' }: CtaButtonProps) => {
	if (!SHOW_CTA_BUTTON) return null;

	return (
		<a
			href={ctaButton.href}
			target="_blank"
			rel="noopener noreferrer"
			className={`bg-primary-500 font-subheading tracking-wide text-primary-900 text-lg transition hover:text-primary-900 hover:bg-cream ${className}`}
		>
			{ctaButton.label}
		</a>
	);
};

type NavbarProps = {
	sections?: PageSection[];
};

function Navbar({ sections }: NavbarProps) {
	const [openMobileNav, setOpenMobileNav] = useState(false);
	const [openSubMenu, setOpenSubMenu] = useState<number | null>(null);
	const [solidNavbar, setSolidNavbar] = useState(false);

	useEffect(() => {
		const handleScroll = () => setSolidNavbar(window.scrollY > SOLID_SCROLL_THRESHOLD);
		handleScroll();
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const toggleOpenMobileNav = () => setOpenMobileNav((cur) => !cur);
	const toggleSubMenu = (index: number) =>
		setOpenSubMenu((cur) => (cur === index ? null : index));

	const renderSubMenu = (subMenu: MenuType[]) => (
		<ul className="flex flex-col gap-1 py-1 text-primary-100 md:absolute md:top-full md:left-0 md:min-w-40 md:rounded-lg md:border md:border-primary-100 md:bg-white md:p-1.5 md:text-primary-700 md:shadow-lg">
			{subMenu.map((item, index) => (
				<li key={`submenu-item-${index}`}>
					<a
						href={item.link ?? item.hrefLink ?? '#'}
						className="block rounded-md px-3 py-2 text-sm transition hover:bg-cream hover:text-primary-900"
					>
						{item.name}
					</a>
				</li>
			))}
		</ul>
	);

	const renderMenu = (items: MenuType[], variant: 'desktop' | 'mobile' = 'desktop') =>
		items.map((item, index) => {
			const textColor = variant === 'mobile' ? 'text-primary-300' : solidNavbar ? 'text-primary-300' : 'text-primary-900';
			return (
				<li key={`menu-item-${index}`} className="relative">
					{item.subMenu ? (
						<>
							<button
								type="button"
								onClick={() => toggleSubMenu(index)}
								className={`flex w-full items-center justify-between gap-1.5 text-lg rounded-md px-3 py-2 text-left font-semibold transition hover:bg-cream hover:text-primary-900 md:w-auto ${textColor}`}
								aria-expanded={openSubMenu === index}
							>
								{item.name}
								<svg
									width="19"
									height="10"
									viewBox="0 0 19 10"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									className={`h-3 w-3 transition-transform ${openSubMenu === index ? 'rotate-180' : ''}`}
								>
									<path
										d="M9.47188 9.47211C9.47188 5.06809 5.87348 1.5058 1.4248 1.5058M9.47185 9.39136C9.47185 4.98734 13.0702 1.42505 17.5189 1.42505"
										stroke="currentColor"
										strokeWidth="2.01176"
									/>
								</svg>
							</button>
							{openSubMenu === index && renderSubMenu(item.subMenu)}
						</>
					) : (
						<a
							href={item.link ?? item.hrefLink ?? '#'}
							className={`block rounded-md px-3 py-2 font-semibold text-lg transition hover:bg-cream hover:text-primary-900 ${textColor}`}
						>
							{item.name}
						</a>
					)}
				</li>
			);
		});

	return (
		<header
			className={`fixed top-0 left-0 z-50 w-full transition-colors ${solidNavbar ? 'bg-primary-900' : 'bg-transparent'}`}
		>
			<nav className="mx-auto flex items-center justify-between px-4 py-3 md:px-32">

				<a href="/" className="flex items-center">
					<img src={pyconth27_primary_logo} alt="Logo" className="h-10 w-auto" />
				</a>

				<ul className="hidden items-center gap-6 md:flex">{renderMenu(menu)}</ul>

				<div className="hidden md:block">
					<CtaButton className="inline-block px-9 py-1" />
				</div>

				<button
					type="button"
					onClick={toggleOpenMobileNav}
					aria-label="Toggle navigation menu"
					aria-expanded={openMobileNav}
					className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
				>
					<span
						className={`h-0.5 w-6 transition ${solidNavbar ? 'bg-primary-300' : 'bg-primary-900'} ${openMobileNav ? 'translate-y-2 rotate-45' : ''}`}
					/>
					<span
						className={`h-0.5 w-6 transition ${solidNavbar ? 'bg-primary-300' : 'bg-primary-900'} ${openMobileNav ? 'opacity-0' : ''}`}
					/>
					<span
						className={`h-0.5 w-6 transition ${solidNavbar ? 'bg-primary-300' : 'bg-primary-900'} ${openMobileNav ? '-translate-y-2 -rotate-45' : ''}`}
					/>
				</button>
			</nav>

			{/* Mobile Slide in Drawer */}
			<div
				className={`fixed inset-0 z-40 md:hidden ${openMobileNav ? '' : 'pointer-events-none'}`}
				aria-hidden={!openMobileNav}
			>
				
				<div
					onClick={() => setOpenMobileNav(false)}
					className={`absolute inset-0 bg-primary-900/70 transition-opacity duration-300 ${openMobileNav ? 'opacity-100' : 'opacity-0'}`}
				/>
				<div
					data-lenis-prevent
					className={`absolute top-0 right-0 h-full w-72 max-w-[80%] overflow-y-auto border-l border-primary-700 bg-primary-900 px-4 pt-24 pb-8 shadow-xl transition-transform duration-300 ${openMobileNav ? 'translate-x-0' : 'translate-x-full'}`}
				>
					{sections && sections.length > 0 && (
						<>
							<p className="px-3 text-xs font-semibold tracking-wide text-primary-100/60 uppercase">
								On this page
							</p>
							<ul className="mt-1 flex flex-col gap-1">
								{sections.map((section) => (
									<li key={section.name}>
										<a
											href={section.href}
											onClick={() => setOpenMobileNav(false)}
											className="block rounded-md px-3 py-2 text-lg font-semibold text-primary-300 transition hover:bg-cream hover:text-primary-900"
										>
											{section.name}
										</a>
										{section.subItems && (
											<ul className="ml-3 flex flex-col gap-1 border-l border-primary-700 pl-3">
												{section.subItems.map((sub) => (
													<li key={sub.name}>
														<a
															href={sub.href}
															onClick={() => setOpenMobileNav(false)}
															className="block rounded-md px-3 py-1 text-base text-primary-100/80 transition hover:bg-cream hover:text-primary-900"
														>
															{sub.name}
														</a>
													</li>
												))}
											</ul>
										)}
									</li>
								))}
							</ul>
							<div className="my-3 border-t border-primary-700" />
						</>
					)}
					<button
						type="button"
						onClick={() => setOpenMobileNav(false)}
						aria-label="Close navigation menu"
						className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center text-primary-300 transition hover:text-white"
					>
						<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M1 1L17 17M17 1L1 17"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
							/>
						</svg>
					</button>
					<ul className="flex flex-col gap-1">{renderMenu(menu, 'mobile')}</ul>
					
					<CtaButton className="mt-4 block w-full px-9 py-2 text-center" />

				</div>
			</div>
		</header>
	);
}

export default Navbar;
