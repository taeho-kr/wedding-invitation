import type { Post } from '@/types/content';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Heart, MessageCircle } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel';
import { useEffect, useState } from 'react';
import Typography from '../ui/typography';

export default function PostItem({ id, author, date, content, description, likes, comments }: Post) {
	const [api, setApi] = useState<CarouselApi>();
	const [current, setCurrent] = useState(0);
	const [count, setCount] = useState(0);

	const [dayDiff, setDayDiff] = useState({
		value: 0,
		unit: 'day',
	});

	useEffect(() => {
		// minute, hour, day, week, month, year
		const date1 = new Date(date);
		const date2 = new Date();
		const diff = Math.abs(date2.getTime() - date1.getTime());
		const diffSeconds = Math.ceil(diff / 1000);
		const diffMinutes = Math.ceil(diff / (1000 * 60));
		const diffHours = Math.ceil(diff / (1000 * 3600));
		const diffDays = Math.ceil(diff / (1000 * 3600 * 24));
		const diffWeeks = Math.ceil(diffDays / 7);
		const diffMonths = Math.ceil(diffDays / 30);
		const diffYears = Math.ceil(diffDays / 365);

		if (diffSeconds < 60) {
			setDayDiff({ value: diffSeconds, unit: 'second' });
		} else if (diffMinutes < 60) {
			setDayDiff({ value: diffMinutes, unit: 'minute' });
		} else if (diffHours < 24) {
			setDayDiff({ value: diffHours, unit: 'hour' });
		} else if (diffDays < 7) {
			setDayDiff({ value: diffDays, unit: 'day' });
		} else if (diffWeeks < 4) {
			setDayDiff({ value: diffWeeks, unit: 'week' });
		} else if (diffMonths < 12) {
			setDayDiff({ value: diffMonths, unit: 'month' });
		} else {
			setDayDiff({ value: diffYears, unit: 'year' });
		}
	}, [date]);

	useEffect(() => {
		if (!api) return;

		setCount(api.scrollSnapList().length);
		setCurrent(api.selectedScrollSnap() + 1);

		api.on('select', () => {
			setCurrent(api.selectedScrollSnap() + 1);
		});
	}, [api]);

	const getDateString = () => {
		switch (dayDiff.unit) {
			case 'second':
				return `${dayDiff.value}초 전`;
			case 'minute':
				return `${dayDiff.value}분 전`;
			case 'hour':
				return `${dayDiff.value}시간 전`;
			case 'day':
				return `${dayDiff.value}일 전`;
			case 'week':
				return `${dayDiff.value}주 전`;
			case 'month':
				return `${dayDiff.value}개월 전`;
			case 'year':
				return `${dayDiff.value}년 전`;
		}
	};

	return (
		<div className='flex flex-col items-start'>
			<div className='flex flex-row gap-2 items-center p-3'>
				<Avatar>
					<AvatarImage src='' />
					<AvatarFallback>AV</AvatarFallback>
				</Avatar>
				<span>{author}</span>
			</div>
			<Carousel
				className='w-full relative'
				setApi={setApi}
			>
				<CarouselContent>
					{content.map((paragraph, index) => {
						const random = Math.floor(Math.random() * 100) + 200;
						return (
							<CarouselItem key={index}>
								<img
									src={`https://picsum.photos/${random}/${random}`}
									className='w-full h-full max-w-full max-h-full'
								/>
							</CarouselItem>
						);
					})}
				</CarouselContent>
				{count > 1 && (
					<div className='absolute top-4 right-4 border rounded-full text-xs bg-[var(--background-tp)] px-2 py-0.5'>
						{current}/{count}
					</div>
				)}
			</Carousel>
			<div className='flex flex-row gap-4 p-2'>
				<div className='flex flex-row gap-2'>
					<Heart />
					<span>{likes.toLocaleString()}</span>
				</div>
				<div className='flex flex-row gap-2'>
					<MessageCircle />
					<span>{comments.toLocaleString()}</span>
				</div>
			</div>
			<div className='flex flex-row gap-1 px-2'>
				<strong>{author}</strong>
				<span>{description}</span>
			</div>
			<Typography
				variant='caption1'
				className='ml-2'
			>
				{getDateString()}
			</Typography>
		</div>
	);
}
