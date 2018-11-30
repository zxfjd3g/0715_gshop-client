/*
包含n个用来直接更新状态数据的方法的对象
 */
import Vue from 'vue'
import {
  RECEIVE_SHOPS,
  RECEIVE_CATEGORYS,
  RECEIVE_ADDRESS,
  RECEIVE_USER,
  RESET_USER,
  RECEIVE_INFO,
  RECEIVE_RATINGS,
  RECEIVE_GOODS,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT
} from './mutation-types'

export default {
  [RECEIVE_SHOPS] (state, {shops}) {
    state.shops = shops
  },

  [RECEIVE_CATEGORYS] (state, {categorys}) {
    state.categorys = categorys
  },

  [RECEIVE_ADDRESS] (state, {address}) {
    state.address = address
  },
  [RECEIVE_USER] (state, {user}) {
    state.user = user
  },
  [RESET_USER] (state) {
    state.user = {}
  },
  [RECEIVE_INFO](state, {info}) {
    state.info = info
  },

  [RECEIVE_RATINGS](state, {ratings}) {
    state.ratings = ratings
  },

  [RECEIVE_GOODS](state, {goods}) {
    state.goods = goods
  },

  // 问题: 给有数据绑定的对象添加一个新的属性, 这个属性是没有数据绑定的
  [INCREMENT_FOOD_COUNT](state, {food}) {
    // 如果food没有count, 添加count属性(新的), 并指定值为1
    if(!food.count) {
      // food.count = 1
      Vue.set(food, 'count', 1) // 有数据绑定
    } else {
      // 否则直接加1
      food.count++
    }
  },

  [DECREMENT_FOOD_COUNT](state, {food}) {
    if(food.count>0) {
      food.count--
    }
  },

}