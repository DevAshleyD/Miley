import React from 'react'

const NotificationWidget = ({notifications}) => (
  <div className="notifications widget">
    <ul>
      {notifications.map(notification => (
        <li key={notification.id}>
            <span>{notification.message}</span>
            &nbsp;
            <a href={notification.url}>{notification.ctx_count}</a>
        </li>
      ))}
    </ul>
  </div>
)

export default NotificationWidget
