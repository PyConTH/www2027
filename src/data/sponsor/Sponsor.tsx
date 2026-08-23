import type { SponsorTierGroup } from './types';
import placeholderImg from '../../assets/common/pyconth27_primary_logo.svg?url';

// drop each sponsor's logo in `src/assets/sponsor/` and import it
// (ex. `import acmeImg from '../../assets/sponsor/acme.avif?url';`), same as the team photos. 
// Tier order here is the display order you can keep it as-is unless the tier order itself changes.

export const sponsors: SponsorTierGroup[] = [
	{
		tier: 'Headline',
		sponsors: [
			{
				name: 'PyconTH27',
				logo: { src: placeholderImg, alt: 'PyconTH27. (placeholder logo)' },
				href: '#',
			},
		],
	},
	{
		tier: 'Python Software Foundation',
		sponsors: [
			{
				name: 'PyconTH27',
				logo: { src: placeholderImg, alt: 'PyconTH27 (placeholder logo)' },
				href: '#',
			},
		],
	},
	{
		tier: 'Platinum',
		sponsors: [
			{
				name: 'PyconTH27',
				logo: { src: placeholderImg, alt: 'PyconTH27 (placeholder logo)' },
				href: '#',
			},
		],
	},
	{
		tier: 'Gold',
		sponsors: [
			{
				name: 'PyconTH27',
				logo: { src: placeholderImg, alt: 'PyconTH27 (placeholder logo)' },
				href: '#',
			},
		],
	},
	{
		tier: 'Silver',
		sponsors: [
			{
				name: 'PyconTH27',
				logo: { src: placeholderImg, alt: 'PyconTH27 (placeholder logo)' },
				href: '#',
			},
		],
	},
	{
		tier: 'Patron',
		sponsors: [
			{
				name: 'PyconTH27',
				logo: { src: placeholderImg, alt: 'PyconTH27 (placeholder logo)' },
				href: '#',
			},
		],
	},
	{
		tier: 'Community Partner',
		sponsors: [
			{
				name: 'PyconTH27',
				logo: { src: placeholderImg, alt: 'PyconTH27 (placeholder logo)' },
				href: '#',
			},
		],
	},
];
