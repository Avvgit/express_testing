import jwt from "jsonwebtoken";

export const isUserAuthenticated = (req, res, next) => { //next si pasa o no pasa
  const authHeader = req.headers.authorization

  if (!authHeader) {
    return res.status(403).json({
      status: 403,
      message: 'FORBIDDEN'
    })
  } else {
    const token = authHeader.split(' ')[1]
    let payload;
    if (token) {
      try {
        payload = jwt.verify(token, 'secret-key')
        next()
      } catch (e) {
        if (e instanceof jwt.JsonWebTokenError) {
          // if the error thrown is because the JWT is unauthorized, return a 401 error
          return res.status(401).json({
            status: 401,
            message: 'UNAUTHORIZED'
          })
        }
        console.log(e)
        // otherwise, return a bad request error
        return res.status(400).end()
      }

    } else {
      return res.status(403).json({
        status: 403,
        message: 'FORBIDDEN'
      })
    }
  }
}