"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PORT = exports.LOCALHOST = void 0;
var express_1 = __importDefault(require("express"));
var express_graphql_1 = require("express-graphql");
var cors_1 = __importDefault(require("cors"));
var Schema_1 = require("./schema/Schema");
var apollo_server_1 = require("apollo-server");
var graphql_1 = require("graphql");
var GetUsersByPage_1 = require("./schema/User/Queries/GetUsersByPage");
var CreateUser_1 = require("./schema/User/Mutations/CreateUser");
var GetUserById_1 = require("./schema/User/Queries/GetUserById");
var UserResolver_1 = require("./resolvers/User/UserResolver");
var schema = (0, graphql_1.buildSchema)(Schema_1.schema);
exports.LOCALHOST = 'https://localhost';
exports.PORT = 3000;
var app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use('/graphql', (0, express_graphql_1.graphqlHTTP)({
    graphiql: true,
    schema: schema,
}));
app.listen(5000, function () { return console.log('Backend started'); });
var queries = [GetUsersByPage_1.getUsersByPage, GetUserById_1.getUserById];
var mutations = [CreateUser_1.createUser];
var resolvers = {
    Query: __assign({}, UserResolver_1.userResolver.Query),
    Mutation: __assign({}, UserResolver_1.userResolver.Mutation),
};
var server = new apollo_server_1.ApolloServer({
    typeDefs: [schema, queries, mutations],
    resolvers: resolvers,
});
exports.graphqlHandler = server.listen({ path: exports.LOCALHOST, port: exports.PORT }, function () {
    return console.log("Start listening port ".concat(exports.PORT));
});
