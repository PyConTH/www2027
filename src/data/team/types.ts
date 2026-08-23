export type TeamMemberImage = {
	src: string;
	alt: string;
};

export type TeamMember = {
	name: string;
	/** Their role on the PyCon Thailand organizing team (e.g. "Tech", "Design"). */
	role: string;
	/** Professional background — job title/employer. */
	background: string;
	description: string;
	image: TeamMemberImage;
};
