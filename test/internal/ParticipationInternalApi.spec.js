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
    instance = new SeminarCatalogApi.ParticipationInternalApi();
  });

  describe('(package)', function() {
    describe('ParticipationInternalApi', function() {
      describe('participationCreate', function() {
        it('should call participationCreate successfully', function(done) {
          // TODO: uncomment participationCreate call and complete the assertions
          /*

          instance.participationCreate().then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(SeminarCatalogApi.Participation);
            expect(data.seminar).to.be.a('number');
            // expect(data.seminar).to.be(0);
            expect(data.status).to.be.a('number');
            // expect(data.status).to.be(0);
            expect(data.accommodation).to.be.a('number');
            // expect(data.accommodation).to.be(0);
            expect(data.confirmation).to.be.a('number');
            // expect(data.confirmation).to.be(0);
            expect(data.checkedParticipantData).to.be.a('number');
            // expect(data.checkedParticipantData).to.be(0);
            expect(data.faxReceived).to.be.a('number');
            // expect(data.faxReceived).to.be(0);
            expect(data.faxFile).to.be.a('string');
            // expect(data.faxFile).to.be("");
            expect(data.learningFinished).to.be.a('number');
            // expect(data.learningFinished).to.be(0);
            expect(data.exportedToList).to.be.a('number');
            // expect(data.exportedToList).to.be(0);
            expect(data.hasCertificate).to.be.a('number');
            // expect(data.hasCertificate).to.be(0);
            expect(data.downloadCertificate).to.be.a('number');
            // expect(data.downloadCertificate).to.be(0);
            expect(data.workingGroup).to.be.a('number');
            // expect(data.workingGroup).to.be(0);
            expect(data.materialShippingDate).to.be.a('number');
            // expect(data.materialShippingDate).to.be(0);
            expect(data.annotation).to.be.a('string');
            // expect(data.annotation).to.be("");
            expect(data.attendance).to.be.a('number');
            // expect(data.attendance).to.be(0);
            expect(data.attendanceDate).to.be.a('number');
            // expect(data.attendanceDate).to.be(0);
            expect(data.presentDays).to.be.a('number');
            // expect(data.presentDays).to.be();
            expect(data.hasInstructorPotential).to.be.a('number');
            // expect(data.hasInstructorPotential).to.be(0);
            expect(data.firstReminderStatus).to.be.a('number');
            // expect(data.firstReminderStatus).to.be(0);
            expect(data.secondReminderStatus).to.be.a('number');
            // expect(data.secondReminderStatus).to.be(0);
            expect(data.thirdReminderStatus).to.be.a('number');
            // expect(data.thirdReminderStatus).to.be(0);
            expect(data.certificateDate).to.be.a('number');
            // expect(data.certificateDate).to.be(0);
            expect(data.instructorPotentialDate).to.be.a('number');
            // expect(data.instructorPotentialDate).to.be(0);
            expect(data.document).to.be.a('string');
            // expect(data.document).to.be("");
            expect(data.documentWhere).to.be.a('string');
            // expect(data.documentWhere).to.be("");
            expect(data.documentDate).to.be.a('string');
            // expect(data.documentDate).to.be("");
            expect(data.requirementsFulfilled).to.be.a('number');
            // expect(data.requirementsFulfilled).to.be(0);
            expect(data.hasManCertificate).to.be.a('number');
            // expect(data.hasManCertificate).to.be(0);
            expect(data.enablingUser).to.be.a('number');
            // expect(data.enablingUser).to.be(0);
            expect(data.enablingComment).to.be.a('number');
            // expect(data.enablingComment).to.be(0);
            expect(data.blockedManCertificate).to.be.a('number');
            // expect(data.blockedManCertificate).to.be(0);
            expect(data.blockingUser).to.be.a('number');
            // expect(data.blockingUser).to.be(0);
            expect(data.blockingDate).to.be.a('number');
            // expect(data.blockingDate).to.be(0);
            expect(data.blockingComment).to.be.a('number');
            // expect(data.blockingComment).to.be(0);
            expect(data.client).to.be.a('number');
            // expect(data.client).to.be(0);
            expect(data.certBody).to.be.a('number');
            // expect(data.certBody).to.be(0);
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
      describe('participationDelete', function() {
        it('should call participationDelete successfully', function(done) {
          // TODO: uncomment, update parameter values for participationDelete call and complete the assertions
          /*
          var id = 56;

          instance.participationDelete(id).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(SeminarCatalogApi.Participation);
            expect(data.seminar).to.be.a('number');
            // expect(data.seminar).to.be(0);
            expect(data.status).to.be.a('number');
            // expect(data.status).to.be(0);
            expect(data.accommodation).to.be.a('number');
            // expect(data.accommodation).to.be(0);
            expect(data.confirmation).to.be.a('number');
            // expect(data.confirmation).to.be(0);
            expect(data.checkedParticipantData).to.be.a('number');
            // expect(data.checkedParticipantData).to.be(0);
            expect(data.faxReceived).to.be.a('number');
            // expect(data.faxReceived).to.be(0);
            expect(data.faxFile).to.be.a('string');
            // expect(data.faxFile).to.be("");
            expect(data.learningFinished).to.be.a('number');
            // expect(data.learningFinished).to.be(0);
            expect(data.exportedToList).to.be.a('number');
            // expect(data.exportedToList).to.be(0);
            expect(data.hasCertificate).to.be.a('number');
            // expect(data.hasCertificate).to.be(0);
            expect(data.downloadCertificate).to.be.a('number');
            // expect(data.downloadCertificate).to.be(0);
            expect(data.workingGroup).to.be.a('number');
            // expect(data.workingGroup).to.be(0);
            expect(data.materialShippingDate).to.be.a('number');
            // expect(data.materialShippingDate).to.be(0);
            expect(data.annotation).to.be.a('string');
            // expect(data.annotation).to.be("");
            expect(data.attendance).to.be.a('number');
            // expect(data.attendance).to.be(0);
            expect(data.attendanceDate).to.be.a('number');
            // expect(data.attendanceDate).to.be(0);
            expect(data.presentDays).to.be.a('number');
            // expect(data.presentDays).to.be();
            expect(data.hasInstructorPotential).to.be.a('number');
            // expect(data.hasInstructorPotential).to.be(0);
            expect(data.firstReminderStatus).to.be.a('number');
            // expect(data.firstReminderStatus).to.be(0);
            expect(data.secondReminderStatus).to.be.a('number');
            // expect(data.secondReminderStatus).to.be(0);
            expect(data.thirdReminderStatus).to.be.a('number');
            // expect(data.thirdReminderStatus).to.be(0);
            expect(data.certificateDate).to.be.a('number');
            // expect(data.certificateDate).to.be(0);
            expect(data.instructorPotentialDate).to.be.a('number');
            // expect(data.instructorPotentialDate).to.be(0);
            expect(data.document).to.be.a('string');
            // expect(data.document).to.be("");
            expect(data.documentWhere).to.be.a('string');
            // expect(data.documentWhere).to.be("");
            expect(data.documentDate).to.be.a('string');
            // expect(data.documentDate).to.be("");
            expect(data.requirementsFulfilled).to.be.a('number');
            // expect(data.requirementsFulfilled).to.be(0);
            expect(data.hasManCertificate).to.be.a('number');
            // expect(data.hasManCertificate).to.be(0);
            expect(data.enablingUser).to.be.a('number');
            // expect(data.enablingUser).to.be(0);
            expect(data.enablingComment).to.be.a('number');
            // expect(data.enablingComment).to.be(0);
            expect(data.blockedManCertificate).to.be.a('number');
            // expect(data.blockedManCertificate).to.be(0);
            expect(data.blockingUser).to.be.a('number');
            // expect(data.blockingUser).to.be(0);
            expect(data.blockingDate).to.be.a('number');
            // expect(data.blockingDate).to.be(0);
            expect(data.blockingComment).to.be.a('number');
            // expect(data.blockingComment).to.be(0);
            expect(data.client).to.be.a('number');
            // expect(data.client).to.be(0);
            expect(data.certBody).to.be.a('number');
            // expect(data.certBody).to.be(0);
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
      describe('participationGet', function() {
        it('should call participationGet successfully', function(done) {
          // TODO: uncomment, update parameter values for participationGet call and complete the assertions
          /*
          var id = 56;

          instance.participationGet(id).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(SeminarCatalogApi.Participation);
            expect(data.seminar).to.be.a('number');
            // expect(data.seminar).to.be(0);
            expect(data.status).to.be.a('number');
            // expect(data.status).to.be(0);
            expect(data.accommodation).to.be.a('number');
            // expect(data.accommodation).to.be(0);
            expect(data.confirmation).to.be.a('number');
            // expect(data.confirmation).to.be(0);
            expect(data.checkedParticipantData).to.be.a('number');
            // expect(data.checkedParticipantData).to.be(0);
            expect(data.faxReceived).to.be.a('number');
            // expect(data.faxReceived).to.be(0);
            expect(data.faxFile).to.be.a('string');
            // expect(data.faxFile).to.be("");
            expect(data.learningFinished).to.be.a('number');
            // expect(data.learningFinished).to.be(0);
            expect(data.exportedToList).to.be.a('number');
            // expect(data.exportedToList).to.be(0);
            expect(data.hasCertificate).to.be.a('number');
            // expect(data.hasCertificate).to.be(0);
            expect(data.downloadCertificate).to.be.a('number');
            // expect(data.downloadCertificate).to.be(0);
            expect(data.workingGroup).to.be.a('number');
            // expect(data.workingGroup).to.be(0);
            expect(data.materialShippingDate).to.be.a('number');
            // expect(data.materialShippingDate).to.be(0);
            expect(data.annotation).to.be.a('string');
            // expect(data.annotation).to.be("");
            expect(data.attendance).to.be.a('number');
            // expect(data.attendance).to.be(0);
            expect(data.attendanceDate).to.be.a('number');
            // expect(data.attendanceDate).to.be(0);
            expect(data.presentDays).to.be.a('number');
            // expect(data.presentDays).to.be();
            expect(data.hasInstructorPotential).to.be.a('number');
            // expect(data.hasInstructorPotential).to.be(0);
            expect(data.firstReminderStatus).to.be.a('number');
            // expect(data.firstReminderStatus).to.be(0);
            expect(data.secondReminderStatus).to.be.a('number');
            // expect(data.secondReminderStatus).to.be(0);
            expect(data.thirdReminderStatus).to.be.a('number');
            // expect(data.thirdReminderStatus).to.be(0);
            expect(data.certificateDate).to.be.a('number');
            // expect(data.certificateDate).to.be(0);
            expect(data.instructorPotentialDate).to.be.a('number');
            // expect(data.instructorPotentialDate).to.be(0);
            expect(data.document).to.be.a('string');
            // expect(data.document).to.be("");
            expect(data.documentWhere).to.be.a('string');
            // expect(data.documentWhere).to.be("");
            expect(data.documentDate).to.be.a('string');
            // expect(data.documentDate).to.be("");
            expect(data.requirementsFulfilled).to.be.a('number');
            // expect(data.requirementsFulfilled).to.be(0);
            expect(data.hasManCertificate).to.be.a('number');
            // expect(data.hasManCertificate).to.be(0);
            expect(data.enablingUser).to.be.a('number');
            // expect(data.enablingUser).to.be(0);
            expect(data.enablingComment).to.be.a('number');
            // expect(data.enablingComment).to.be(0);
            expect(data.blockedManCertificate).to.be.a('number');
            // expect(data.blockedManCertificate).to.be(0);
            expect(data.blockingUser).to.be.a('number');
            // expect(data.blockingUser).to.be(0);
            expect(data.blockingDate).to.be.a('number');
            // expect(data.blockingDate).to.be(0);
            expect(data.blockingComment).to.be.a('number');
            // expect(data.blockingComment).to.be(0);
            expect(data.client).to.be.a('number');
            // expect(data.client).to.be(0);
            expect(data.certBody).to.be.a('number');
            // expect(data.certBody).to.be(0);
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
      describe('participationList', function() {
        it('should call participationList successfully', function(done) {
          // TODO: uncomment participationList call and complete the assertions
          /*

          instance.participationList().then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(SeminarCatalogApi.ParticipationPaginationResult);
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
                expect(data).to.be.a(SeminarCatalogApi.Participation);
                expect(data.seminar).to.be.a('number');
                // expect(data.seminar).to.be(0);
                expect(data.status).to.be.a('number');
                // expect(data.status).to.be(0);
                expect(data.accommodation).to.be.a('number');
                // expect(data.accommodation).to.be(0);
                expect(data.confirmation).to.be.a('number');
                // expect(data.confirmation).to.be(0);
                expect(data.checkedParticipantData).to.be.a('number');
                // expect(data.checkedParticipantData).to.be(0);
                expect(data.faxReceived).to.be.a('number');
                // expect(data.faxReceived).to.be(0);
                expect(data.faxFile).to.be.a('string');
                // expect(data.faxFile).to.be("");
                expect(data.learningFinished).to.be.a('number');
                // expect(data.learningFinished).to.be(0);
                expect(data.exportedToList).to.be.a('number');
                // expect(data.exportedToList).to.be(0);
                expect(data.hasCertificate).to.be.a('number');
                // expect(data.hasCertificate).to.be(0);
                expect(data.downloadCertificate).to.be.a('number');
                // expect(data.downloadCertificate).to.be(0);
                expect(data.workingGroup).to.be.a('number');
                // expect(data.workingGroup).to.be(0);
                expect(data.materialShippingDate).to.be.a('number');
                // expect(data.materialShippingDate).to.be(0);
                expect(data.annotation).to.be.a('string');
                // expect(data.annotation).to.be("");
                expect(data.attendance).to.be.a('number');
                // expect(data.attendance).to.be(0);
                expect(data.attendanceDate).to.be.a('number');
                // expect(data.attendanceDate).to.be(0);
                expect(data.presentDays).to.be.a('number');
                // expect(data.presentDays).to.be();
                expect(data.hasInstructorPotential).to.be.a('number');
                // expect(data.hasInstructorPotential).to.be(0);
                expect(data.firstReminderStatus).to.be.a('number');
                // expect(data.firstReminderStatus).to.be(0);
                expect(data.secondReminderStatus).to.be.a('number');
                // expect(data.secondReminderStatus).to.be(0);
                expect(data.thirdReminderStatus).to.be.a('number');
                // expect(data.thirdReminderStatus).to.be(0);
                expect(data.certificateDate).to.be.a('number');
                // expect(data.certificateDate).to.be(0);
                expect(data.instructorPotentialDate).to.be.a('number');
                // expect(data.instructorPotentialDate).to.be(0);
                expect(data.document).to.be.a('string');
                // expect(data.document).to.be("");
                expect(data.documentWhere).to.be.a('string');
                // expect(data.documentWhere).to.be("");
                expect(data.documentDate).to.be.a('string');
                // expect(data.documentDate).to.be("");
                expect(data.requirementsFulfilled).to.be.a('number');
                // expect(data.requirementsFulfilled).to.be(0);
                expect(data.hasManCertificate).to.be.a('number');
                // expect(data.hasManCertificate).to.be(0);
                expect(data.enablingUser).to.be.a('number');
                // expect(data.enablingUser).to.be(0);
                expect(data.enablingComment).to.be.a('number');
                // expect(data.enablingComment).to.be(0);
                expect(data.blockedManCertificate).to.be.a('number');
                // expect(data.blockedManCertificate).to.be(0);
                expect(data.blockingUser).to.be.a('number');
                // expect(data.blockingUser).to.be(0);
                expect(data.blockingDate).to.be.a('number');
                // expect(data.blockingDate).to.be(0);
                expect(data.blockingComment).to.be.a('number');
                // expect(data.blockingComment).to.be(0);
                expect(data.client).to.be.a('number');
                // expect(data.client).to.be(0);
                expect(data.certBody).to.be.a('number');
                // expect(data.certBody).to.be(0);
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
      describe('participationUpdate', function() {
        it('should call participationUpdate successfully', function(done) {
          // TODO: uncomment, update parameter values for participationUpdate call and complete the assertions
          /*
          var id = 56;

          instance.participationUpdate(id).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(SeminarCatalogApi.Participation);
            expect(data.seminar).to.be.a('number');
            // expect(data.seminar).to.be(0);
            expect(data.status).to.be.a('number');
            // expect(data.status).to.be(0);
            expect(data.accommodation).to.be.a('number');
            // expect(data.accommodation).to.be(0);
            expect(data.confirmation).to.be.a('number');
            // expect(data.confirmation).to.be(0);
            expect(data.checkedParticipantData).to.be.a('number');
            // expect(data.checkedParticipantData).to.be(0);
            expect(data.faxReceived).to.be.a('number');
            // expect(data.faxReceived).to.be(0);
            expect(data.faxFile).to.be.a('string');
            // expect(data.faxFile).to.be("");
            expect(data.learningFinished).to.be.a('number');
            // expect(data.learningFinished).to.be(0);
            expect(data.exportedToList).to.be.a('number');
            // expect(data.exportedToList).to.be(0);
            expect(data.hasCertificate).to.be.a('number');
            // expect(data.hasCertificate).to.be(0);
            expect(data.downloadCertificate).to.be.a('number');
            // expect(data.downloadCertificate).to.be(0);
            expect(data.workingGroup).to.be.a('number');
            // expect(data.workingGroup).to.be(0);
            expect(data.materialShippingDate).to.be.a('number');
            // expect(data.materialShippingDate).to.be(0);
            expect(data.annotation).to.be.a('string');
            // expect(data.annotation).to.be("");
            expect(data.attendance).to.be.a('number');
            // expect(data.attendance).to.be(0);
            expect(data.attendanceDate).to.be.a('number');
            // expect(data.attendanceDate).to.be(0);
            expect(data.presentDays).to.be.a('number');
            // expect(data.presentDays).to.be();
            expect(data.hasInstructorPotential).to.be.a('number');
            // expect(data.hasInstructorPotential).to.be(0);
            expect(data.firstReminderStatus).to.be.a('number');
            // expect(data.firstReminderStatus).to.be(0);
            expect(data.secondReminderStatus).to.be.a('number');
            // expect(data.secondReminderStatus).to.be(0);
            expect(data.thirdReminderStatus).to.be.a('number');
            // expect(data.thirdReminderStatus).to.be(0);
            expect(data.certificateDate).to.be.a('number');
            // expect(data.certificateDate).to.be(0);
            expect(data.instructorPotentialDate).to.be.a('number');
            // expect(data.instructorPotentialDate).to.be(0);
            expect(data.document).to.be.a('string');
            // expect(data.document).to.be("");
            expect(data.documentWhere).to.be.a('string');
            // expect(data.documentWhere).to.be("");
            expect(data.documentDate).to.be.a('string');
            // expect(data.documentDate).to.be("");
            expect(data.requirementsFulfilled).to.be.a('number');
            // expect(data.requirementsFulfilled).to.be(0);
            expect(data.hasManCertificate).to.be.a('number');
            // expect(data.hasManCertificate).to.be(0);
            expect(data.enablingUser).to.be.a('number');
            // expect(data.enablingUser).to.be(0);
            expect(data.enablingComment).to.be.a('number');
            // expect(data.enablingComment).to.be(0);
            expect(data.blockedManCertificate).to.be.a('number');
            // expect(data.blockedManCertificate).to.be(0);
            expect(data.blockingUser).to.be.a('number');
            // expect(data.blockingUser).to.be(0);
            expect(data.blockingDate).to.be.a('number');
            // expect(data.blockingDate).to.be(0);
            expect(data.blockingComment).to.be.a('number');
            // expect(data.blockingComment).to.be(0);
            expect(data.client).to.be.a('number');
            // expect(data.client).to.be(0);
            expect(data.certBody).to.be.a('number');
            // expect(data.certBody).to.be(0);
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
