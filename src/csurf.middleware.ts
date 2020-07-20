import csurf = require('csurf');

export const csurfMiddleware = csurf({
  cookie: false,
});
