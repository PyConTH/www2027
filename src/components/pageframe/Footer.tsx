import pyconth27_primary_logo from '../../assets/common/pyconth27_primary_logo.svg?url';
import discordIcon from '../../assets/social/discord.svg?url';
import facebookIcon from '../../assets/social/facebook.svg?url';
import googleIcon from '../../assets/social/google.svg?url';
import messengerIcon from '../../assets/social/messenger.svg?url';
import xIcon from '../../assets/social/x.svg?url';

type SocialLink = {
	name: string;
	href: string;
	icon: string;
};

const socialLinks: SocialLink[] = [
	{ name: 'Discord', href: 'https://discord.gg/Hg7cUDzvwu', icon: discordIcon },
	{ name: 'Google', href: 'https://www.google.co.th/search?q=pycon+thailand', icon: googleIcon },
	{ name: 'Facebook', href: 'https://www.facebook.com/PyConThailand', icon: facebookIcon },
	{ name: 'X', href: 'https://twitter.com/pyconthailand', icon: xIcon },
	{ name: 'Messenger', href: 'https://m.me/PyConThailand', icon: messengerIcon },
];

function Footer() {
	return (
		<footer className="bg-primary-900 px-4 py-10 md:px-32">
			<div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center md:flex-row md:items-center md:justify-between md:text-left">
				<div>
					<img src={pyconth27_primary_logo} alt="Logo" className="mx-auto h-12 w-auto md:mx-0" />
				</div>

				<div className="flex items-center gap-4">
					{socialLinks.map((social) => (
						<a
							key={social.name}
							href={social.href}
							target="_blank"
							rel="noreferrer"
							aria-label={social.name}
							className="flex h-9 w-9 items-center bg-primary-500 justify-center rounded-full border border-primary-500 transition hover:border-primary-300 hover:bg-primary-800"
						>
							<img src={social.icon} alt="" className="h-4 w-4" />
						</a>
					))}
				</div>
			</div>

			<p className="mt-8 text-center text-sm text-primary-300">
				&copy; {new Date().getFullYear()} PyCon Thailand. All rights reserved.
			</p>
		</footer>
	);
}

export default Footer;
