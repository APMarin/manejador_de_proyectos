const  supertest = require('supertest');

const app = require('../app');

describe("Probar el sistema de id de tableros", ()=>{
    it("Debería tener una id de tablero correcto", (done)=>{
        supertest(app).get("/boards")
        .send({'id':'6386685a1a01259b4289fea7'})
        .expect(200)
        .end(function(err, res){
            if(err) {
                done(err);
            }else{
                done();
            }
        });
    });

    it("No debería tener una id de tablero correcto", (done)=>{
        supertest(app).get("/boards")
        .send({'id':'6386685a1a01259b4289fea72'})
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