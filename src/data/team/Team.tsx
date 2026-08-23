import type { TeamMember } from './types';
import placeholderImg from '../../assets/common/pyconth27_primary_logo.svg?url';

// Replace the placeholder 'image' below with a real photo once one's
// Drop it in `src/assets/team/` and import it here instead
// (ex. `import janeImg from '../../assets/team/jane.avif?url';`).

export const ourTeam: TeamMember[] = [
	{
		name: 'Jane Doe',
		role: 'Tech',
		background: 'Consulting Engineer at MongoDB Singapore',
		description: 'Jane is a practitioner of PyCon Thailand.',
		image: { src: placeholderImg, alt: 'Jane Doe (placeholder photo)' },
	},
];

export const proposalReviewers: TeamMember[] = [];
