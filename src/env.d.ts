/// <reference types="astro/client" />

import type Lenis from 'lenis';

declare global {
	interface Window {
		/*
			The site-wide Lenis instance mounted by PageFrame, if any page has it.
			Named `lenisInstance` (not `lenis`) because the `lenis` package itself
			reserves `window.lenis` for its own internal version marker.
		*/
		lenisInstance?: Lenis;
	}
}
