const  supertest = require('supertest');

const app = require('../app');

describe("Probar el sistema de id de proyectos", ()=>{
    it("Debería tener una id de proyecto correcto", (done)=>{
        supertest(app).get("/projects")
        .send({'id':'63866c14647c25594128f95c'})
        .expect(200)
        .end(function(err, res){
            if(err) {
                done(err);
            }else{
                done();
            }
        });
    });

    it("No debería tener una id de proyecto correcto", (done)=>{
        supertest(app).get("/projects")
        .send({'id':'63866c14647c25594128f95c2'})
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