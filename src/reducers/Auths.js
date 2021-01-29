import { AUTHS} from '../Constants'

const User = {isAuth : false}


const Auths = (state = User, {_id , userName, isAuth , type}) => {
    switch (type) {
        case AUTHS :
            return {
                    _id,
                    userName,
                    isAuth
                }
            default:
                return state;
    }
}
export default Auths