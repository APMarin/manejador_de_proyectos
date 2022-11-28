const  supertest = require('supertest');

const app = require('../app');

describe("Probar el sistema de id de actores", ()=>{
    it("Debería tener una id de backlog correcto", (done)=>{
        supertest(app).get("/backlogs")
        .send({'id':'63851028b93ab7ed689c629f'})
        .expect(200)
        .end(function(err, res){
            if(err) {
                done(err);
            }else{
                done();
            }
        });
    });

    it("No debería tener una id de backlog correcto", (done)=>{
        supertest(app).get("/backlogs")
        .send({'id':'63851028b93ab7ed689c629f2'})
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