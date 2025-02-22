"use strict";

let options = {};
if (process.env.NODE_ENV === "production") {
    options.schema = process.env.SCHEMA;
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        options.tableName = "SpotImages";

        await queryInterface.bulkInsert(
            options,
            [
                {
                    spotId: 1, // ✅ Matches valid spot
                    url: "https://randompicture.com/image1.jpg",
                    preview: true,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    spotId: 2,
                    url: "https://randompicture.com/image2.jpg",
                    preview: false,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                },
                {
                    spotId: 3,
                    url: "https://randompicture.com/image3.jpg",
                    preview: true,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                }
            ],
            { validate: true }
        );
    },

    async down(queryInterface, Sequelize) {
        options.tableName = "SpotImages";
        return queryInterface.bulkDelete(options, null, {});
    },
};
