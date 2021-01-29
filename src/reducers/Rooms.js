import { RELOAD_ROOMS } from '../Constants'


const ROOMS = (state = [], {type, data}) => {
    console.log('reducer - ', data);
    switch (type) {
        case RELOAD_ROOMS :
            return   (data)
            default:
                return state;
    }
}
export default ROOMS