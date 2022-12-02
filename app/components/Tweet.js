import CommentIcon from "./icons/Comment";
import LikeIcon from "./icons/Like";
import RetweetIcon from "./icons/Retweet";
import UserInfo from "./UserInfo";

const Tweet = ({tweet}) => { 
  return <div className="flex flex-col border-b my-3">
    <UserInfo profileHandle={tweet.handle} />
    <div className="w-full ml-12"> 
      {tweet?.tweet}
      <div className="flex gap-x-4 py-2">
        <span className="text-pink-500 flex items-center">
          <LikeIcon className='w-5 h-5 mr-2'/>
          {tweet.likes?.length} likes
        </span>
        <span className="text-green-500 flex items-center">
          <RetweetIcon className={"w-5 h-5 mr-2"}/>
          {tweet.retweets?.length} retweets
        </span>
        <span className="text-sky-500 flex items-center">
          <CommentIcon className={"w-5 h-5 mr-2"}/>
          {tweet.comments?.length} comments
        </span>
      </div>
    </div>
  </div>
}

export default Tweet;