export default  ({list}) => {
    return list.map((tweet)=>{
        return <div>{tweet?.tweet}</div>
    })
  }