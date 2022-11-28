const  supertest = require('supertest');

const app = require('../app');

describe("Probar el sistema de id de proyectos", ()=>{
    it("Debería tener una id de proyecto correcto", (done)=>{
        supertest(app).get("/projects")
        .send({'id':'63851aa1c4eaedc03fb05e3e'})
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
        .send({'id':'63851aa1c4eaedc03fb05e3e2'})
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