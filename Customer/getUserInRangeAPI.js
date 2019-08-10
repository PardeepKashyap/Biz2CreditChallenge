module.exports = {
    getUserWithInRange: function( req, res ) {
    var customers=require('../util/customers');
    customers.getGeoUserBetweenRange().then((response)=>
    {
        res.json({
            "status": "success",
            "data": response    
        });
    }).catch((e)=>{
        console.log("Failure")
        res.json({
            "status": "failure",
            "message": "Exception occurred.",
            "errorcode": 500
        });
    })   
}
 }