const  supertest = require('supertest');

const app = require('../app');

describe("Probar el sistema de id de habilidades", ()=>{
    it("Debería tener una id de habilidad correcta", (done)=>{
        supertest(app).get("/skills")
        .send({'id':'638668671a01259b4289feac'})
        .expect(200)
        .end(function(err, res){
            if(err) {
                done(err);
            }else{
                done();
            }
        });
    });

    it("No debería tener una id de habilidad correcta", (done)=>{
        supertest(app).get("/skills")
        .send({'id':'638668671a01259b4289feac2'})
        .expect(403)
        .end(function(err, res){
            if(err) {
                done(err);
            }else{
                done();
            }
        });
    });

});