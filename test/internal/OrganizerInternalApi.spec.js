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
    instance = new SeminarCatalogApi.OrganizerInternalApi();
  });

  describe('(package)', function() {
    describe('OrganizerInternalApi', function() {
      describe('organizerCreate', function() {
        it('should call organizerCreate successfully', function(done) {
          // TODO: uncomment organizerCreate call and complete the assertions
          /*

          instance.organizerCreate().then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(SeminarCatalogApi.Organizer);
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
            expect(data.name).to.be.a('string');
            // expect(data.name).to.be("");
            expect(data.address).to.be.a('string');
            // expect(data.address).to.be("");
            expect(data.zip).to.be.a('string');
            // expect(data.zip).to.be("");
            expect(data.city).to.be.a('string');
            // expect(data.city).to.be("");
            expect(data.contact).to.be.a('string');
            // expect(data.contact).to.be("");
            expect(data.phone).to.be.a('string');
            // expect(data.phone).to.be("");
            expect(data.fax).to.be.a('string');
            // expect(data.fax).to.be("");
            expect(data.email).to.be.a('string');
            // expect(data.email).to.be("");
            expect(data.url).to.be.a('string');
            // expect(data.url).to.be("");
            expect(data.information).to.be.a('string');
            // expect(data.information).to.be("");
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
      describe('organizerDelete', function() {
        it('should call organizerDelete successfully', function(done) {
          // TODO: uncomment, update parameter values for organizerDelete call and complete the assertions
          /*
          var id = 56;

          instance.organizerDelete(id).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(SeminarCatalogApi.Organizer);
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
            expect(data.name).to.be.a('string');
            // expect(data.name).to.be("");
            expect(data.address).to.be.a('string');
            // expect(data.address).to.be("");
            expect(data.zip).to.be.a('string');
            // expect(data.zip).to.be("");
            expect(data.city).to.be.a('string');
            // expect(data.city).to.be("");
            expect(data.contact).to.be.a('string');
            // expect(data.contact).to.be("");
            expect(data.phone).to.be.a('string');
            // expect(data.phone).to.be("");
            expect(data.fax).to.be.a('string');
            // expect(data.fax).to.be("");
            expect(data.email).to.be.a('string');
            // expect(data.email).to.be("");
            expect(data.url).to.be.a('string');
            // expect(data.url).to.be("");
            expect(data.information).to.be.a('string');
            // expect(data.information).to.be("");
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
      describe('organizerGet', function() {
        it('should call organizerGet successfully', function(done) {
          // TODO: uncomment, update parameter values for organizerGet call and complete the assertions
          /*
          var id = 56;

          instance.organizerGet(id).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(SeminarCatalogApi.Organizer);
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
            expect(data.name).to.be.a('string');
            // expect(data.name).to.be("");
            expect(data.address).to.be.a('string');
            // expect(data.address).to.be("");
            expect(data.zip).to.be.a('string');
            // expect(data.zip).to.be("");
            expect(data.city).to.be.a('string');
            // expect(data.city).to.be("");
            expect(data.contact).to.be.a('string');
            // expect(data.contact).to.be("");
            expect(data.phone).to.be.a('string');
            // expect(data.phone).to.be("");
            expect(data.fax).to.be.a('string');
            // expect(data.fax).to.be("");
            expect(data.email).to.be.a('string');
            // expect(data.email).to.be("");
            expect(data.url).to.be.a('string');
            // expect(data.url).to.be("");
            expect(data.information).to.be.a('string');
            // expect(data.information).to.be("");
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
      describe('organizerList', function() {
        it('should call organizerList successfully', function(done) {
          // TODO: uncomment organizerList call and complete the assertions
          /*

          instance.organizerList().then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(SeminarCatalogApi.OrganizerPaginationResult);
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
                expect(data).to.be.a(SeminarCatalogApi.Organizer);
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
                expect(data.name).to.be.a('string');
                // expect(data.name).to.be("");
                expect(data.address).to.be.a('string');
                // expect(data.address).to.be("");
                expect(data.zip).to.be.a('string');
                // expect(data.zip).to.be("");
                expect(data.city).to.be.a('string');
                // expect(data.city).to.be("");
                expect(data.contact).to.be.a('string');
                // expect(data.contact).to.be("");
                expect(data.phone).to.be.a('string');
                // expect(data.phone).to.be("");
                expect(data.fax).to.be.a('string');
                // expect(data.fax).to.be("");
                expect(data.email).to.be.a('string');
                // expect(data.email).to.be("");
                expect(data.url).to.be.a('string');
                // expect(data.url).to.be("");
                expect(data.information).to.be.a('string');
                // expect(data.information).to.be("");
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
      describe('organizerUpdate', function() {
        it('should call organizerUpdate successfully', function(done) {
          // TODO: uncomment, update parameter values for organizerUpdate call and complete the assertions
          /*
          var id = 56;

          instance.organizerUpdate(id).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(SeminarCatalogApi.Organizer);
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
            expect(data.name).to.be.a('string');
            // expect(data.name).to.be("");
            expect(data.address).to.be.a('string');
            // expect(data.address).to.be("");
            expect(data.zip).to.be.a('string');
            // expect(data.zip).to.be("");
            expect(data.city).to.be.a('string');
            // expect(data.city).to.be("");
            expect(data.contact).to.be.a('string');
            // expect(data.contact).to.be("");
            expect(data.phone).to.be.a('string');
            // expect(data.phone).to.be("");
            expect(data.fax).to.be.a('string');
            // expect(data.fax).to.be("");
            expect(data.email).to.be.a('string');
            // expect(data.email).to.be("");
            expect(data.url).to.be.a('string');
            // expect(data.url).to.be("");
            expect(data.information).to.be.a('string');
            // expect(data.information).to.be("");
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
