const supertest = require('supertest');
const app = require('../src/app');

// eslint-disable-next-line no-undef
test('Home page routing test', (done) => {
  supertest(app).get('/')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err) => (err ? done(err) : done()));
});

// eslint-disable-next-line no-undef
test('All movies routing test', (done) => {
  supertest(app).get('/api/movies')
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err) => (err ? done(err) : done()));
});
// eslint-disable-next-line no-undef
test('JS script file routing test', (done) => {
  supertest(app).get('/script.js')
    .expect(200)
    .expect('Content-Type', /javascript/)
    .end((err) => (err ? done(err) : done()));
});

// eslint-disable-next-line no-undef
test('CSS file routing test', (done) => {
  supertest(app).get('/sty.css')
    .expect(200)
    .expect('Content-Type', /css/)
    .end((err) => (err ? done(err) : done()));
});

// eslint-disable-next-line no-undef
test('NOT-FOUND page routing test', (done) => {
  supertest(app).get('/api/notFound')
    .expect(404)
    .expect('Content-Type', /html/)
    .end((err) => (err ? done(err) : done()));
});
