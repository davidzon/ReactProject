"use strict";

let options = {};
if (process.env.NODE_ENV === "production") {
    options.schema = process.env.SCHEMA; // Define schema in options object if in production
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        options.tableName = "Reviews";

        await queryInterface.bulkInsert(
            options,
            [
                {
                    spotId: 1,
                    userId: 1,
                    review: "This is my review for spot 1",
                    stars: 4,
                },
                {
                    spotId: 2,
                    userId: 2,
                    review: "This is my review for spot 2",
                    stars: 5,
                },
                {
                    spotId: 3,
                    userId: 1,
                    review: "This is my review for spot 3",
                    stars: 3,
                },
                {
                    spotId: 4,
                    userId: 3,
                    review: "This is my review for spot 4",
                    stars: 4,
                },
                {
                    spotId: 5,
                    userId: 4,
                    review: "This is my review for spot 5",
                    stars: 5,
                },
                {
                    spotId: 6,
                    userId: 5,
                    review: "This is my review for spot 6",
                    stars: 3,
                },
                {
                    spotId: 7,
                    userId: 6,
                    review: "This is my review for spot 7",
                    stars: 4,
                },
                {
                    spotId: 8,
                    userId: 7,
                    review: "This is my review for spot 8",
                    stars: 5,
                },
                {
                    spotId: 9,
                    userId: 8,
                    review: "This is my review for spot 9",
                    stars: 3,
                },

            ],
            { validate: true } // Enable validation
        );
    },

    async down(queryInterface, Sequelize) {
        options.tableName = "Reviews";
        const Op = Sequelize.Op;
        return queryInterface.bulkDelete(
            options,
            {
                spotId: { [Op.in]: [1, 2, 3] },
            },
            {}
        );
    },
};
