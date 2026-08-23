import type { VenueImage } from './types';
import bkkImg from '../../assets/venue/bkk.avif?url';
import avaniSpotImg from '../../assets/venue/avani-spot.avif?url';
import venueMapImg from '../../assets/venue/venue-map.avif?url';

export type VenueSection = {
	title: string;
	paragraphs: string[];
	image?: VenueImage;
};

export type VenueContent = {
	name: string;
	address: string;
	mapUrl: string;
	mapImage: VenueImage;
	intro: string;
	sections: VenueSection[];
};

export const venue: VenueContent = {
	name: 'Avani Sukhumvit Bangkok',
	address: '2089 Sukhumvit Road, Phra Khanong Nuea, Watthana, Bangkok 10260, Thailand',
	mapUrl: 'https://maps.google.com/?q=Avani+Sukhumvit+Bangkok+Hotel',
	mapImage: { src: venueMapImg, alt: 'Map showing the location of Avani Sukhumvit Bangkok' },
	intro:
		'Our event takes place on the 7th floor of Avani Sukhumvit, located in the bustling On Nut district of Bangkok. Connected directly to the BTS Skytrain via Exit 3 at On Nut Station, the venue offers seamless access to modern event facilities, city skyline views, and surrounding dining options without having to navigate street-level traffic.',
	sections: [
		{
			title: 'Bangkok',
			paragraphs: [
				'Bangkok is the capital of Thailand and one of the most popular tourist destinations in Southeast Asia. It is a city of contrasts, with the coexistence of temples and modern skyscrapers. Bangkok is also known for its vibrant street food scene and friendly people.',
			],
			image: { src: bkkImg, alt: 'A view of Bangkok' },
		},
		{
			title: 'Avani Sukhumvit',
			paragraphs: [
				'Our conference takes place on the 7th floor of Avani Sukhumvit, the first upscale 5-star hotel in the area. Enjoy stylish rooms with city skyline views, complemented by cutting-edge tech features in a top-tier event venue.',
			],
			image: { src: avaniSpotImg, alt: 'Avani Sukhumvit Bangkok hotel' },
		},
	],
};
