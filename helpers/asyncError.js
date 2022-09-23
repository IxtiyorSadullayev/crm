const AsyncError = func => async(req,res,next)=>{
    // Promise.resolve(req,res, next).catch(next);
    try {
        Promise.resolve(req,res, next)
    } catch (e) {
        console.log(e.message)
        throw new Error('Have an Error')
    }
}

module.exports = AsyncError;