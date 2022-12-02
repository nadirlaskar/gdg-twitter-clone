import Tweet from './Tweet'
export default ({ list }) => {
    return list.map((tweet)=>{
        return <Tweet key={tweet.id} tweet={tweet} />
    })
  }