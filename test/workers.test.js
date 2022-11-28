const  supertest = require('supertest');

const app = require('../app');

describe("Probar el sistema de id de Empleado", ()=>{
    it("Debería de obtener una id de Empleado correcto", (done)=>{
        supertest(app).get("/workers")
        .send({'id':'63851c46dbf7fc67807a4000'})
        .expect(200)
        .end(function(err, res){
            if(err) {
                done(err);
            }else{
                done();
            }
        });
    });


    it("No debería de obtener una id de Empleado correcto", (done)=>{
        supertest(app).get("/workers")
        .send({'id':'63851c46dbf7fc67807a40002'})
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