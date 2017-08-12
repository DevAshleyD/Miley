import React from 'react'

const TrendingWidget = ({trends}) => (
  <div className="trends widget">
    <h2 className="title">Trending Now</h2>
    <ul>
      {trends.map(trend => (
        <li key={trend.id}>
          <a href={trend.url}>#{trend.name}</a>
        </li>
      ))}
    </ul>
  </div>
)

export default TrendingWidget
