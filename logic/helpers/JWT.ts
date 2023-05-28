import JWT from 'jsonwebtoken';
import config from '../../config';


export function decode (token: string) {
    const result = JWT.verify(token, config.JWT_SECRET);
    
    if (typeof result === 'string'){
        throw result
    } return result

}