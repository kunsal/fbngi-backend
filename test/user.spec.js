const { expect, app, chai } = require('./base.spec');

const sinon = require('sinon');
const User = require('../src/models/user');
const jwt = require('jsonwebtoken');

const endpoint = '/api/v1/user/login';

describe('User', () => {
  context('Login', () => {
    it('should return error if email is missing', (done) => {
      chai.request(app)
          .post(endpoint)
          .send({
            email: '', 
          })
          .end((err, res) => {
            expect(res.status).to.equal(400);
            expect(res.body).to.have.property('status');
            expect(res.body.status).to.equal('error');
            expect(res.body).to.have.property('error', 'Invalid email/password');
          });
          done();
    });

    it('should return error if password is missing', (done) => {
      chai.request(app)
          .post(endpoint)
          .send({
            email: 'kunsal'
          })
          .end((err, res) => {
            expect(res.status).to.equal(400);
            expect(res.body).to.have.property('status');
            expect(res.body.status).to.equal('error');
            expect(res.body).to.have.property('error', 'Invalid email/password');
            
          });
          done();
    });

    context('with parameters', () => {
      afterEach(() => {
        sinon.restore();
      });

      it('should return error if email is not registered', async (done) => {
        const findByStub = sinon.stub(User.prototype, 'findBy').callsFake((field, value, single) => {
          return Promise.resolve({
            rowCount: 0
          });
        });
        chai.request(app)
            .post(endpoint)
            .send({
              email: 'kunsal',
              password: 'admin'
            })
            .end((err, res) => {
              //expect(findByStub.calledOnce).to.be.true;
              expect(res.status).to.equal(400);
              expect(res.body).to.have.property('status');
              expect(res.body.status).to.equal('error');
              expect(res.body).to.have.property('error', 'Invalid email/password');
            });
            done();
      });
      
      it('should login user if credentials are valid and return token', function(done) {
        sinon.stub(User.prototype, 'verify').callsFake((password, hashedPassword) => {
          return Promise.resolve(true);
        });
        chai.request(app)
            .post(endpoint)
            .send({
              email: 'olakunle@email.com',
              password: 'admin'
            })
            .end((err, res) => {
              expect(res.status).to.equal(200);
              expect(res.body).to.have.property('status');
              expect(res.body.status).to.equal('success');
              expect(res.body).to.have.property('data');
              expect(res.body.data).to.have.property('userId');
              expect(res.body.data).to.have.property('token');
            });
            done();
      });
    })
    
  })
})