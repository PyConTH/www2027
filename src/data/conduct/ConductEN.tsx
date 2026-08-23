import type { ConductContent } from './types';

const CC_LICENSE_URL = 'https://creativecommons.org/licenses/by-sa/3.0/deed.en';

export const conductEN: ConductContent = {
	lang: 'en',
	title: 'Code of Conduct',
	intro: [
		{
			type: 'p',
			html: "PyCon Thailand is dedicated to providing an inclusive and harassment-free experience for participants at all of our events. It is a community conference intended for networking and collaboration in the developer community.",
		},
		{
			type: 'p',
			html: "We value the participation of each member of the Python community and want all attendees to have an enjoyable and fulfilling experience. Accordingly, all attendees are expected to show respect and courtesy to other attendees throughout the conference and at all conference events, whether officially sponsored by PyCon or not.",
		},
		{
			type: 'p',
			html: "To make clear what is expected, all delegates/attendees, speakers, exhibitors, organizers and volunteers at any PyCon event are required to conform to the following Code of Conduct. Organizers will enforce this code throughout the event. The Code of Conduct for PyCon Thailand is set forth compliant to Python Software Foundation's Code of Conduct.",
		},
	],
	sections: [
		{
			id: 'in-short-en',
			title: 'In Short',
			blocks: [
				{
					type: 'p',
					html: 'PyCon Thailand is dedicated to providing a harassment-free conference experience for everyone, regardless of gender, sexual orientation, disability, physical appearance, body size, race, or religion. We do not tolerate harassment of conference participants in any form.',
				},
				{
					type: 'p',
					html: 'All communication should be appropriate for a professional audience including people of many different backgrounds.',
				},
				{
					type: 'ul',
					items: [
						'Be kind to others.',
						'Do not insult or put down other attendees.',
						'Behave professionally.',
						'Remember that harassment and sexist, racist, or exclusionary jokes are not tolerated for PyCon.',
					],
				},
				{
					type: 'p',
					html: 'Attendees violating these rules may be asked to leave the conference without a refund at the sole discretion of the conference organizers.',
				},
				{ type: 'p', html: 'Thank you for helping make this a welcoming, friendly event for all.' },
			],
		},
		{
			id: 'our-community-en',
			title: 'Our Community',
			blocks: [
				{
					type: 'p',
					html: "Members of the Python community are open, considerate, and respectful. Behaviours that reinforce these values contribute to a positive environment, and include:",
				},
				{
					type: 'ul',
					items: [
						"Being open. Members of the community are open to collaboration, whether it's on PEPs, patches, problems, or otherwise.",
						"Focusing on what is best for the community. We're respectful of the processes set forth in the community, and we work within them.",
						"Acknowledging time and effort. We're respectful of the volunteer efforts that permeate the Python community. We're thoughtful when addressing the efforts of others, keeping in mind that often times the labor was completed simply for the good of the community.",
						"Being respectful of differing viewpoints and experiences. We're receptive to constructive comments and criticism, as the experiences and skill sets of other members contribute to the whole of our efforts.",
						"Showing empathy towards other community members. We're attentive in our communications, whether in person or online, and we're tactful when approaching differing views.",
						'Being considerate. Members of the community are considerate of their peers – other Python users.',
						"Being respectful. We're respectful of others, their positions, their skills, their commitments, and their efforts.",
						'Gracefully accepting constructive criticism. When we disagree, we are courteous in raising our issues.',
						"Using welcoming and inclusive language. We're accepting of all who wish to take part in our activities, fostering an environment where anyone can participate and everyone can make a difference.",
					],
				},
			],
		},
		{
			id: 'our-standards-en',
			title: 'Our Standards',
			blocks: [
				{
					type: 'p',
					html: 'Every member of our community has the right to have their identity respected. The Python community is dedicated to providing a positive experience for everyone, regardless of age, gender identity and expression, sexual orientation, disability, physical appearance, body size, ethnicity, nationality, race, or religion (or lack thereof), education, or socio-economic status.',
				},
			],
		},
		{
			id: 'inappropriate-behavior-en',
			title: 'Inappropriate Behavior',
			blocks: [
				{ type: 'p', html: 'Examples of unacceptable behavior by participants include:' },
				{
					type: 'ul',
					items: [
						'Harassment of any participants in any form',
						'Deliberate intimidation, stalking, or following',
						'Logging or taking screenshots of online activity for harassment purposes',
						"Publishing others' private information, such as a physical or electronic address, without explicit permission",
						'Violent threats or language directed against another person',
						'Incitement of violence or harassment towards any individual, including encouraging a person to commit suicide or to engage in self-harm',
						'Creating additional online accounts in order to harass another person or circumvent a ban',
						'Sexual language and imagery in online communities or in any conference venue, including talks',
						'Insults, put downs, or jokes that are based upon stereotypes, that are exclusionary, or that hold others up for ridicule',
						'Excessive swearing',
						'Unwelcome sexual attention or advances',
						'Unwelcome physical contact, including simulated physical contact (eg, textual descriptions like "hug" or "backrub") without consent or after a request to stop',
						'Pattern of inappropriate social contact, such as requesting/assuming inappropriate levels of intimacy with others',
						'Sustained disruption of online community discussions, in-person presentations, or other in-person events',
						'Continued one-on-one communication after requests to cease',
						'Other conduct that is inappropriate for a professional audience including people of many different backgrounds',
					],
				},
				{
					type: 'p',
					html: 'Community members asked to stop any inappropriate behavior are expected to comply immediately.',
				},
			],
		},
		{
			id: 'weapons-policy-en',
			title: 'Weapons Policy',
			blocks: [
				{
					type: 'p',
					html: 'No weapons are allowed at PyCon or Python Software Foundation events. Weapons include but are not limited to explosives (including fireworks), guns, and large knives such as those used for hunting or display, as well as any other item used for the purpose of causing injury or harm to others. Anyone seen in possession of one of these items will be asked to leave immediately, and will only be allowed to return without the weapon.',
				},
			],
		},
		{
			id: 'consequences-en',
			title: 'Consequences',
			blocks: [
				{
					type: 'p',
					html: 'If a participant engages in behavior that violates this code of conduct, the Python community Code of Conduct team may take any action they deem appropriate, including warning the offender or expulsion from the community and community events with no refund of event tickets. The full list of consequences for inappropriate behavior is listed in the Enforcement Procedures.',
				},
			],
		},
		{
			id: 'scope-en',
			title: 'Scope',
			blocks: [
				{ type: 'p', html: 'This Code of Conduct applies to the following people at PyCon Thailand:' },
				{
					type: 'ul',
					items: [
						'PyCon TH and PyCon APAC members',
						'participating volunteers',
						'speakers',
						'panelists',
						'tutorial or workshop leaders',
						'people invited to meetings',
						'exhibitors',
						'organizers',
						'volunteers',
						'all attendees',
					],
				},
				{ type: 'p', html: 'The Code of Conduct applies in official venue event spaces, including:' },
				{
					type: 'ul',
					items: [
						'exhibit hall or vendor tabling area',
						'panel and presentation rooms',
						'sprint rooms',
						'tutorial or workshop rooms',
						'meeting rooms',
						'staff areas',
						'meal areas',
						'party suites',
						'walkways, hallways, elevators, and stairs that connect any of the above spaces',
					],
				},
				{
					type: 'p',
					html: 'The Code of Conduct applies to interactions with official event accounts on social media spaces and phone applications, including:',
				},
				{
					type: 'ul',
					items: [
						'comments made on official conference phone apps',
						'comments made on event video hosting services',
						'comments made on the official event hashtag or panel hashtags',
					],
				},
				{ type: 'p', html: 'Event organizers will enforce this code throughout the event.' },
			],
		},
		{
			id: 'pycon-online-spaces-en',
			title: 'PyCon Online Spaces',
			blocks: [
				{ type: 'p', html: 'This Code of Conduct applies to the following online spaces:' },
				{
					type: 'ul',
					items: [
						'All PyCon Thailand mailing lists hosted on https://th.pycon.org/ and pyconthailand.com',
						'All online social media channels and chatrooms administered by PyCon Thailand',
					],
				},
				{
					type: 'p',
					html: 'This Code of Conduct applies to the following people in official PyConTH online spaces:',
				},
				{
					type: 'ul',
					items: ['admins of the online space', 'maintainers', 'reviewers', 'contributors', 'all community members'],
				},
				{
					type: 'p',
					html: 'The PyCon Thailand Admin work group will receive and evaluate incident reports from the online communities listed above. The PyCon Thailand Admin work group will work with online community administrators/moderators to suggest actions to take in response to a report. In cases where the administrators/moderators disagree on the suggested resolution for a report, the PyCon Thailand Admin work group may choose to notify the Python Software Foundation Code of Conduct work group or the Python Software Foundation board.',
				},
			],
		},
		{
			id: 'contact-us-en',
			title: 'Contact us',
			blocks: [
				{
					type: 'p',
					html: 'If you believe that someone is violating the code of conduct, or have any other concerns, please contact a member of the event staff immediately. They can be reached by emailing <a href="mailto:contact@pyconthailand.org">contact@pyconthailand.org</a>.',
				},
				{ type: 'p', html: 'In case of a conflict of interest, you can individually contact:' },
				{ type: 'ul', items: ['Georgi Ker', 'Dylan Jay'] },
				{
					type: 'p',
					html: 'Conference staff will be happy to help participants contact hotel/venue security or local law enforcement, provide escorts, or otherwise assist any attendee to feel safe for the duration of the conference. We value your attendance.',
				},
			],
		},
		{
			id: 'procedure-for-handling-incidents-en',
			title: 'Procedure for Handling Incidents',
			blocks: [
				{
					type: 'ul',
					items: ['Procedure For Reporting Code of Conduct Incidents', 'Enforcement Procedures'],
				},
			],
		},
		{
			id: 'license-en',
			title: 'License',
			blocks: [
				{
					type: 'p',
					html: `This Code of Conduct is licensed under the <a href="${CC_LICENSE_URL}" target="_blank" rel="noreferrer">Creative Commons Attribution-ShareAlike 3.0 Unported License</a>.`,
				},
			],
		},
		{
			id: 'attributions-en',
			title: 'Attributions',
			blocks: [
				{
					type: 'p',
					html: 'This Code of Conduct was forked from the example policy from the Geek Feminism wiki, created by the Ada Initiative and other volunteers, which is under a Creative Commons Zero license.',
				},
				{ type: 'p', html: 'Additional new language and modifications were created by Sage Sharp of Otter Tech.' },
				{ type: 'p', html: 'Language was incorporated from the following Codes of Conduct:' },
				{
					type: 'ul',
					items: [
						'Affect Conf Code of Conduct, licensed under a Creative Commons Attribution-ShareAlike 3.0 Unported License.',
						'Citizen Code of Conduct, licensed under a Creative Commons Attribution-ShareAlike 3.0 Unported License.',
						'Contributor Covenant version 1.4, licensed Creative Commons Attribution 4.0 License.',
						'Django Project Code of Conduct, licensed under a Creative Commons Attribution 3.0 Unported License.',
						'LGBTQ in Tech Slack Code of Conduct, licensed under a Creative Commons Zero License.',
						'PyCon 2018 Code of Conduct, licensed under a Creative Commons Attribution 3.0 Unported License.',
						'Rust Code of Conduct',
						'Python Code of Conduct',
						'PyCon US 2021 Code of Conduct',
					],
				},
			],
		},
	],
};
