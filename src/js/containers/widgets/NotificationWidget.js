import {connect} from 'react-redux'
import {notificationActions} from '../../actions'
import NotificationWidget from '../../components/widgets/NotificationWidget'

const mapStateToProps = ({NotificationsReducer}) => ({
  notifications: NotificationsReducer.notifications
})

const mapDispatchToProps = (dispatch) => ({
  requestNotifications: () => {
    dispatch(notificationActions.requestNotifications())
  }
})

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
)(NotificationWidget)

export default connector
