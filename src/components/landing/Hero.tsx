import type { CSSProperties } from 'react';
import layeredWaves from '../../assets/elements/layered_waves.svg?url';
import eel from '../../assets/elements/creatures/eel.svg?url';
import coral from '../../assets/elements/creatures/coral.svg?url';
import shark from '../../assets/elements/creatures/shark.svg?url';
import ray from '../../assets/elements/creatures/ray.svg?url';
import ray2 from '../../assets/elements/creatures/ray2.svg?url';
import bobfish from '../../assets/elements/creatures/bobfish.svg?url';
import schoolFish from '../../assets/elements/creatures/schoolFish.svg?url';
import hermitcrab from '../../assets/elements/creatures/hermitcrab.svg?url';
import jellyfish from '../../assets/elements/creatures/jellyfish.svg?url';
import seahorse from '../../assets/elements/creatures/seahorse.svg?url';
import starfish from '../../assets/elements/creatures/starfish.svg?url';

type Scene = 'desktop' | 'mobile';

type Creature = {
	name: string;
	src: string;
	scene: Scene;
	top?: number;
	bottom?: number;
	left?: number;
	right?: number;
	width: string;
	height?: string;
	z: 0 | 10 | 20;
	anim: 'animate-float' | 'animate-float-slow' | 'animate-bob' | 'animate-sway' | 'animate-drift' | 'animate-drift-slow';
	delay?: number;
	flip?: boolean;
	rotate?: number;
	origin?: 'left' | 'bottom';
	opacity?: number;
};

const creatures: Creature[] = [
	// desktop scene (breakpoint at 1024px width)
	{ name: 'shark', scene: 'desktop', src: shark, top: 14, left: 10, width: '685.83px', height: '365.9px', z: 10, anim: 'animate-drift-slow', opacity: 1.0, rotate: 12 },
	{ name: 'school-fish', scene: 'desktop', src: schoolFish, top: 40, left: 10, width: '337.92px', height: '125.15px', z: 0, anim: 'animate-drift', opacity: 1.0, rotate: 18 },
	{ name: 'school-fish-bottom', scene: 'desktop', src: schoolFish, bottom: 0, left: -5, width: '777.83px', height: '276.83px', z: 0, anim: 'animate-drift', opacity: 1.0, rotate: 20 },
	{ name: 'ray', scene: 'desktop', src: ray, top: 25, right: 6, width: '260.53px', height: '202.23px', z: 0, anim: 'animate-float-slow', opacity: 1.0, rotate: 180, flip: true },
	{ name: 'ray-2', scene: 'desktop', src: ray2, top: 30, right: 18, width: '146.04px', height: '123.09px', z: 0, anim: 'animate-float-slow', opacity: 1.0 },
	{ name: 'eel', scene: 'desktop', src: eel, top: 50, left: 8, width: '170.69px', height: '65.11px', z: 20, anim: 'animate-float', opacity: 1.0 },
	{ name: 'jellyfish-1', scene: 'desktop', src: jellyfish, top: 20, right: 34, width: '76.49px', height: '152.85px', z: 20, anim: 'animate-float', opacity: 0.5, rotate: 25 },
	{ name: 'jellyfish-2', scene: 'desktop', src: jellyfish, top: 28, right: 39, width: '87.68px', height: '83.88px', z: 20, anim: 'animate-float', opacity: 0.5, rotate: 320, flip: true },
	{ name: 'seahorse', scene: 'desktop', src: seahorse, top: 20, left: 8, width: '38.33px', height: '53px', z: 20, anim: 'animate-bob' },
	{ name: 'coral-left', scene: 'desktop', src: coral, top: 32, left: 2, width: '176px', height: '139.82px', z: 0, anim: 'animate-sway' },
	{ name: 'coral-right', scene: 'desktop', src: coral, top: 55, right: 30, width: '176px', height: '139.82px', z: 0, anim: 'animate-sway', rotate: -720 },
	{ name: 'hermit-crab', scene: 'desktop', src: hermitcrab, top: 57, right: 40, width: '55px', height: '40.33px', z: 20, anim: 'animate-drift' },
	{ name: 'bobfish', scene: 'desktop', src: bobfish, top: 55, right: 10, width: '105px', height: '79px', z: 20, anim: 'animate-bob', delay: 0.7 },
	{ name: 'starfish', scene: 'desktop', src: starfish, top: 40, left: 7, width: '38.33px', height: '53px', z: 0, anim: 'animate-drift', opacity: 1.0 },

	// mobile scene (breakpoint at below 1024px)
	{ name: 'shark-mobile', scene: 'mobile', src: shark, bottom: 0, right: 12, width: '680px', height: '360px', z: 10, anim: 'animate-drift-slow', rotate: 8 },
	{ name: 'school-fish-mobile', scene: 'mobile', src: schoolFish, top: 14, right: -8, width: '230px', height: '85px', z: 0, anim: 'animate-drift', rotate: 12 },
	{ name: 'coral-mobile', scene: 'mobile', src: coral, bottom: -4, right: -6, width: '140px', height: '108.6px', z: 0, anim: 'animate-float-slow', flip: true },
	{ name: 'hermit-crab-mobile', scene: 'mobile', src: hermitcrab, top: 30, left: 4, width: '50px', height: '42.1px', z: 20, anim: 'animate-float-slow', flip: true, delay: 1 },
	{ name: 'starfish-mobile', scene: 'mobile', src: starfish, top: 15, left: 4, width: '50px', height: '42.1px', z: 0, anim: 'animate-float-slow', flip: true, delay: 1 },
];

function wrapperStyle(c: Creature): CSSProperties {
	return {
		top: c.top !== undefined ? `${c.top}%` : undefined,
		bottom: c.bottom !== undefined ? `${c.bottom}%` : undefined,
		left: c.left !== undefined ? `${c.left}%` : undefined,
		right: c.right !== undefined ? `${c.right}%` : undefined,
		width: c.width,
		height: c.height,
		zIndex: c.z,
		opacity: c.opacity,
		transform: [c.flip && 'scaleX(-1)', c.rotate && `rotate(${c.rotate}deg)`].filter(Boolean).join(' ') || undefined,
	};
}

function imgStyle(c: Creature): CSSProperties {
	return {
		transformOrigin: c.origin,
		animationDelay: c.delay ? `${c.delay}s` : undefined,
	};
}

function Hero() {
	return (
		<div
			className="hero-container relative flex h-screen max-w-screen justify-center gap-4 overflow-hidden bg-secondary bg-start bg-no-repeat"
			style={{ backgroundImage: `url("${layeredWaves}")` }}
		>
			{creatures.map((c) => (
				<div
					key={c.name}
					className={`absolute ${c.scene === 'desktop' ? 'creature-desktop' : 'creature-mobile'}`}
					style={wrapperStyle(c)}
				>
					<img
						src={c.src}
						alt=""
						className={`h-full w-full ${c.anim}`}
						style={imgStyle(c)}
					/>
				</div>
			))}

			<div className="relative z-10 space-y-2 px-4 text-center md:space-y-4">
				<p className="font-heading text-4xl leading-none text-primary-100 sm:text-6xl md:text-8xl">
					{' '}
					PyCon Thailand 2027{' '}
				</p>
				<p className="font-heading text-3xl tracking-wide text-primary-700 sm:text-4xl md:text-6xl">
					{' '}
					18 - 19 JUNE 2027{' '}
				</p>
				<p className="font-subheading text-base tracking-[2px] text-primary-500 sm:text-lg sm:tracking-[6px] md:text-2xl md:tracking-[10px]">
					{' '}
					Avani Sukhumvit Bangkok Hotel{' '}
				</p>
			</div>
		</div>
	);
}

export default Hero;
