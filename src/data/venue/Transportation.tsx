import type { VenueImage } from './types';
import skytrainMapImg from '../../assets/venue/skytrain-map.avif?url';
import onnutStationImg from '../../assets/venue/onnut-station.avif?url';
import mrtSkytrainMapImg from '../../assets/venue/skytrainmap.avif?url';
import bkkAirportImg from '../../assets/venue/bkk-airport.avif?url';
import dmkSkywalkImg from '../../assets/venue/dmk-skywalk.avif?url';
import dmkWalkwayImg from '../../assets/venue/dmk-walkway.avif?url';
import dmkToMrtImg from '../../assets/venue/dmk-to-mrt.avif?url';

export type TransportAppLink = {
	label: string;
	href: string;
	/** Renders as an App Store / Google Play badge instead of a text link when set. */
	platform?: 'android' | 'ios';
};

export type TransportSubroute = {
	title: string;
	steps: string[];
	images?: VenueImage[];
};

export type TransportMethod = {
	id: string;
	title: string;
	summary: string[];
	steps?: string[];
	note?: string;
	images?: VenueImage[];
	appLinks?: TransportAppLink[];
	subroutes?: TransportSubroute[];
};

export type TransportationContent = {
	title: string;
	subtitle: string;
	intro: string;
	methods: TransportMethod[];
};

export const transportation: TransportationContent = {
	title: 'Transportation',
	subtitle: 'Getting to Avani Sukhumvit',
	intro:
		'There are several transportation options available in Bangkok. We recommend the following five methods of travel, known for being fast, easy, and safe. We generally do not recommend traveling by car or bus, as traffic in Bangkok is unpredictable.',
	methods: [
		{
			id: 'bts',
			title: 'BTS Skytrain',
			summary: [
				'Taking the BTS Skytrain is the fastest and easiest way to get to the venue.',
				'Avani Sukhumvit is directly connected to the BTS Skytrain Sukhumvit Line (Green Line) at On Nut Station via Exit 3. To get to the venue from the station, follow these steps:',
			],
			steps: [
				'Take the MRT Subway Sukhumvit Line (Blue Line) to Sukhumvit Station, which connects to the BTS Skytrain at Asok Station.',
				'Transfer to the BTS Skytrain and take it to On Nut Station.',
				'Exit the station at Exit 3 and follow the signs to Avani Sukhumvit Bangkok.',
			],
			images: [
				{ src: skytrainMapImg, alt: 'BTS Skytrain Sukhumvit Line map showing On Nut Station' },
				{ src: onnutStationImg, alt: 'On Nut BTS Station' },
			],
		},
		{
			id: 'mrt',
			title: 'MRT Subway',
			summary: ['To get to Avani Sukhumvit Bangkok by MRT, follow these steps:'],
			steps: [
				'Take the MRT Subway Sukhumvit Line (Blue Line) to Sukhumvit Station, which connects to the BTS Skytrain at Asok Station.',
				'Transfer to the BTS Skytrain and take it to On Nut Station.',
				'After arriving at On Nut Station, take Exit 3 and follow the signs to Avani Sukhumvit Bangkok.',
			],
			note: "There's also an app that shows how to get from station A to station B, with an estimated time and cost.",
			images: [{ src: mrtSkytrainMapImg, alt: 'Map showing how the MRT Subway connects to the BTS Skytrain' }],
			appLinks: [
				{ label: 'BKK Rail — Android', href: 'https://play.google.com/store/search?q=BKK%20Rail&c=apps', platform: 'android' },
				{ label: 'BKK Rail — iOS', href: 'https://apps.apple.com/search?term=BKK%20Rail', platform: 'ios' },
			],
		},
		{
			id: 'driving',
			title: 'Driving & Parking',
			summary: ['Parking at Avani Sukhumvit is free all day for guests.'],
			appLinks: [{ label: 'Google Maps Directions', href: 'https://maps.google.com/?q=Avani+Sukhumvit+Bangkok+Hotel' }],
		},
		{
			id: 'grab',
			title: 'Grab (Uber) / Taxi',
			summary: [
				'To travel in Bangkok by car or motorcycle, we recommend using Grab (Uber). Grab is a ride-hailing app widely used in Thailand — a convenient, reliable way to get around that lets you track your fare and journey. You can also order food through Grab.',
			],
			steps: [
				'Tell the driver to go to Avani Sukhumvit Bangkok Hotel.',
				'The ride takes around 30 minutes to 1 hour from Suvarnabhumi Airport.',
				'The ride takes around 30 to 45 minutes from the city center.',
			],
			appLinks: [
				{ label: 'Grab — Android', href: 'https://play.google.com/store/search?q=Grab&c=apps', platform: 'android' },
				{ label: 'Grab — iOS', href: 'https://apps.apple.com/search?term=Grab', platform: 'ios' },
			],
		},
		{
			id: 'airport',
			title: 'Airport',
			summary: [
				'Bangkok is served by two airports, Suvarnabhumi Airport and Don Mueang International Airport. Both offer several ways to get to the venue.',
			],
			subroutes: [
				{
					title: 'Suvarnabhumi Airport',
					steps: [
						'We recommend using Grab, or taking the Airport Rail Link (ARL).',
						'Go to the basement level and take the Airport Rail Link to BTS Phaya Thai Station (45 baht, terminal station).',
						'The whole journey takes about 90 minutes. Trains stop running at midnight.',
						'Transfer to the BTS Skytrain at Phaya Thai and take the same line to On Nut Station — see the BTS Skytrain section above for details.',
					],
					images: [{ src: bkkAirportImg, alt: 'Suvarnabhumi Airport' }],
				},
				{
					title: 'Don Mueang Airport',
					steps: [
						'We recommend using Grab, or taking the Airport Rail Link (Dark Red Line).',
						'Don Mueang is connected to the Airport Rail Link (Dark Red Line), which connects to the MRT Subway rather than the BTS Skytrain.',
						'Follow the signs to the SRT Red Line — it is not labeled "Airport Train" on the signage.',
						'A step-free walkway connects the airport to the station on the other side of a large highway.',
						'At the station, choose "Commuter" rather than "Long Distance" for trains to Bangkok.',
						'The Commuter Line is operated by the State Railways of Thailand; tickets are tokens. Buy a ticket to Bang Sue Grand Station.',
						'At Bang Sue Grand Station, follow the signs from the Commuter Line exits to the MRT Blue Line, then take the MRT to the venue — see the MRT Subway section above for details.',
					],
					images: [
						{ src: dmkWalkwayImg, alt: 'Step-free walkway from Don Mueang Airport to the station' },
						{ src: dmkSkywalkImg, alt: 'Skywalk connecting Don Mueang Airport to the train station' },
						{ src: dmkToMrtImg, alt: 'Signage directing from Bang Sue Grand Station to the MRT connection' },
					],
				},
			],
		},
	],
};
