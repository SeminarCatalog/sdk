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
    instance = new SeminarCatalogApi.RegionInternalApi();
  });

  describe('(package)', function() {
    describe('RegionInternalApi', function() {
      describe('regionCreate', function() {
        it('should call regionCreate successfully', function(done) {
          // TODO: uncomment regionCreate call and complete the assertions
          /*

          instance.regionCreate().then(function(data) {
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
      describe('regionDelete', function() {
        it('should call regionDelete successfully', function(done) {
          // TODO: uncomment, update parameter values for regionDelete call and complete the assertions
          /*
          var id = 56;

          instance.regionDelete(id).then(function(data) {
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
      describe('regionGet', function() {
        it('should call regionGet successfully', function(done) {
          // TODO: uncomment, update parameter values for regionGet call and complete the assertions
          /*
          var id = 56;

          instance.regionGet(id).then(function(data) {
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
      describe('regionList', function() {
        it('should call regionList successfully', function(done) {
          // TODO: uncomment regionList call and complete the assertions
          /*

          instance.regionList().then(function(data) {
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
      describe('regionUpdate', function() {
        it('should call regionUpdate successfully', function(done) {
          // TODO: uncomment, update parameter values for regionUpdate call and complete the assertions
          /*
          var id = 56;

          instance.regionUpdate(id).then(function(data) {
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
