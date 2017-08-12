import React from 'react'
import ShopList from '../shop/ShopList'
import Store from '../../stores'
import {
  TrendingWidget,
  NotificationWidget,
  ActivitiesWidget,
  RecommendedProfilesWidget
} from '../../containers/widgets'


const HomeFeed = ({store}) => (
  <div id="main-content">
    <div className="container">
      <div className="columns">
        <div className="sidebar one column">
          <NotificationWidget />
          <TrendingWidget />
        </div>
        <div className="feed three column">
          <div className="cards">
            <ShopList store={Store} />
          </div>
        </div>
        <div className="sidebar secondary two column">
          <div className="ad sidebar">
            banner here
          </div>
          <ActivitiesWidget />
          <RecommendedProfilesWidget />
        </div>
      </div>
    </div>
  </div>
)

export default HomeFeed
