const chai = require('chai');
const app = require('./app');
const chaiHttp = require('chai-http');
chai.should();
chai.use(chaiHttp);


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
})