import {connect} from 'react-redux'
import {profileActions} from '../../actions'
import RecommendedProfilesWidget from '../../components/widgets/RecommendedProfilesWidget'

const mapStateToProps = ({ProfileReducer}) => ({
  users: ProfileReducer.users
})

const mapDispatchToProps = (dispatch) => ({
  requestProfiles: () => {
    dispatch(profileActions.requestProfiles())
  }
})

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
)(RecommendedProfilesWidget)

export default connector
