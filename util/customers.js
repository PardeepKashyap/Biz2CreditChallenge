var distanceCalculator=require('geo-distance-calculator');
var util=require('./utility');
var customerData=require('./customerData');
var customerList=[];
const dublin_lat = 53.339428;   // as per requirement this package is specifically coded to find customers near dublin only
const dublin_lon = -6.257664;
const range_In_KiloMeter=100;
    
exports.getGeoUserBetweenRange=function () {
  return new Promise((resolve, reject)=>{
    (async function (){
        try{
            let response = await customerData.readJSONFromTextFile();
            customerList=response;
            var customerWithIn100KM= customerList.filter((customer)=>
            distanceCalculator.getdistanceInKilloMetersBetweenTwoPoints(dublin_lon,dublin_lat,customer.longitude,customer.latitude) <=  range_In_KiloMeter)
            customerWithIn100KM = util.sortByKey(customerWithIn100KM,'user_id');
            resolve(customerWithIn100KM);
        } catch(error) {
            reject('Error',error)
          };
    })()
  });
}

