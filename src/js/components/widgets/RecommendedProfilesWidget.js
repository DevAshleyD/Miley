import React from 'react'

const RecommendedProfilesWidget = ({users}) => (
  <div className="recommended">
    <h4 className="title">Who to follow</h4>
    <ul className="profiles list">
      {users.map(user => (
        <li key={user.id} className="profile">
          <a href={user.url}>
            <span className="avatar">
              <img src={user.picture} alt={user.username} />
            </span>
          </a>
        </li>
      ))}
    </ul>
  </div>
)

export default RecommendedProfilesWidget
