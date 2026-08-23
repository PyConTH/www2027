export type SponsorLogo = {
	src: string;
	alt: string;
};

export type Sponsor = {
	name: string;
	logo: SponsorLogo;
	href: string;
};

export type SponsorTierGroup = {
	tier: string;
	sponsors: Sponsor[];
};
