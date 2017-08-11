import {connect} from 'react-redux'
import {shopActions} from '../../actions'
import {ShopList} from '../../components/shop/ShopList.js'
import {api} from '../../middleware/api'

const mapStateToProps = ({ProfileReducer, ShopReducer}) => ({
  currentUser: ProfileReducer.currentUser,
  shops: ShopReducer.shops
})

const mapDispatchToProps = (dispatch) => ({
  requestShops: () => {
    dispatch(shopActions.requestShops())
  },
  like: (shop, user) => {
    dispatch(shopActions.likeShop({shop, user}))
  }
})

const connector = connect(
  mapStateToProps,
  mapDispatchToProps
)(ShopList)

export default connector
