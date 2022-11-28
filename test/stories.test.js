const  supertest = require('supertest');

const app = require('../app');

describe("Probar el sistema de id de historias", ()=>{
    it("Debería tener una id de backlog correcto", (done)=>{
        supertest(app).get("/stories")
        .send({'id':'63851019b93ab7ed689c629c'})
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
        .send({'id':'63851019b93ab7ed689c629c2'})
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