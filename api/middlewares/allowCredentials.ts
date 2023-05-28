export function allowCredentials (req: any, res: any, next: any) {
  //Check for user role
  try {
    res.header('Access-Control-Allow-Credentials', 'true')

    return next()
  } catch (ex) {
    if (ex instanceof Error) {
      req.session.user = undefined
    }

    next(ex)
  }
}
