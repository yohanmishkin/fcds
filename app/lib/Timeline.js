export default class Timeline {
  constructor(tweets) {
    this._tweets = tweets;
  }

  get tweets() {
    return this._tweets;
  }
}
