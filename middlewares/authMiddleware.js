const authMiddleware = {
    isAuthenticated: (req, res, next) => {
      if (req.session.user) {
        return next();
      }
      res.status(401).send('Unauthorized');
    },
    isTeamLeader: (req, res, next) => {
      if (req.session.user && req.session.user.role === 'team leader') {
        return next();
      }
      res.status(403).send('Forbidden');
    },
  };
  
  module.exports = authMiddleware;
  