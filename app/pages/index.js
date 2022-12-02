import Layout from "../components/Layout";
import TweetList from "../components/TweetList";
import useExploreTweets from '../hooks/useExploreTweets';

export default function Home() {
  const {tweets} = useExploreTweets();
  return (
    <Layout title="Explore">
      <h1 className="py-3">Explore</h1>
      <div className="h-screen w-full">
        <TweetList list={tweets} />
      </div>
    </Layout>
  )
}