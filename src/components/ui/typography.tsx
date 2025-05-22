import { cn } from '@/lib/utils';
import type { CSSProperties, ReactNode } from 'react';

interface TypographyProps {
	variant?:
		| 'display1'
		| 'display2'
		| 'title2'
		| 'title3'
		| 'headline1'
		| 'label1'
		| 'label2'
		| 'heading1'
		| 'heading2'
		| 'caption1'
		| 'caption2'
		| 'body1'
		| 'body2';
	children: ReactNode;
	className?: string;
	style?: CSSProperties;
	title?: string;
}

const Typography = ({
	variant = 'label1',
	children,
	className,
	style,
	title,
	...props
}: TypographyProps & React.ComponentProps<'span'>) => {
	let computedClassName = '';

	switch (variant) {
		case 'display1':
			computedClassName = 'text-[3.5rem] font-bold';
			break;
		case 'display2':
			computedClassName = 'text-[2.5rem] font-bold';
			break;
		case 'title2':
			computedClassName = 'text-[1.75rem] font-semibold';
			break;
		case 'title3':
			computedClassName = 'text-[1.25rem] font-semibold';
			break;
		case 'headline1':
			computedClassName = 'text-[1.125rem] font-bold';
			break;
		case 'label1':
			computedClassName = 'text-[0.875rem] font-normal ';
			break;
		case 'label2':
			computedClassName = 'text-[0.875rem] font-normal ';
			break;
		case 'heading1':
			computedClassName = 'text-[1.375rem] font-bold';
			break;
		case 'heading2':
			computedClassName = 'text-[1.25rem] font-bold';
			break;
		case 'caption1':
			computedClassName = 'text-[0.75rem] font-normal text-[var(--shy)]';
			break;
		case 'caption2':
			computedClassName = 'text-[0.6875rem] font-normal text-[var(--shy)]';
			break;
		case 'body1':
			computedClassName = 'text-[1rem] font-medium';
			break;
		case 'body2':
			computedClassName = 'text-[0.9375rem] font-light';
			break;
		default:
			break;
	}

	return (
		<span
			className={cn(computedClassName, className)}
			style={style}
			title={title}
			{...props}
		>
			{children}
		</span>
	);
};

export default Typography;
