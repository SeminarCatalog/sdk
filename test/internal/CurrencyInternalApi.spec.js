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
    instance = new SeminarCatalogApi.CurrencyInternalApi();
  });

  describe('(package)', function() {
    describe('CurrencyInternalApi', function() {
      describe('currencyCreate', function() {
        it('should call currencyCreate successfully', function(done) {
          // TODO: uncomment currencyCreate call and complete the assertions
          /*

          instance.currencyCreate().then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(SeminarCatalogApi.Currency);
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
            expect(data.localName).to.be.a('string');
            // expect(data.localName).to.be("");
            expect(data.englishName).to.be.a('string');
            // expect(data.englishName).to.be("");
            expect(data.code).to.be.a('string');
            // expect(data.code).to.be("");
            expect(data.symbolLeft).to.be.a('string');
            // expect(data.symbolLeft).to.be("");
            expect(data.symbolRight).to.be.a('string');
            // expect(data.symbolRight).to.be("");
            expect(data.symbolSubLeft).to.be.a('string');
            // expect(data.symbolSubLeft).to.be("");
            expect(data.symbolSubRight).to.be.a('string');
            // expect(data.symbolSubRight).to.be("");
            expect(data.thousandsPoint).to.be.a('string');
            // expect(data.thousandsPoint).to.be("");
            expect(data.decimalPoint).to.be.a('string');
            // expect(data.decimalPoint).to.be("");
            expect(data.decimalDigits).to.be.a('number');
            // expect(data.decimalDigits).to.be(0);
            expect(data.defaultCurrency).to.be.a('number');
            // expect(data.defaultCurrency).to.be(0);
            expect(data.exchangeRate).to.be.a('string');
            // expect(data.exchangeRate).to.be("");
            expect(data.exchangeRateDate).to.be.a('number');
            // expect(data.exchangeRateDate).to.be(0);
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
      describe('currencyDelete', function() {
        it('should call currencyDelete successfully', function(done) {
          // TODO: uncomment, update parameter values for currencyDelete call and complete the assertions
          /*
          var id = 56;

          instance.currencyDelete(id).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(SeminarCatalogApi.Currency);
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
            expect(data.localName).to.be.a('string');
            // expect(data.localName).to.be("");
            expect(data.englishName).to.be.a('string');
            // expect(data.englishName).to.be("");
            expect(data.code).to.be.a('string');
            // expect(data.code).to.be("");
            expect(data.symbolLeft).to.be.a('string');
            // expect(data.symbolLeft).to.be("");
            expect(data.symbolRight).to.be.a('string');
            // expect(data.symbolRight).to.be("");
            expect(data.symbolSubLeft).to.be.a('string');
            // expect(data.symbolSubLeft).to.be("");
            expect(data.symbolSubRight).to.be.a('string');
            // expect(data.symbolSubRight).to.be("");
            expect(data.thousandsPoint).to.be.a('string');
            // expect(data.thousandsPoint).to.be("");
            expect(data.decimalPoint).to.be.a('string');
            // expect(data.decimalPoint).to.be("");
            expect(data.decimalDigits).to.be.a('number');
            // expect(data.decimalDigits).to.be(0);
            expect(data.defaultCurrency).to.be.a('number');
            // expect(data.defaultCurrency).to.be(0);
            expect(data.exchangeRate).to.be.a('string');
            // expect(data.exchangeRate).to.be("");
            expect(data.exchangeRateDate).to.be.a('number');
            // expect(data.exchangeRateDate).to.be(0);
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
      describe('currencyGet', function() {
        it('should call currencyGet successfully', function(done) {
          // TODO: uncomment, update parameter values for currencyGet call and complete the assertions
          /*
          var id = 56;

          instance.currencyGet(id).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(SeminarCatalogApi.Currency);
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
            expect(data.localName).to.be.a('string');
            // expect(data.localName).to.be("");
            expect(data.englishName).to.be.a('string');
            // expect(data.englishName).to.be("");
            expect(data.code).to.be.a('string');
            // expect(data.code).to.be("");
            expect(data.symbolLeft).to.be.a('string');
            // expect(data.symbolLeft).to.be("");
            expect(data.symbolRight).to.be.a('string');
            // expect(data.symbolRight).to.be("");
            expect(data.symbolSubLeft).to.be.a('string');
            // expect(data.symbolSubLeft).to.be("");
            expect(data.symbolSubRight).to.be.a('string');
            // expect(data.symbolSubRight).to.be("");
            expect(data.thousandsPoint).to.be.a('string');
            // expect(data.thousandsPoint).to.be("");
            expect(data.decimalPoint).to.be.a('string');
            // expect(data.decimalPoint).to.be("");
            expect(data.decimalDigits).to.be.a('number');
            // expect(data.decimalDigits).to.be(0);
            expect(data.defaultCurrency).to.be.a('number');
            // expect(data.defaultCurrency).to.be(0);
            expect(data.exchangeRate).to.be.a('string');
            // expect(data.exchangeRate).to.be("");
            expect(data.exchangeRateDate).to.be.a('number');
            // expect(data.exchangeRateDate).to.be(0);
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
      describe('currencyList', function() {
        it('should call currencyList successfully', function(done) {
          // TODO: uncomment currencyList call and complete the assertions
          /*

          instance.currencyList().then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(SeminarCatalogApi.CurrencyPaginationResult);
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
                expect(data).to.be.a(SeminarCatalogApi.Currency);
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
                expect(data.localName).to.be.a('string');
                // expect(data.localName).to.be("");
                expect(data.englishName).to.be.a('string');
                // expect(data.englishName).to.be("");
                expect(data.code).to.be.a('string');
                // expect(data.code).to.be("");
                expect(data.symbolLeft).to.be.a('string');
                // expect(data.symbolLeft).to.be("");
                expect(data.symbolRight).to.be.a('string');
                // expect(data.symbolRight).to.be("");
                expect(data.symbolSubLeft).to.be.a('string');
                // expect(data.symbolSubLeft).to.be("");
                expect(data.symbolSubRight).to.be.a('string');
                // expect(data.symbolSubRight).to.be("");
                expect(data.thousandsPoint).to.be.a('string');
                // expect(data.thousandsPoint).to.be("");
                expect(data.decimalPoint).to.be.a('string');
                // expect(data.decimalPoint).to.be("");
                expect(data.decimalDigits).to.be.a('number');
                // expect(data.decimalDigits).to.be(0);
                expect(data.defaultCurrency).to.be.a('number');
                // expect(data.defaultCurrency).to.be(0);
                expect(data.exchangeRate).to.be.a('string');
                // expect(data.exchangeRate).to.be("");
                expect(data.exchangeRateDate).to.be.a('number');
                // expect(data.exchangeRateDate).to.be(0);
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
      describe('currencyUpdate', function() {
        it('should call currencyUpdate successfully', function(done) {
          // TODO: uncomment, update parameter values for currencyUpdate call and complete the assertions
          /*
          var id = 56;

          instance.currencyUpdate(id).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(SeminarCatalogApi.Currency);
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
            expect(data.localName).to.be.a('string');
            // expect(data.localName).to.be("");
            expect(data.englishName).to.be.a('string');
            // expect(data.englishName).to.be("");
            expect(data.code).to.be.a('string');
            // expect(data.code).to.be("");
            expect(data.symbolLeft).to.be.a('string');
            // expect(data.symbolLeft).to.be("");
            expect(data.symbolRight).to.be.a('string');
            // expect(data.symbolRight).to.be("");
            expect(data.symbolSubLeft).to.be.a('string');
            // expect(data.symbolSubLeft).to.be("");
            expect(data.symbolSubRight).to.be.a('string');
            // expect(data.symbolSubRight).to.be("");
            expect(data.thousandsPoint).to.be.a('string');
            // expect(data.thousandsPoint).to.be("");
            expect(data.decimalPoint).to.be.a('string');
            // expect(data.decimalPoint).to.be("");
            expect(data.decimalDigits).to.be.a('number');
            // expect(data.decimalDigits).to.be(0);
            expect(data.defaultCurrency).to.be.a('number');
            // expect(data.defaultCurrency).to.be(0);
            expect(data.exchangeRate).to.be.a('string');
            // expect(data.exchangeRate).to.be("");
            expect(data.exchangeRateDate).to.be.a('number');
            // expect(data.exchangeRateDate).to.be(0);
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
