import Head from 'next/head'
import SearchUsers from '../components/SearchUsers'
import TweetList from '../components/TweetList'


export default function Home() {
  const {loading, tweets, error} = useExploreTweets();
  return (
    <div className={styles.container}>
      <Head>
        <title>Explore</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <SearchUsers />
        <TweetList list={tweets} />
      </main>
    </div>
  )
}