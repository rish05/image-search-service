const logger = require('../../logger');
const tagImageService = require('../services/tag.image.service');

const findImageBlobByTag = async (req,res) => {
    try{
        const tagName = req.query.tag_name;
        const pageNo = req.query.page_no;
        if (!tagName || !pageNo){
            logger.info('Tag name and page Number is not present in the query params');
            res.status(422).json({
                'message':'Tag name and page Number is not present in the query params',
                'status_code':422,
                'err_msg':'Validation Error'
            });
        }
        else{
            const data = await(tagImageService.findImageBlobByTag(tagName,pageNo));
            
            if(data.length>0){
                logger.info('Successfuly Fetched image with tag');
                res.status(200).json({'message':'success',data:data});
            }
            else{
                logger.info('No images found for the given page number');
                res.status(200).json({'message':'No More images with given page number of tag found',data:data});
            }
        }
          
    }
    catch(error){
        logger.error("Error in fething images by tag name in controller",error);
        res.status(500).json({
            'message':'internal server error!!'
        });
    } 
}

const findImageUrlByTag = async (req,res) => {
    try{
        const tagName = req.query.tag_name;
        const pageNo = req.query.page_no;
        if (!tagName || !pageNo){
            logger.info('Tag name and page Number is not present in the query params');
            res.status(422).json({
                'message':'Tag name and page Number is not present in the query params',
                'status_code':422,
                'err_msg':'Validation Error'
            });
        }
        else{
            const data = await(tagImageService.findImageUrlByTag(tagName,pageNo));
            if(data.length>0){
                logger.info('Successfuly Fetched image with tag');
                res.status(200).json({'message':'success',data:data});
            }
            else{
                logger.info('No images found for the given page number');
                res.status(200).json({'message':'No More images with given page number of tag found',data:data});
            }
             
        }
        
        
    }
    catch(error){
        logger.error("Error in fething images by tag name in controller",error);
        res.status(500).json({
            'message':'internal server error!!'
        });
    } 
}

module.exports ={
    findImageBlobByTag:findImageBlobByTag,
    findImageUrlByTag:findImageUrlByTag
}