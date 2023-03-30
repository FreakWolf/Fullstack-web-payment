const passport = require("passport");

module.exports = (app) => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      res.redirect("/surveys");
    }
  );

  // logout as the current user
  app.get("/api/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  // gives the access to the user who already logged in from the cookies
  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};
