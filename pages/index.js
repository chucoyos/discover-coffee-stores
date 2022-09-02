import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

import Banner from '../components/banner';
import Card from '../components/card';

import coffeeStores from '../data/coffee-stores.json';

export default function Home() {
	const handleOnBannerBtnClick = () => {
		console.log('Hi banner button');
	};
	return (
		<div className={styles.container}>
			<Head>
				<title>Coffee Connoisseur</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className={styles.main}>
				<Banner
					buttonText='View stores nearby'
					handleOnClick={handleOnBannerBtnClick}
				/>
				<div className={styles.heroImage}>
					<Image
						src='/static/hero-image.png'
						alt='hero-image'
						width={700}
						height={400}
					/>
					<div className={styles.cardLayout}>
						{coffeeStores.map((coffeeStore) => {
							return (
								<Card
									key=''
									className={styles.card}
									name={coffeeStore.name}
									imgUrl={coffeeStore.imgUrl}
									href={`/coffee-store/${coffeeStore.id}`}
								/>
							);
						})}
					</div>
				</div>
			</main>

			<footer className={styles.footer}></footer>
		</div>
	);
}
