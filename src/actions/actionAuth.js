import { AUTHS} from '../Constants'

export const actionAuth = ({_id, userName}) => ({
    type: AUTHS,
    _id,
    userName, 
    isAuth: true
})