import PostItem from '@/components/content/postItem';

export default function MainPage() {
	return (
		<div className='flex flex-col gap-3 w-full h-full'>
			{new Array(10).fill(0).map((_, index) => (
				<PostItem
					id={index}
					key={index}
					author='1'
					content={new Array(Math.floor(Math.random() * 10) + 1).fill(0).map((_, index) => index.toString())}
					comments={Math.floor(Math.random() * 100)}
					date='2023-10-01'
					description={'test' + index}
					likes={Math.floor(Math.random() * 1000)}
				/>
			))}
		</div>
	);
}
