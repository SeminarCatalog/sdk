/*
 * SeminarCatalog API
 * Rest API for SeminarCatalog Administration
 *
 * OpenAPI spec version: 1.0.0
 * Contact: info@databay.de
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.12
 *
 * Do not edit the class manually.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SeminarCatalogApi);
  }
}(this, function(expect, SeminarCatalogApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SeminarCatalogApi.WaitingListInternalApi();
  });

  describe('(package)', function() {
    describe('WaitingListInternalApi', function() {
      describe('waitinglistCreate', function() {
        it('should call waitinglistCreate successfully', function(done) {
          // TODO: uncomment waitinglistCreate call and complete the assertions
          /*

          instance.waitinglistCreate().then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(SeminarCatalogApi.BookingInterest);
            expect(data.status).to.be.a('number');
            // expect(data.status).to.be(0);
            expect(data.numberLicenses).to.be.a('number');
            // expect(data.numberLicenses).to.be(0);
            expect(data.note).to.be.a('string');
            // expect(data.note).to.be("");
            {
              let dataCtr = data.syncFields;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('string');
                // expect(data).to.be("");
              }
            }
            expect(data.id).to.be.a('number');
            // expect(data.id).to.be(0);
            expect(data.foreignId).to.be.a('string');
            // expect(data.foreignId).to.be("");
            expect(data.language).to.be.a('number');
            // expect(data.language).to.be(0);
            expect(data.createDate).to.be.a('number');
            // expect(data.createDate).to.be(0);
            expect(data.changeDate).to.be.a('number');
            // expect(data.changeDate).to.be(0);
            expect(data.deleted).to.be.a('number');
            // expect(data.deleted).to.be(0);
            expect(data.hidden).to.be.a('number');
            // expect(data.hidden).to.be(0);
            expect(data.sorting).to.be.a('number');
            // expect(data.sorting).to.be(0);
            expect(data.tags).to.be.a('string');
            // expect(data.tags).to.be("");

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('waitinglistDelete', function() {
        it('should call waitinglistDelete successfully', function(done) {
          // TODO: uncomment, update parameter values for waitinglistDelete call and complete the assertions
          /*
          var id = 56;

          instance.waitinglistDelete(id).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(SeminarCatalogApi.BookingInterest);
            expect(data.status).to.be.a('number');
            // expect(data.status).to.be(0);
            expect(data.numberLicenses).to.be.a('number');
            // expect(data.numberLicenses).to.be(0);
            expect(data.note).to.be.a('string');
            // expect(data.note).to.be("");
            {
              let dataCtr = data.syncFields;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('string');
                // expect(data).to.be("");
              }
            }
            expect(data.id).to.be.a('number');
            // expect(data.id).to.be(0);
            expect(data.foreignId).to.be.a('string');
            // expect(data.foreignId).to.be("");
            expect(data.language).to.be.a('number');
            // expect(data.language).to.be(0);
            expect(data.createDate).to.be.a('number');
            // expect(data.createDate).to.be(0);
            expect(data.changeDate).to.be.a('number');
            // expect(data.changeDate).to.be(0);
            expect(data.deleted).to.be.a('number');
            // expect(data.deleted).to.be(0);
            expect(data.hidden).to.be.a('number');
            // expect(data.hidden).to.be(0);
            expect(data.sorting).to.be.a('number');
            // expect(data.sorting).to.be(0);
            expect(data.tags).to.be.a('string');
            // expect(data.tags).to.be("");

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('waitinglistGet', function() {
        it('should call waitinglistGet successfully', function(done) {
          // TODO: uncomment, update parameter values for waitinglistGet call and complete the assertions
          /*
          var id = 56;

          instance.waitinglistGet(id).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(SeminarCatalogApi.BookingInterest);
            expect(data.status).to.be.a('number');
            // expect(data.status).to.be(0);
            expect(data.numberLicenses).to.be.a('number');
            // expect(data.numberLicenses).to.be(0);
            expect(data.note).to.be.a('string');
            // expect(data.note).to.be("");
            {
              let dataCtr = data.syncFields;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('string');
                // expect(data).to.be("");
              }
            }
            expect(data.id).to.be.a('number');
            // expect(data.id).to.be(0);
            expect(data.foreignId).to.be.a('string');
            // expect(data.foreignId).to.be("");
            expect(data.language).to.be.a('number');
            // expect(data.language).to.be(0);
            expect(data.createDate).to.be.a('number');
            // expect(data.createDate).to.be(0);
            expect(data.changeDate).to.be.a('number');
            // expect(data.changeDate).to.be(0);
            expect(data.deleted).to.be.a('number');
            // expect(data.deleted).to.be(0);
            expect(data.hidden).to.be.a('number');
            // expect(data.hidden).to.be(0);
            expect(data.sorting).to.be.a('number');
            // expect(data.sorting).to.be(0);
            expect(data.tags).to.be.a('string');
            // expect(data.tags).to.be("");

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('waitinglistList', function() {
        it('should call waitinglistList successfully', function(done) {
          // TODO: uncomment waitinglistList call and complete the assertions
          /*

          instance.waitinglistList().then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(SeminarCatalogApi.BookingInterest);
            expect(data.status).to.be.a('number');
            // expect(data.status).to.be(0);
            expect(data.numberLicenses).to.be.a('number');
            // expect(data.numberLicenses).to.be(0);
            expect(data.note).to.be.a('string');
            // expect(data.note).to.be("");
            {
              let dataCtr = data.syncFields;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('string');
                // expect(data).to.be("");
              }
            }
            expect(data.id).to.be.a('number');
            // expect(data.id).to.be(0);
            expect(data.foreignId).to.be.a('string');
            // expect(data.foreignId).to.be("");
            expect(data.language).to.be.a('number');
            // expect(data.language).to.be(0);
            expect(data.createDate).to.be.a('number');
            // expect(data.createDate).to.be(0);
            expect(data.changeDate).to.be.a('number');
            // expect(data.changeDate).to.be(0);
            expect(data.deleted).to.be.a('number');
            // expect(data.deleted).to.be(0);
            expect(data.hidden).to.be.a('number');
            // expect(data.hidden).to.be(0);
            expect(data.sorting).to.be.a('number');
            // expect(data.sorting).to.be(0);
            expect(data.tags).to.be.a('string');
            // expect(data.tags).to.be("");

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('waitinglistUpdate', function() {
        it('should call waitinglistUpdate successfully', function(done) {
          // TODO: uncomment, update parameter values for waitinglistUpdate call and complete the assertions
          /*
          var id = 56;

          instance.waitinglistUpdate(id).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(SeminarCatalogApi.BookingInterest);
            expect(data.status).to.be.a('number');
            // expect(data.status).to.be(0);
            expect(data.numberLicenses).to.be.a('number');
            // expect(data.numberLicenses).to.be(0);
            expect(data.note).to.be.a('string');
            // expect(data.note).to.be("");
            {
              let dataCtr = data.syncFields;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('string');
                // expect(data).to.be("");
              }
            }
            expect(data.id).to.be.a('number');
            // expect(data.id).to.be(0);
            expect(data.foreignId).to.be.a('string');
            // expect(data.foreignId).to.be("");
            expect(data.language).to.be.a('number');
            // expect(data.language).to.be(0);
            expect(data.createDate).to.be.a('number');
            // expect(data.createDate).to.be(0);
            expect(data.changeDate).to.be.a('number');
            // expect(data.changeDate).to.be(0);
            expect(data.deleted).to.be.a('number');
            // expect(data.deleted).to.be(0);
            expect(data.hidden).to.be.a('number');
            // expect(data.hidden).to.be(0);
            expect(data.sorting).to.be.a('number');
            // expect(data.sorting).to.be(0);
            expect(data.tags).to.be.a('string');
            // expect(data.tags).to.be("");

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));