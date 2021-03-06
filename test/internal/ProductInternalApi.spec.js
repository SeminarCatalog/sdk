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
    instance = new SeminarCatalogApi.ProductInternalApi();
  });

  describe('(package)', function() {
    describe('ProductInternalApi', function() {
      describe('productCreate', function() {
        it('should call productCreate successfully', function(done) {
          // TODO: uncomment productCreate call and complete the assertions
          /*

          instance.productCreate().then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(SeminarCatalogApi.Product);
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
            expect(data.title).to.be.a('string');
            // expect(data.title).to.be("");
            expect(data.subtitle).to.be.a('string');
            // expect(data.subtitle).to.be("");
            expect(data.identifier).to.be.a('string');
            // expect(data.identifier).to.be("");
            expect(data.teaser).to.be.a('string');
            // expect(data.teaser).to.be("");
            expect(data.description).to.be.a('string');
            // expect(data.description).to.be("");
            expect(data.externalUrl).to.be.a('string');
            // expect(data.externalUrl).to.be("");
            expect(data.rolesVisibility).to.be.a('string');
            // expect(data.rolesVisibility).to.be("");
            expect(data.rolesBooking).to.be.a('string');
            // expect(data.rolesBooking).to.be("");
            expect(data.hideInCatalog).to.be.a('number');
            // expect(data.hideInCatalog).to.be(0);
            expect(data.costCentre).to.be.a('string');
            // expect(data.costCentre).to.be("");
            expect(data.payers).to.be.a('string');
            // expect(data.payers).to.be("");
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
      describe('productDelete', function() {
        it('should call productDelete successfully', function(done) {
          // TODO: uncomment, update parameter values for productDelete call and complete the assertions
          /*
          var id = 56;

          instance.productDelete(id).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(SeminarCatalogApi.Product);
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
            expect(data.title).to.be.a('string');
            // expect(data.title).to.be("");
            expect(data.subtitle).to.be.a('string');
            // expect(data.subtitle).to.be("");
            expect(data.identifier).to.be.a('string');
            // expect(data.identifier).to.be("");
            expect(data.teaser).to.be.a('string');
            // expect(data.teaser).to.be("");
            expect(data.description).to.be.a('string');
            // expect(data.description).to.be("");
            expect(data.externalUrl).to.be.a('string');
            // expect(data.externalUrl).to.be("");
            expect(data.rolesVisibility).to.be.a('string');
            // expect(data.rolesVisibility).to.be("");
            expect(data.rolesBooking).to.be.a('string');
            // expect(data.rolesBooking).to.be("");
            expect(data.hideInCatalog).to.be.a('number');
            // expect(data.hideInCatalog).to.be(0);
            expect(data.costCentre).to.be.a('string');
            // expect(data.costCentre).to.be("");
            expect(data.payers).to.be.a('string');
            // expect(data.payers).to.be("");
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
      describe('productGet', function() {
        it('should call productGet successfully', function(done) {
          // TODO: uncomment, update parameter values for productGet call and complete the assertions
          /*
          var id = 56;

          instance.productGet(id).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(SeminarCatalogApi.Product);
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
            expect(data.title).to.be.a('string');
            // expect(data.title).to.be("");
            expect(data.subtitle).to.be.a('string');
            // expect(data.subtitle).to.be("");
            expect(data.identifier).to.be.a('string');
            // expect(data.identifier).to.be("");
            expect(data.teaser).to.be.a('string');
            // expect(data.teaser).to.be("");
            expect(data.description).to.be.a('string');
            // expect(data.description).to.be("");
            expect(data.externalUrl).to.be.a('string');
            // expect(data.externalUrl).to.be("");
            expect(data.rolesVisibility).to.be.a('string');
            // expect(data.rolesVisibility).to.be("");
            expect(data.rolesBooking).to.be.a('string');
            // expect(data.rolesBooking).to.be("");
            expect(data.hideInCatalog).to.be.a('number');
            // expect(data.hideInCatalog).to.be(0);
            expect(data.costCentre).to.be.a('string');
            // expect(data.costCentre).to.be("");
            expect(data.payers).to.be.a('string');
            // expect(data.payers).to.be("");
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
      describe('productList', function() {
        it('should call productList successfully', function(done) {
          // TODO: uncomment productList call and complete the assertions
          /*

          instance.productList().then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(SeminarCatalogApi.ProductPaginationResult);
            expect(data.limit).to.be.a('number');
            // expect(data.limit).to.be(0);
            expect(data.offset).to.be.a('number');
            // expect(data.offset).to.be(0);
            expect(data.entryCount).to.be.a('number');
            // expect(data.entryCount).to.be(0);
            expect(data.maxEntryCount).to.be.a('number');
            // expect(data.maxEntryCount).to.be(0);
            {
              let dataCtr = data.entries;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(SeminarCatalogApi.Product);
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
                expect(data.title).to.be.a('string');
                // expect(data.title).to.be("");
                expect(data.subtitle).to.be.a('string');
                // expect(data.subtitle).to.be("");
                expect(data.identifier).to.be.a('string');
                // expect(data.identifier).to.be("");
                expect(data.teaser).to.be.a('string');
                // expect(data.teaser).to.be("");
                expect(data.description).to.be.a('string');
                // expect(data.description).to.be("");
                expect(data.externalUrl).to.be.a('string');
                // expect(data.externalUrl).to.be("");
                expect(data.rolesVisibility).to.be.a('string');
                // expect(data.rolesVisibility).to.be("");
                expect(data.rolesBooking).to.be.a('string');
                // expect(data.rolesBooking).to.be("");
                expect(data.hideInCatalog).to.be.a('number');
                // expect(data.hideInCatalog).to.be(0);
                expect(data.costCentre).to.be.a('string');
                // expect(data.costCentre).to.be("");
                expect(data.payers).to.be.a('string');
                // expect(data.payers).to.be("");
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
              }
            }

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('productUpdate', function() {
        it('should call productUpdate successfully', function(done) {
          // TODO: uncomment, update parameter values for productUpdate call and complete the assertions
          /*
          var id = 56;

          instance.productUpdate(id).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(SeminarCatalogApi.Product);
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
            expect(data.title).to.be.a('string');
            // expect(data.title).to.be("");
            expect(data.subtitle).to.be.a('string');
            // expect(data.subtitle).to.be("");
            expect(data.identifier).to.be.a('string');
            // expect(data.identifier).to.be("");
            expect(data.teaser).to.be.a('string');
            // expect(data.teaser).to.be("");
            expect(data.description).to.be.a('string');
            // expect(data.description).to.be("");
            expect(data.externalUrl).to.be.a('string');
            // expect(data.externalUrl).to.be("");
            expect(data.rolesVisibility).to.be.a('string');
            // expect(data.rolesVisibility).to.be("");
            expect(data.rolesBooking).to.be.a('string');
            // expect(data.rolesBooking).to.be("");
            expect(data.hideInCatalog).to.be.a('number');
            // expect(data.hideInCatalog).to.be(0);
            expect(data.costCentre).to.be.a('string');
            // expect(data.costCentre).to.be("");
            expect(data.payers).to.be.a('string');
            // expect(data.payers).to.be("");
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
