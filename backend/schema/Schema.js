"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.schemaExample = exports.schema = void 0;
var apollo_server_express_1 = require("apollo-server-express");
exports.schema = "\n  type User {\n    id: ID\n    email: String!\n    first_name: String!\n    last_name: String!\n    avatar: String\n    posts: [Post]\n  }\n  \n  type Post {\n    id: ID\n    title: String!\n    content: String\n  }\n  \n  input UserInput {\n    email: String!\n    first_name: String!\n    last_name: String!\n    avatar: String\n    posts: [PostInput]\n  }\n  \n  input PostInput {\n    title: String!\n    content: String!\n  }\n";
exports.schemaExample = (0, apollo_server_express_1.gql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  type User {\n    id: String\n    user_id: String\n    name: String\n    email_verified: Boolean\n    picture: String\n    user_metadata: Metadata\n    nickname: String!\n    journalId: String!\n    email: String!\n  }\n\n  type Metadata {\n    coachId: String\n    coachEmail: String\n    isTemplateCreated: Boolean\n    coachees: [MetadataCoachee]\n  }\n\n  type MetadataCoachee {\n    id: String\n    nickname: String\n    journalId: String\n    email: String\n  }\n\n  type Goal {\n    id: ID!\n    sequence: Int!\n    description: String!\n    journal: String!\n    createdDate: Date!\n    status: Status!\n    progress: Int!\n    lastUpdatedDate: Date!\n    iconColor: String!\n    iconBackgroundColor: String!\n  }\n\n  input GoalInput {\n    id: ID\n    sequence: Int!\n    previousSequence: Int\n    description: String!\n    journal: String!\n    createdDate: Date!\n    status: Status!\n    progress: Int!\n    lastUpdatedDate: Date!\n    iconColor: String!\n    iconBackgroundColor: String!\n  }\n"], ["\n  type User {\n    id: String\n    user_id: String\n    name: String\n    email_verified: Boolean\n    picture: String\n    user_metadata: Metadata\n    nickname: String!\n    journalId: String!\n    email: String!\n  }\n\n  type Metadata {\n    coachId: String\n    coachEmail: String\n    isTemplateCreated: Boolean\n    coachees: [MetadataCoachee]\n  }\n\n  type MetadataCoachee {\n    id: String\n    nickname: String\n    journalId: String\n    email: String\n  }\n\n  type Goal {\n    id: ID!\n    sequence: Int!\n    description: String!\n    journal: String!\n    createdDate: Date!\n    status: Status!\n    progress: Int!\n    lastUpdatedDate: Date!\n    iconColor: String!\n    iconBackgroundColor: String!\n  }\n\n  input GoalInput {\n    id: ID\n    sequence: Int!\n    previousSequence: Int\n    description: String!\n    journal: String!\n    createdDate: Date!\n    status: Status!\n    progress: Int!\n    lastUpdatedDate: Date!\n    iconColor: String!\n    iconBackgroundColor: String!\n  }\n"])));
var templateObject_1;