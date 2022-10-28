module.exports = (sequelize, Sequelize) => {
    const ImageTagsBucket = sequelize.define("image_tags_bucket", {
        id: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        tag_name:{
            type: Sequelize.STRING,
            allowNull: false
        },
        image_type: {
            type: Sequelize.STRING,
            allowNull: false
        },
        image_name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        image_url: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });
  
    return ImageTagsBucket;
  };