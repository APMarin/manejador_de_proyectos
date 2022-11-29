const  supertest = require('supertest');

const app = require('../app');

describe("Probar el sistema de id de historias", ()=>{
    it("Debería tener una id de backlog correcto", (done)=>{
        supertest(app).get("/stories")
        .send({'id':'63866b84647c25594128f952'})
        .expect(200)
        .end(function(err, res){
            if(err) {
                done(err);
            }else{
                done();
            }
        });
    });

    it("No debería tener una id de historias correcto", (done)=>{
        supertest(app).get("/stories")
        .send({'id':'63866b84647c25594128f9522'})
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