import {connect} from 'react-redux'
import {trendsActions} from '../../actions'
import TrendingWidget from '../../components/widgets/TrendingWidget'

const mapStateToProps = ({TrendsReducer}) => ({
  trends: TrendsReducer.trends
})

const mapDispatchToProps = (dispatch) => ({
  requestTrends: () => {
    dispatch(trendsActions.requestTrends())
  }
})

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
)(TrendingWidget)

export default connector
