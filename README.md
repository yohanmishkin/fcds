# fcds

## core

- tweet
  - id, username, text
  - line_count
  - lines

* timeline

  - tweets
  - add(tweet)

  ### tests

  - holds tweets
  - adds tweets
  - doesn't duplicate tweets
  - adds tweets with duplicate content but different ids

* cursor

  - tweets, selection
  - starting_at
  - up => new cursor
  - down => new cursor

  ### tests

  - returns tweets starting at given tweet
  - returns tweets starting at given index

* tweet renderer

  - tweets, selected tweet, screen height
  - text to be rendered

  ### tests

  - renders multiple tweets
  - highlights selected tweets
  - renders multiline tweets

## shell

- keyboard handling
  - j/k/c
- data fetching
