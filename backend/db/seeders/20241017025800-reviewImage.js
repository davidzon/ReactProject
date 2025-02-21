// "use strict";

// let options = {};
// if (process.env.NODE_ENV === "production") {
//     options.schema = process.env.SCHEMA; // Define schema in options object if in production
// }

// /** @type {import('sequelize-cli').Migration} */
// module.exports = {
//     async up(queryInterface, Sequelize) {
//         options.tableName = "ReviewImages";
//         await queryInterface.bulkInsert(
//             options,
//             [
//                 {
//                     reviewId: 1,
//                     url: "www.randompicture.com",
//                 },
//                 {
//                     reviewId: 2,
//                     url: "www.randompicture2.com",
//                 },
//                 {
//                     reviewId: 3,
//                     url: "www.randompicture3.com",
//                 },
//             ],
//             { validate: true } // Enable validation
//         );
//     },

//     async down(queryInterface, Sequelize) {
//         options.tableName = "ReviewImages";
//         const Op = Sequelize.Op;
//         return queryInterface.bulkDelete(
//             options,
//             {
//                 reviewId: { [Op.in]: [1, 2, 3] },
//             },
//             {}
//         );
//     },
// };
"use strict";

let options = {};
if (process.env.NODE_ENV === "production") {
    options.schema = process.env.SCHEMA; // Define schema in options object if in production
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        options.tableName = "ReviewImages";

        // Fetch existing review IDs dynamically
        const reviews = await queryInterface.sequelize.query(
            `SELECT id FROM "Reviews";`,
            { type: Sequelize.QueryTypes.SELECT }
        );

        if (reviews.length === 0) {
            console.error("⚠️ No reviews found! Make sure you seed Reviews before ReviewImages.");
            return;
        }

        // Map review IDs dynamically
        const reviewImages = reviews.slice(0, 3).map((review, index) => ({
            reviewId: review.id,
            url: `www.randompicture${index + 1}.com`,
            createdAt: new Date(),
            updatedAt: new Date(),
        }));

        await queryInterface.bulkInsert(options, reviewImages, { validate: true });
    },

    async down(queryInterface, Sequelize) {
        options.tableName = "ReviewImages";
        return queryInterface.bulkDelete(options, null, {});
    },
};
