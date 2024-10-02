import { api } from '../support/api_url';

describe('API tests', () => {
  const newPost = {
    title: 'New post',
    body: 'Hi new post!',
    userId: 9,
  };

  const updatedPost = {
    title: 'Updated title',
    body: 'Updated body',
    userId: 9,
  };

  it('GET - Return all posts', () => {
    cy.request({
      url: api.post,
    }).then((response) => {
      // console.log(response)
      expect(response.status).to.eq(200);
      expect(response.body[0]).to.have.property('title');
      expect(response.body).to.have.length.greaterThan(0);
    });
  });

  it('POST - Create a new post', () => {
    cy.request({
      method: 'POST',
      url: api.post,
      body: newPost,
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.title).to.eq(newPost.title);
    });
  });

  it('PUT - put new information', () => {
    cy.request({
      method: 'PUT',
      url: api.put,
      body: updatedPost,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.title).to.eq(updatedPost.title);
    });
  });

  it('DELETE - delete all', () => {
    cy.request({
      failOnStatusCode: false,
      method: 'DELETE',
      url: api.put,
    }).then((response: any) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.not.property('title');
    });
  });
});
