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
    describe('Receiver', function() {
      beforeEach(function() {
        instance = new SeminarCatalogApi.Receiver();
      });

      it('should create an instance of Receiver', function() {
        // TODO: update the code to test Receiver
        expect(instance).to.be.a(SeminarCatalogApi.Receiver);
      });

      it('should have the property syncFields (base name: "_syncFields")', function() {
        // TODO: update the code to test the property syncFields
        expect(instance).to.have.property('syncFields');
        // expect(instance.syncFields).to.be(expectedValueLiteral);
      });

      it('should have the property usrId (base name: "usrId")', function() {
        // TODO: update the code to test the property usrId
        expect(instance).to.have.property('usrId');
        // expect(instance.usrId).to.be(expectedValueLiteral);
      });

      it('should have the property active (base name: "active")', function() {
        // TODO: update the code to test the property active
        expect(instance).to.have.property('active');
        // expect(instance.active).to.be(expectedValueLiteral);
      });

      it('should have the property login (base name: "login")', function() {
        // TODO: update the code to test the property login
        expect(instance).to.have.property('login');
        // expect(instance.login).to.be(expectedValueLiteral);
      });

      it('should have the property passwd (base name: "passwd")', function() {
        // TODO: update the code to test the property passwd
        expect(instance).to.have.property('passwd');
        // expect(instance.passwd).to.be(expectedValueLiteral);
      });

      it('should have the property passwdEncType (base name: "passwdEncType")', function() {
        // TODO: update the code to test the property passwdEncType
        expect(instance).to.have.property('passwdEncType');
        // expect(instance.passwdEncType).to.be(expectedValueLiteral);
      });

      it('should have the property firstname (base name: "firstname")', function() {
        // TODO: update the code to test the property firstname
        expect(instance).to.have.property('firstname');
        // expect(instance.firstname).to.be(expectedValueLiteral);
      });

      it('should have the property lastname (base name: "lastname")', function() {
        // TODO: update the code to test the property lastname
        expect(instance).to.have.property('lastname');
        // expect(instance.lastname).to.be(expectedValueLiteral);
      });

      it('should have the property title (base name: "title")', function() {
        // TODO: update the code to test the property title
        expect(instance).to.have.property('title');
        // expect(instance.title).to.be(expectedValueLiteral);
      });

      it('should have the property gender (base name: "gender")', function() {
        // TODO: update the code to test the property gender
        expect(instance).to.have.property('gender');
        // expect(instance.gender).to.be(expectedValueLiteral);
      });

      it('should have the property email (base name: "email")', function() {
        // TODO: update the code to test the property email
        expect(instance).to.have.property('email');
        // expect(instance.email).to.be(expectedValueLiteral);
      });

      it('should have the property institution (base name: "institution")', function() {
        // TODO: update the code to test the property institution
        expect(instance).to.have.property('institution');
        // expect(instance.institution).to.be(expectedValueLiteral);
      });

      it('should have the property department (base name: "department")', function() {
        // TODO: update the code to test the property department
        expect(instance).to.have.property('department');
        // expect(instance.department).to.be(expectedValueLiteral);
      });

      it('should have the property street (base name: "street")', function() {
        // TODO: update the code to test the property street
        expect(instance).to.have.property('street');
        // expect(instance.street).to.be(expectedValueLiteral);
      });

      it('should have the property zipcode (base name: "zipcode")', function() {
        // TODO: update the code to test the property zipcode
        expect(instance).to.have.property('zipcode');
        // expect(instance.zipcode).to.be(expectedValueLiteral);
      });

      it('should have the property city (base name: "city")', function() {
        // TODO: update the code to test the property city
        expect(instance).to.have.property('city');
        // expect(instance.city).to.be(expectedValueLiteral);
      });

      it('should have the property country (base name: "country")', function() {
        // TODO: update the code to test the property country
        expect(instance).to.have.property('country');
        // expect(instance.country).to.be(expectedValueLiteral);
      });

      it('should have the property phoneHome (base name: "phoneHome")', function() {
        // TODO: update the code to test the property phoneHome
        expect(instance).to.have.property('phoneHome');
        // expect(instance.phoneHome).to.be(expectedValueLiteral);
      });

      it('should have the property phoneMobile (base name: "phoneMobile")', function() {
        // TODO: update the code to test the property phoneMobile
        expect(instance).to.have.property('phoneMobile');
        // expect(instance.phoneMobile).to.be(expectedValueLiteral);
      });

      it('should have the property phoneOffice (base name: "phoneOffice")', function() {
        // TODO: update the code to test the property phoneOffice
        expect(instance).to.have.property('phoneOffice');
        // expect(instance.phoneOffice).to.be(expectedValueLiteral);
      });

      it('should have the property fax (base name: "fax")', function() {
        // TODO: update the code to test the property fax
        expect(instance).to.have.property('fax');
        // expect(instance.fax).to.be(expectedValueLiteral);
      });

      it('should have the property matriculation (base name: "matriculation")', function() {
        // TODO: update the code to test the property matriculation
        expect(instance).to.have.property('matriculation');
        // expect(instance.matriculation).to.be(expectedValueLiteral);
      });

      it('should have the property selCountry (base name: "selCountry")', function() {
        // TODO: update the code to test the property selCountry
        expect(instance).to.have.property('selCountry');
        // expect(instance.selCountry).to.be(expectedValueLiteral);
      });

      it('should have the property selCountryOffice (base name: "selCountryOffice")', function() {
        // TODO: update the code to test the property selCountryOffice
        expect(instance).to.have.property('selCountryOffice');
        // expect(instance.selCountryOffice).to.be(expectedValueLiteral);
      });

      it('should have the property trainingYears (base name: "trainingYears")', function() {
        // TODO: update the code to test the property trainingYears
        expect(instance).to.have.property('trainingYears');
        // expect(instance.trainingYears).to.be(expectedValueLiteral);
      });

      it('should have the property position (base name: "position")', function() {
        // TODO: update the code to test the property position
        expect(instance).to.have.property('position');
        // expect(instance.position).to.be(expectedValueLiteral);
      });

      it('should have the property positionYears (base name: "positionYears")', function() {
        // TODO: update the code to test the property positionYears
        expect(instance).to.have.property('positionYears');
        // expect(instance.positionYears).to.be(expectedValueLiteral);
      });

      it('should have the property emailOffice (base name: "emailOffice")', function() {
        // TODO: update the code to test the property emailOffice
        expect(instance).to.have.property('emailOffice');
        // expect(instance.emailOffice).to.be(expectedValueLiteral);
      });

      it('should have the property faxOffice (base name: "faxOffice")', function() {
        // TODO: update the code to test the property faxOffice
        expect(instance).to.have.property('faxOffice');
        // expect(instance.faxOffice).to.be(expectedValueLiteral);
      });

      it('should have the property phoneMobileOffice (base name: "phoneMobileOffice")', function() {
        // TODO: update the code to test the property phoneMobileOffice
        expect(instance).to.have.property('phoneMobileOffice');
        // expect(instance.phoneMobileOffice).to.be(expectedValueLiteral);
      });

      it('should have the property birthPlace (base name: "birthPlace")', function() {
        // TODO: update the code to test the property birthPlace
        expect(instance).to.have.property('birthPlace');
        // expect(instance.birthPlace).to.be(expectedValueLiteral);
      });

      it('should have the property customerNumber (base name: "customerNumber")', function() {
        // TODO: update the code to test the property customerNumber
        expect(instance).to.have.property('customerNumber');
        // expect(instance.customerNumber).to.be(expectedValueLiteral);
      });

      it('should have the property sessionId (base name: "sessionId")', function() {
        // TODO: update the code to test the property sessionId
        expect(instance).to.have.property('sessionId');
        // expect(instance.sessionId).to.be(expectedValueLiteral);
      });

      it('should have the property graduationYear (base name: "graduationYear")', function() {
        // TODO: update the code to test the property graduationYear
        expect(instance).to.have.property('graduationYear');
        // expect(instance.graduationYear).to.be(expectedValueLiteral);
      });

      it('should have the property finalDegreeYear (base name: "finalDegreeYear")', function() {
        // TODO: update the code to test the property finalDegreeYear
        expect(instance).to.have.property('finalDegreeYear');
        // expect(instance.finalDegreeYear).to.be(expectedValueLiteral);
      });

      it('should have the property university (base name: "university")', function() {
        // TODO: update the code to test the property university
        expect(instance).to.have.property('university');
        // expect(instance.university).to.be(expectedValueLiteral);
      });

      it('should have the property education (base name: "education")', function() {
        // TODO: update the code to test the property education
        expect(instance).to.have.property('education');
        // expect(instance.education).to.be(expectedValueLiteral);
      });

      it('should have the property doctorateYear (base name: "doctorateYear")', function() {
        // TODO: update the code to test the property doctorateYear
        expect(instance).to.have.property('doctorateYear');
        // expect(instance.doctorateYear).to.be(expectedValueLiteral);
      });

      it('should have the property specialization (base name: "specialization")', function() {
        // TODO: update the code to test the property specialization
        expect(instance).to.have.property('specialization');
        // expect(instance.specialization).to.be(expectedValueLiteral);
      });

      it('should have the property specializationDate (base name: "specializationDate")', function() {
        // TODO: update the code to test the property specializationDate
        expect(instance).to.have.property('specializationDate');
        // expect(instance.specializationDate).to.be(expectedValueLiteral);
      });

      it('should have the property associations (base name: "associations")', function() {
        // TODO: update the code to test the property associations
        expect(instance).to.have.property('associations');
        // expect(instance.associations).to.be(expectedValueLiteral);
      });

      it('should have the property associationOthers (base name: "associationOthers")', function() {
        // TODO: update the code to test the property associationOthers
        expect(instance).to.have.property('associationOthers');
        // expect(instance.associationOthers).to.be(expectedValueLiteral);
      });

      it('should have the property careOf (base name: "careOf")', function() {
        // TODO: update the code to test the property careOf
        expect(instance).to.have.property('careOf');
        // expect(instance.careOf).to.be(expectedValueLiteral);
      });

      it('should have the property degree (base name: "degree")', function() {
        // TODO: update the code to test the property degree
        expect(instance).to.have.property('degree');
        // expect(instance.degree).to.be(expectedValueLiteral);
      });

      it('should have the property role (base name: "role")', function() {
        // TODO: update the code to test the property role
        expect(instance).to.have.property('role');
        // expect(instance.role).to.be(expectedValueLiteral);
      });

      it('should have the property contactAddress (base name: "contactAddress")', function() {
        // TODO: update the code to test the property contactAddress
        expect(instance).to.have.property('contactAddress');
        // expect(instance.contactAddress).to.be(expectedValueLiteral);
      });

      it('should have the property company2 (base name: "company2")', function() {
        // TODO: update the code to test the property company2
        expect(instance).to.have.property('company2');
        // expect(instance.company2).to.be(expectedValueLiteral);
      });

      it('should have the property streetOffice (base name: "streetOffice")', function() {
        // TODO: update the code to test the property streetOffice
        expect(instance).to.have.property('streetOffice');
        // expect(instance.streetOffice).to.be(expectedValueLiteral);
      });

      it('should have the property zipcodeOffice (base name: "zipcodeOffice")', function() {
        // TODO: update the code to test the property zipcodeOffice
        expect(instance).to.have.property('zipcodeOffice');
        // expect(instance.zipcodeOffice).to.be(expectedValueLiteral);
      });

      it('should have the property cityOffice (base name: "cityOffice")', function() {
        // TODO: update the code to test the property cityOffice
        expect(instance).to.have.property('cityOffice');
        // expect(instance.cityOffice).to.be(expectedValueLiteral);
      });

      it('should have the property countryOffice (base name: "countryOffice")', function() {
        // TODO: update the code to test the property countryOffice
        expect(instance).to.have.property('countryOffice');
        // expect(instance.countryOffice).to.be(expectedValueLiteral);
      });

      it('should have the property debtorNumber (base name: "debtorNumber")', function() {
        // TODO: update the code to test the property debtorNumber
        expect(instance).to.have.property('debtorNumber');
        // expect(instance.debtorNumber).to.be(expectedValueLiteral);
      });

      it('should have the property publicFields (base name: "publicFields")', function() {
        // TODO: update the code to test the property publicFields
        expect(instance).to.have.property('publicFields');
        // expect(instance.publicFields).to.be(expectedValueLiteral);
      });

      it('should have the property userType (base name: "userType")', function() {
        // TODO: update the code to test the property userType
        expect(instance).to.have.property('userType');
        // expect(instance.userType).to.be(expectedValueLiteral);
      });

      it('should have the property changeEmail (base name: "changeEmail")', function() {
        // TODO: update the code to test the property changeEmail
        expect(instance).to.have.property('changeEmail');
        // expect(instance.changeEmail).to.be(expectedValueLiteral);
      });

      it('should have the property disabled (base name: "disabled")', function() {
        // TODO: update the code to test the property disabled
        expect(instance).to.have.property('disabled');
        // expect(instance.disabled).to.be(expectedValueLiteral);
      });

      it('should have the property remarks (base name: "remarks")', function() {
        // TODO: update the code to test the property remarks
        expect(instance).to.have.property('remarks');
        // expect(instance.remarks).to.be(expectedValueLiteral);
      });

      it('should have the property uniformTrainingNumber (base name: "uniformTrainingNumber")', function() {
        // TODO: update the code to test the property uniformTrainingNumber
        expect(instance).to.have.property('uniformTrainingNumber');
        // expect(instance.uniformTrainingNumber).to.be(expectedValueLiteral);
      });

      it('should have the property notificationTechnical (base name: "notificationTechnical")', function() {
        // TODO: update the code to test the property notificationTechnical
        expect(instance).to.have.property('notificationTechnical');
        // expect(instance.notificationTechnical).to.be(expectedValueLiteral);
      });

      it('should have the property notificationNewsletter (base name: "notificationNewsletter")', function() {
        // TODO: update the code to test the property notificationNewsletter
        expect(instance).to.have.property('notificationNewsletter');
        // expect(instance.notificationNewsletter).to.be(expectedValueLiteral);
      });

      it('should have the property ownAffiliateCode (base name: "ownAffiliateCode")', function() {
        // TODO: update the code to test the property ownAffiliateCode
        expect(instance).to.have.property('ownAffiliateCode');
        // expect(instance.ownAffiliateCode).to.be(expectedValueLiteral);
      });

      it('should have the property advertiserAffiliateCode (base name: "advertiserAffiliateCode")', function() {
        // TODO: update the code to test the property advertiserAffiliateCode
        expect(instance).to.have.property('advertiserAffiliateCode');
        // expect(instance.advertiserAffiliateCode).to.be(expectedValueLiteral);
      });

      it('should have the property advertiserAfCodeValidation (base name: "advertiserAfCodeValidation")', function() {
        // TODO: update the code to test the property advertiserAfCodeValidation
        expect(instance).to.have.property('advertiserAfCodeValidation');
        // expect(instance.advertiserAfCodeValidation).to.be(expectedValueLiteral);
      });

      it('should have the property isAffiliateCodeAuthorized (base name: "isAffiliateCodeAuthorized")', function() {
        // TODO: update the code to test the property isAffiliateCodeAuthorized
        expect(instance).to.have.property('isAffiliateCodeAuthorized');
        // expect(instance.isAffiliateCodeAuthorized).to.be(expectedValueLiteral);
      });

      it('should have the property isAffiliateCodeRequested (base name: "isAffiliateCodeRequested")', function() {
        // TODO: update the code to test the property isAffiliateCodeRequested
        expect(instance).to.have.property('isAffiliateCodeRequested');
        // expect(instance.isAffiliateCodeRequested).to.be(expectedValueLiteral);
      });

    });
  });

}));
