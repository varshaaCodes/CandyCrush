const ScoreBoard = ({ score }) => {
  return (
    <div className="score-board padding" style={{ paddingLeft: '5rem'}}>
      <h2>Score Card: {score}</h2>
    </div>
  )
}

export default ScoreBoard