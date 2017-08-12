import React from 'react'

const ActivitiesWidget = ({activities}) => (
  <div className="activities">
    {activities.map(activity => (
      <div key={activity.id} className="activity">
        <span className="avatar">
          <a href={activity.url}>
            <img src={activity.picture} alt={activity.title} width="48" />
          </a>
        </span>

        <div className="details">
          <a href={activity.url}>{activity.username}</a>&nbsp;
           <span>{activity.title}</span>&nbsp;
           <a href={activity.url}>{activity.target}</a>&nbsp;
           <div className="meta">
             <em className="time">{activity.created}</em>
           </div>
        </div>
      </div>
    ))}
  </div>
)

export default ActivitiesWidget
