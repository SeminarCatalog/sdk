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
    instance = new SeminarCatalogApi.RoleDiscountInternalApi();
  });

  describe('(package)', function() {
    describe('RoleDiscountInternalApi', function() {
      describe('rolediscountCreate', function() {
        it('should call rolediscountCreate successfully', function(done) {
          // TODO: uncomment rolediscountCreate call and complete the assertions
          /*

          instance.rolediscountCreate().then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(SeminarCatalogApi.RoleDiscount);
            expect(data.syncFields).to.be.a('string');
            // expect(data.syncFields).to.be("");
            expect(data.title).to.be.a('string');
            // expect(data.title).to.be("");
            expect(data.type).to.be.a('number');
            // expect(data.type).to.be(0);
            expect(data.role).to.be.a('number');
            // expect(data.role).to.be(0);
            expect(data.value).to.be.a('number');
            // expect(data.value).to.be();
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
      describe('rolediscountDelete', function() {
        it('should call rolediscountDelete successfully', function(done) {
          // TODO: uncomment, update parameter values for rolediscountDelete call and complete the assertions
          /*
          var id = 56;

          instance.rolediscountDelete(id).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(SeminarCatalogApi.RoleDiscount);
            expect(data.syncFields).to.be.a('string');
            // expect(data.syncFields).to.be("");
            expect(data.title).to.be.a('string');
            // expect(data.title).to.be("");
            expect(data.type).to.be.a('number');
            // expect(data.type).to.be(0);
            expect(data.role).to.be.a('number');
            // expect(data.role).to.be(0);
            expect(data.value).to.be.a('number');
            // expect(data.value).to.be();
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
      describe('rolediscountGet', function() {
        it('should call rolediscountGet successfully', function(done) {
          // TODO: uncomment, update parameter values for rolediscountGet call and complete the assertions
          /*
          var id = 56;

          instance.rolediscountGet(id).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(SeminarCatalogApi.RoleDiscount);
            expect(data.syncFields).to.be.a('string');
            // expect(data.syncFields).to.be("");
            expect(data.title).to.be.a('string');
            // expect(data.title).to.be("");
            expect(data.type).to.be.a('number');
            // expect(data.type).to.be(0);
            expect(data.role).to.be.a('number');
            // expect(data.role).to.be(0);
            expect(data.value).to.be.a('number');
            // expect(data.value).to.be();
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
      describe('rolediscountList', function() {
        it('should call rolediscountList successfully', function(done) {
          // TODO: uncomment rolediscountList call and complete the assertions
          /*

          instance.rolediscountList().then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(SeminarCatalogApi.RoleDiscountPaginationResult);
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
                expect(data).to.be.a(SeminarCatalogApi.RoleDiscount);
                expect(data.syncFields).to.be.a('string');
                // expect(data.syncFields).to.be("");
                expect(data.title).to.be.a('string');
                // expect(data.title).to.be("");
                expect(data.type).to.be.a('number');
                // expect(data.type).to.be(0);
                expect(data.role).to.be.a('number');
                // expect(data.role).to.be(0);
                expect(data.value).to.be.a('number');
                // expect(data.value).to.be();
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
      describe('rolediscountUpdate', function() {
        it('should call rolediscountUpdate successfully', function(done) {
          // TODO: uncomment, update parameter values for rolediscountUpdate call and complete the assertions
          /*
          var id = 56;

          instance.rolediscountUpdate(id).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(SeminarCatalogApi.RoleDiscount);
            expect(data.syncFields).to.be.a('string');
            // expect(data.syncFields).to.be("");
            expect(data.title).to.be.a('string');
            // expect(data.title).to.be("");
            expect(data.type).to.be.a('number');
            // expect(data.type).to.be(0);
            expect(data.role).to.be.a('number');
            // expect(data.role).to.be(0);
            expect(data.value).to.be.a('number');
            // expect(data.value).to.be();
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
