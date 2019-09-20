import Timeline from "fcds/lib/Timeline";
import Tweet from "fcds/lib/Tweet";
import { module, test } from "qunit";

module("timeline", () => {
  test("it holds tweets", assert => {
    let tweet = new Tweet("abc123", "yohanmishkin");

    let timeline = new Timeline([tweet]);

    assert.equal(timeline.tweets[0].id, tweet.id);
    assert.equal(timeline.tweets[0].username, tweet.username);
  });

  // - adds tweets
  // - doesn't duplicate tweets
  // - adds tweets with duplicate content but different ids
});
