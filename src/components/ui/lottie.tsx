import { useEffect, useState } from 'react';
import { DotLottie, DotLottieReact } from '@lottiefiles/dotlottie-react';

interface Props {
	src: string;
	loop?: boolean;
	autoplay?: boolean;
	speed?: number;
	className?: string;
	style?: React.CSSProperties;
	onComplete?: () => void;
}

const Lottie = ({ src, loop = true, speed = 1, autoplay = true, className, style, onComplete }: Props) => {
	const [dotLottie, setDotLottie] = useState<DotLottie | null>(null);
	const dotLottieRefCallback = (dotLottie: any) => {
		setDotLottie(dotLottie);
	};

	useEffect(() => {
		if (dotLottie) {
			dotLottie.addEventListener('frame', onFrame);
		}

		return () => {
			if (dotLottie) {
				dotLottie.removeEventListener('frame', onFrame);
			}
		};
	}, [dotLottie]);

	const onFrame = ({ currentFrame }: { currentFrame: number }) => {
		const c = Math.floor(currentFrame);
		const t = Math.floor(dotLottie!.totalFrames);
		if (c === t) onComplete?.();
	};

	return (
		<DotLottieReact
			className={className}
			style={style}
			src={src}
			autoplay={autoplay}
			loop={loop}
			speed={speed}
			dotLottieRefCallback={dotLottieRefCallback}
		/>
	);
};

export default Lottie;
