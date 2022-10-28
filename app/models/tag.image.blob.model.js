module.exports = (sequelize, Sequelize) => {
    const ImageTagsBlob = sequelize.define("image_tags_blob", {
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
        image_data: {
            type: Sequelize.BLOB('long'),
            allowNull: false
        }
    });
  
    return ImageTagsBlob;
  };