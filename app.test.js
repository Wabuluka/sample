const chai = require('chai');
const app = require('./app');
const chaiHttp = require('chai-http');
const contacts = require('./data/data')

chai.should();
chai.use(chaiHttp);



const contact = contacts.contacts

describe('Testing the default routes', () =>{
  it('Should check the landing url', (done) =>{
      chai
          .request(app)
          .get('/')
          .end((err, res) => {
              res.should.have.status(200);
              done();
          });
  });

  it('Should add a contact to the list', (done) => {
    chai
        .request(app)
        .post('/')
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
  })

  it('Should get a contact from the list', (done) => {
    chai
        .request(app)
        .get('/1')
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
  })

  it('Should edit a contact to the list', (done) => {
    chai
        .request(app)
        .put('/1')
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
  })

  it('Should edit a contact to the list', (done) => {
    chai
        .request(app)
        .delete('/1')
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
  })
})