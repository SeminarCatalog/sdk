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

  describe('(package)', function() {
    describe('CountryPaginationResult', function() {
      beforeEach(function() {
        instance = new SeminarCatalogApi.CountryPaginationResult();
      });

      it('should create an instance of CountryPaginationResult', function() {
        // TODO: update the code to test CountryPaginationResult
        expect(instance).to.be.a(SeminarCatalogApi.CountryPaginationResult);
      });

      it('should have the property limit (base name: "limit")', function() {
        // TODO: update the code to test the property limit
        expect(instance).to.have.property('limit');
        // expect(instance.limit).to.be(expectedValueLiteral);
      });

      it('should have the property offset (base name: "offset")', function() {
        // TODO: update the code to test the property offset
        expect(instance).to.have.property('offset');
        // expect(instance.offset).to.be(expectedValueLiteral);
      });

      it('should have the property entryCount (base name: "entryCount")', function() {
        // TODO: update the code to test the property entryCount
        expect(instance).to.have.property('entryCount');
        // expect(instance.entryCount).to.be(expectedValueLiteral);
      });

      it('should have the property maxEntryCount (base name: "maxEntryCount")', function() {
        // TODO: update the code to test the property maxEntryCount
        expect(instance).to.have.property('maxEntryCount');
        // expect(instance.maxEntryCount).to.be(expectedValueLiteral);
      });

      it('should have the property entries (base name: "entries")', function() {
        // TODO: update the code to test the property entries
        expect(instance).to.have.property('entries');
        // expect(instance.entries).to.be(expectedValueLiteral);
      });

    });
  });

}));
