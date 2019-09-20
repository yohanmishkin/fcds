import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class MyTimelineRoute extends Route {
  @service twitterApi;

  model() {
    return this.twitterApi.fetch();
  }
}
