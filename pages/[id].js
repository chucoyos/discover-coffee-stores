import { useRouter } from 'next/router';
import Head from 'next/head';

const Dynamic = () => {
	const router = useRouter();
	return (
		<div>
			<Head>
				<title>{router.query.id}</title>
			</Head>
			Page {router.query.id} rendered for a http://localhost:3000/
			{router.query.id}
		</div>
	);
};

export default Dynamic;
