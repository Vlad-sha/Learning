function WhatIsLove(props) {
  const { game, part, isGame } = props
  console.log(props)

  return isGame ? (
    <h1>{`I love ${game} ${part}`}</h1>
  ) : (
    <h2>I don't play games</h2>
  )
}

export default WhatIsLove
