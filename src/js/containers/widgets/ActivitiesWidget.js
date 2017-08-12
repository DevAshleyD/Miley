import {connect} from 'react-redux'
import {profileActions} from '../../actions'
import ActivitiesWidget from '../../components/widgets/ActivitiesWidget'

const mapStateToProps = ({ProfileReducer}) => ({
  activities: ProfileReducer.activities
})

const mapDispatchToProps = (dispatch) => ({
  requestActivities: () => {
    dispatch(profileActions.requestActivities())
  }
})

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
)(ActivitiesWidget)

export default connector
