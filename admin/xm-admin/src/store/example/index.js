import * as types from './types';
import http from '../../utils/http'

const state = {
  list: {}
};

const actions = {
  [types.GET_LIST] (context, params) {
    http.request('News/getRecommendList', params).then(data => {
      context.commit(types.GET_LIST, data);
    })
  }
};

const mutations = {
  [types.GET_LIST] (state, data) {
    state.list = data.data.list
  }
};

export default {
  state, actions, mutations
}
