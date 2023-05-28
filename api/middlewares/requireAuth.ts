export function requireAuth (req: any, res: any, next: any) {
  try {
    if (!req?.session?.user) return next(Error())

    return next()
  } catch (ex) {
    if (ex instanceof Error) {
      req.session.user = undefined
    }

    next(ex)
  }
}
