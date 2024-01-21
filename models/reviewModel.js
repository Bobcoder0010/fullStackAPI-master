// module.exports = (sequelize, DataTypes) => {
//   const Review = sequelize.define("Review", {
//     id: {
//       type: DataTypes.UUID,
//       defaultValue: DataTypes.UUIDV4,
//       primaryKey: true,
//       allowNull: false,
//     },
//     title: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     content: {
//       type: DataTypes.TEXT,
//       allowNull: false,
//     },
//     rating: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       validate: {
//         min: 1,
//         max: 5,
//       },
//     },
//   });
//
//   // Defining associations here
//   Review.associate = (models) => {
//     // A review belongs to a certain product
//     Review.belongsTo(models.Product, {
//       foreignKey: {
//         allowNull: false,
//       },
//     });
//   };
//
//   return Review;
// };
