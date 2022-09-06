import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import coffeeStoresData from '../../data/coffee-stores.json';

export function getStaticProps(staticProps) {
	const params = staticProps.params;
	console.log('params', params);
	return {
		props: {
			coffeeStore: coffeeStoresData.find((coffeeStore) => {
				return coffeeStore.id.toString() === params.id;
			})
		}
	};
}

export function getStaticPaths() {
	const paths = coffeeStoresData.map((coffeeStore) => {
		return {
			params: {
				id: coffeeStore.id.toString()
			}
		};
	});

	return {
		paths,
		fallback: true
	};
}

const CoffeeStore = (props) => {
	const router = useRouter();
	console.log('props', props);
	console.log('Router', router);

	const { address, name, neighborhood } = props.coffeeStore;

	if (router.isFallback) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<Head>
				<title>{name}</title>
			</Head>
			<Link href='/'>
				<a>Back to home</a>
			</Link>
			<p>{address}</p>
			<p>{name}</p>
			<p>{neighborhood}</p>
		</div>
	);
};

export default CoffeeStore;
