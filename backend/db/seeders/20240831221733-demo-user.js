"use strict";

const bcrypt = require("bcryptjs");

let options = {};
if (process.env.NODE_ENV === "production") {
    options.schema = process.env.SCHEMA;
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        options.tableName = "Users";

        await queryInterface.bulkInsert(
            options,
            [
                {
                    email: "demo@user.io",
                    username: "Demo-lition",
                    firstName: "Davidson",
                    lastName: "Ramirez",
                    hashedPassword: bcrypt.hashSync("password"),
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    email: "user1@user.io",
                    username: "User1",
                    firstName: "Davidson",
                    lastName: "Ramirez",
                    hashedPassword: bcrypt.hashSync("password2"),
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    email: "user2@user.io",
                    username: "User2",
                    firstName: "Davidson",
                    lastName: "Ramirez",
                    hashedPassword: bcrypt.hashSync("password3"),
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    email: "doubly@user.io",
                    username: "User3",
                    firstName: "Double",
                    lastName: "Doink",
                    hashedPassword: bcrypt.hashSync("double1"),
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    email: "doink@user.io",
                    username: "Doink",
                    firstName: "Doink",
                    lastName: "Double",
                    hashedPassword: bcrypt.hashSync("double2"),
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    email: "doinks@user.io",
                    username: "Doinks",
                    firstName: "Doinks",
                    lastName: "Doubles",
                    hashedPassword: bcrypt.hashSync("doink1"),
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    email: "doinker@user.io",
                    username: "Doinkers1",
                    firstName: "Doubles",
                    lastName: "Koopa",
                    hashedPassword: bcrypt.hashSync("doink2"),
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    email: "doinkers@user.io",
                    username: "Doinkers2",
                    firstName: "Doinker",
                    lastName: "Doo",
                    hashedPassword: bcrypt.hashSync("doubledoink"),
                    createdAt: new Date(),
                    updatedAt: new Date(),
                }
            ],
            {}
        );
    },

    async down(queryInterface, Sequelize) {
        options.tableName = "Users";

        const Op = Sequelize.Op;
        return queryInterface.bulkDelete(
            options,
            {
                username: {
                    [Op.in]: [
                        "Demo-lition", "FakeUser1", "FakeUser2",
                        "SuperMario", "GreenMachine", "PrincessPeach",
                        "KingKoopa", "MushroomBuddy"
                    ],
                },
            },
            {}
        );
    },
};
