const db = require("../../configs/postgres.conf");
const logger = require("../../logger");
const imageTagBlob = db.image_tag_blob;
const imageTagBucket = db.image_tag_bucket
const Op = db.Sequelize.Op;

const findImageBlobByTag = async (tagName,pageNo) => {
    try{
        const tag = '%'+tagName+'%';
        const limit = 5;
        const offset = (limit * pageNo) - limit
        const tagImage = await imageTagBlob.findAll({
            where: {
                tag_name: {
                  [Op.iLike]: tag
                }
            },
            order: [
                ['createdAt', 'DESC']
            ],
            offset:offset,
            limit:limit,
            attributes:['id','tag_name','image_type','image_name','image_data']
        });
        tagImage.map((data)=>{
            data['image_data'] = data['image_data'].toString('base64');
        })
        return tagImage;
    }
    catch(error){
        logger.error("Error in fetching image blob with tag name",error);
        throw error;
    }
}


const findImageUrlByTag = async (tagName,pageNo) => {
    try{
        const tag = '%'+tagName+'%';
        const limit = 10;
        const offset = (limit * pageNo) - limit
        const tagImage = await imageTagBucket.findAll({
            where: {
                tag_name: {
                  [Op.iLike]: tag
                }
            },
            order: [
                ['createdAt', 'DESC']
            ],
            offset:offset,
            limit:limit,
            attributes:['id','tag_name','image_type','image_name','image_url']
        });
        return tagImage;
    }
    catch(error){
        logger.error("Error in fetching image url with tag name",error);
        throw error;
    }
}

module.exports = {
    findImageBlobByTag:findImageBlobByTag,
    findImageUrlByTag:findImageUrlByTag
}