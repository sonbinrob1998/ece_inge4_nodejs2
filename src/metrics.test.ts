import { expect } from 'chai'
import { Metric, MetricsHandler } from './metrics'
import { LevelDB } from "./leveldb"


const dbPath: string = 'db_test'
var dbMet: MetricsHandler

describe('Metrics', function () {
  before(function () {
    LevelDB.clear(dbPath)
    dbMet = new MetricsHandler(dbPath)
  })

  after(function () {
    dbMet.db.close()
  })

  


describe('get', function () {
    it('should get empty array on non existing group', function () {
      dbMet.get("0", function (err: Error | null, result?: Metric[]) {
        expect(err).to.be.null
        expect(result).to.not.be.undefined
        expect(result).to.be.empty
      })
    })
  })
// describe ('#saveUser', function(){
//     it('should save data or uptate data', function (){
//         dbMet.saveUser('{"key":"metric:User0:1572876000000","value":12, password: "ninja"}', function(err:Error| null, result?: Metric[]){
//             expect(err).to.be.null
//             expect(result).to.not.be.undefined
//             expect(result).to.not.be.null
//             expect('Robi').to.be.a('string');
//             expect('metric:User0:1572876000000').to.be.a('string');
//             expect('ninja').to.be.a('string');

//             // expect(result).to.have.a.property('key');
//             // expect(result).to.have.a.property('value');
//             // expect(result).to.have.a.property('password');
//             // expect(result).to.include({key: 'Robi'})



//         })
//     })
// })
//[{"key":"metric:User0:1572876000000","value":12},{"key":"metric:User0:1572876900000","value":10},{"key":"metric:User0:1572877800000","value":8}]
// describe ('#save', function(){
//     it('should save data or uptate data', function (){
//         dbMet.saveUser("Robi", function(err:Error| null, result?: Metric[]){
//             expect(err).to.be.null
//             expect(result).to.not.be.empty
//         })
//     })
// })

// describe ('#see_all', function(){
//     it('should save data or uptate data', function (){
//         dbMet.saveUser("Robi", function(err:Error| null, result?: Metric[]){
//             expect(err).to.be.null
//             expect(result).to.not.be.empty
//         })
//     })
// })
// describe ('#API_authenticate', function(){
//     it('should save data or uptate data', function (){
//         dbMet.saveUser("Robi", function(err:Error| null, result?: Metric[]){
//             expect(err).to.be.null
//             expect(result).to.not.be.empty
//         })
//     })
// })
// describe ('#delete', function(){
//     it('should save data or uptate data', function (){
//         dbMet.saveUser("Robi", function(err:Error| null, result?: Metric[]){
//             expect(err).to.be.null
//             expect(result).to.not.be.empty
//         })
//     })
// })





})