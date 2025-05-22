import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import Typography from '@/components/ui/typography';
import profiles from '@/data/profile.json';
import { useEffect, useState } from 'react';

interface Props {
	userID: string;
}

const NumberPannel = (number: number, label: string) => {
	return (
		<div className='flex flex-col w-full items-start'>
			<Typography>{number}</Typography>
			<Typography className='font-regular'>{label}</Typography>
		</div>
	);
};

export default function ProfilePage({ userID }: Props) {
	const [user, setUser] = useState<any>(null);

	useEffect(() => {
		const fetchUser = async () => {
			const userData = profiles.find((profile) => profile.id === userID);
			if (userData) {
				setUser(userData);
			}
		};

		fetchUser();
	}, [userID]);

	return (
		<div className='flex flex-col w-full h-full pt-3'>
			<div
				id='profile-area'
				className='flex flex-col w-full h-full items-start px-5'
			>
				<Typography variant='headline1'>{userID}</Typography>
				<div className='flex flex-row gap-4 w-full mt-5'>
					<Avatar className='w-[77px] h-[77px]'>
						<AvatarImage src={user?.image} />
						<AvatarFallback className='capitalize'>{userID.substring(0, 2)}</AvatarFallback>
					</Avatar>
					<div className='flex flex-col w-full items-start'>
						<Typography>{user?.name}</Typography>
						<div className='flex flex-row w-full mt-2'>
							{NumberPannel(0, 'Posts')}
							{NumberPannel(0, 'Followers')}
							{NumberPannel(0, 'Following')}
						</div>
					</div>
				</div>
				<Typography className='mt-2 text-[var(--ring)]'>{user?.job}</Typography>
				<Typography>{user?.comment}</Typography>
				<div className='w-full flex flex-row gap-2 my-2 items-center justify-center'>
					<Button
						variant='outline'
						className='border-white flex-1'
						size='sm'
					>
						축의 보내기
					</Button>
					<Button
						variant='outline'
						className='border-white flex-1'
						size='sm'
					>
						메시지 보내기
					</Button>
				</div>
			</div>
		</div>
	);
}
