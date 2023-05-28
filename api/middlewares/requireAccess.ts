import { hasAccess } from '../../logic/models/user'

export default (accessName: string) => {
  return (req:any, res: any, next: any) => {
    //Check for session and user role
    if (!req?.session?.user || hasAccess(accessName, req.session.user)){
        return next(Error())
    }
    return next()
  }
}
