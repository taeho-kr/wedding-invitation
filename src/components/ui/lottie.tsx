import { useRef, useEffect, memo } from 'react';
import lottie, { type AnimationItem } from 'lottie-web';

interface Props {
	src: string;
	loop?: boolean;
	autoplay?: boolean;
	className?: string;
}

const Lottie = memo(
	({ src, loop = true, autoplay = true, className }: Props) => {
		const container = useRef<HTMLDivElement | null>(null);
		const player = useRef<AnimationItem | null>(null);
		const [, assetsPath, name] = /(.+)\/(.+)\..+/.exec(src)!;

		useEffect(() => {
			if (container.current == null) {
				return;
			}

			player.current = lottie.loadAnimation({
				container: container.current,
				loop,
				autoplay,
				renderer: 'svg',
				path: src,
				assetsPath,
				name,
				rendererSettings: {
					progressiveLoad: true,
					hideOnTransparent: true,
				},
			});

			return () => {
				player.current?.destroy();
			};
		}, [assetsPath, autoplay, loop, name, src]);

		return (
			<div
				className={className}
				ref={container}
			/>
		);
	},
	(prev, next) => {
		return prev.src === next.src && prev.loop === next.loop && prev.autoplay === next.autoplay;
	}
);

export default Lottie;
