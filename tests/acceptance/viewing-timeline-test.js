import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import Service from '@ember/service';
import Tweet from 'fcds/lib/Tweet';

module('Acceptance | viewing timeline', function(hooks) {
  setupApplicationTest(hooks);

  test('tweets displayed on timeline', async function(assert) {
    stubTwitterApi(this, [
      new Tweet('id1', 'yoyo', 'hott'),
      new Tweet('id2', 'yoyo', 'cold')
    ]);

    await visit('/my-timeline');

    assert.equal(currentURL(), '/my-timeline');
    assert
      .dom('[data-test-tweet]')
      .exists({ count: 2 }, 'two tweets displayed');
  });
});

const stubTwitterApi = (context, tweets) => {
  let twitterApiStub = Service.extend({ fetch: async () => tweets });
  context.owner.register('service:twitter-api', twitterApiStub);
};
