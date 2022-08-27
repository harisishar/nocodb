import request from 'supertest';

const defaultProjectValue = {
  title: 'Title',
};

const createProject = async (app, token) => {
  const response = await request(app)
    .post('/api/v1/db/meta/projects/')
    .set('xc-auth', token)
    .send(defaultProjectValue);

  const project = response.body;
  return project;
};

export { createProject };
