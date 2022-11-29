const  supertest = require('supertest');

const app = require('../app');

describe("Probar el sistema de id de Empleado", ()=>{
    it("Debería de obtener una id de Empleado correcto", (done)=>{
        supertest(app).get("/workers")
        .send({'id':'63866c44647c25594128f95f'})
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
        .send({'id':'63866c44647c25594128f95f2'})
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