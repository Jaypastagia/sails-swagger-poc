/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  getUser: function (req, res) {
    return res.json({ status: 200 , message:"swagger working"});
  },
};
