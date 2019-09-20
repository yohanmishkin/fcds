import Timeline from 'fcds/lib/Timeline';
import Tweet from 'fcds/lib/Tweet';
import { module, test } from 'qunit';

module('timeline', () => {
  test('it holds tweets', assert => {
    let tweet = new Tweet('abc123', 'yohanmishkin', 'hott');

    let timeline = new Timeline([tweet]);

    assert.equal(timeline.tweets[0].id, tweet.id);
    assert.equal(timeline.tweets[0].username, tweet.username);
    assert.equal(timeline.tweets[0].text, tweet.text);
  });

  test('it adds tweets', assert => {
    let tweetA = new Tweet('abc123', 'yohanmishkin');
    let tweetB = new Tweet('def123', 'yohanmishkin');

    let timeline = new Timeline([tweetA]);

    assert.equal(timeline.add([tweetB]).tweets.length, 2);
  });
});
