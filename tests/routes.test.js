const request = require('supertest')
const app = require('../app')

const randomName = (Math.random() + 1).toString(36).substring(4)
const randomEmail = randomName + "@test.test"
const randomPassword = randomName + (Math.random() + 1).toString(36).substring(4)


describe('Users', () => {
  it('should Signup User', async () => {
    const res = await request(app)
      .post('/users/signup')
      .send({
        pseudo: randomName,
        email: randomEmail,
        password: randomPassword,
      })
    expect(res.statusCode).toEqual(201)
  })
  it('should Login User', async () => {
    const res = await request(app)
      .post('/users/login')
      .send({
        email: randomEmail,
        password: randomPassword,
      })
    expect(res.statusCode).toEqual(200)
  })
  it('should Delete User', async () => {
    const res = await request(app)
      .delete('/users/delete')
      .send({
        email: randomEmail,
      })
    expect(res.statusCode).toEqual(200)
  })
})