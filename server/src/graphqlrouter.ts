import fs from "fs";
import path from "path";
import { buildSchema } from "graphql"
import { IUser, User, Event } from "./schema";
var express = require('express')
const bodyParser = require('body-parser')
const express_graphql = require("express-graphql")
const typeDefs = fs.readFileSync(path.resolve(__dirname, "../api.graphql"), "utf8");
var apiRouter = express.Router()
let getUser = async function (parent, args, context, info) {
    // if (!context._id) {
    //     throw new Error('User not logged in')
    // }
    //     const getUser = async function (args, req) {
    //     var user = await User.find({ uuid: args.uuid });
    //     return user[0];
    // }
    // let user = await User.findById(args.user_id);
    let query_str = args.body.query;
    let starting_idx = query_str.indexOf("user_id");
    let ending_idx = query_str.indexOf(")");
    
    let info1 = query_str.substring(starting_idx, ending_idx);
    console.log(info1);
    let start2 = info1.indexOf(":");
    info1 = info1.substring(start2 + 2, info1.length - 1);
    console.log(info1);

    var user = await User.find({ uuid: info1 });
    console.log(user)
    if (!user) {
        throw new Error("User not found");
    }        
    return user[0];
    // return user;
    // return user
}
// apiRouter.use(bodyParser.text({ type: 'application/graphql' }));
apiRouter.use(/\/((?!graphql).)*/, bodyParser.urlencoded({ extended: true }));
apiRouter.use(/\/((?!graphql).)*/, bodyParser.json());
const root = {
    user: getUser,
    // completed: getCompleted,
    // update_user_to_admin: updateToAdmin,
    // check_user_solved: checkUserSolved,
    // add_completed: addCompleted
};


apiRouter.use('/', express_graphql({
    schema: buildSchema(typeDefs),
    rootValue: root,
    graphiql:process.env.ISPRODUCTION !== 'true'
}))
module.exports = apiRouter