export type ConductBlock =
	| { type: 'p'; html: string }
	| { type: 'ul'; items: string[] }
	| { type: 'h3'; text: string };

export type ConductSectionData = {
	/** Anchor id — also used by the floating SectionNav to jump/spy to this section. */
	id: string;
	title: string;
	blocks: ConductBlock[];
};

export type ConductContent = {
	lang: 'en' | 'th';
	title: string;
	tagline?: string;
	intro: ConductBlock[];
	sections: ConductSectionData[];
};
