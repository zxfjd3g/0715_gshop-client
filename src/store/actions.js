/*
包含n个用来间接更新状态数据的方法的对象
 */
import {
  RECEIVE_SHOPS,
  RECEIVE_CATEGORYS,
  RECEIVE_ADDRESS,
  RECEIVE_USER,
  RESET_USER
} from './mutation-types'

import {
  reqShops,
  reqFoodCategorys,
  reqAddress,
  reqUser,
  reqLogout
} from '../api'

export default {

  // 获取商家列表的异步action
  async getShops({commit, state}) {
    const {longitude, latitude} = state
    // 1. 发送异步ajax请求
    const result = await reqShops(longitude, latitude)  // {code: 0, data: shops}
    // 2. 根据结果提交mutation
    if (result.code === 0) {
      const shops = result.data
      commit(RECEIVE_SHOPS, {shops})  // action提交给mutation的是包含数据的对象, 而不数据本身
    }
  },

  // 获取食品分类列表的异步action
  async getCategorys({commit}) {
    // 1. 发送异步ajax请求
    const result = await reqFoodCategorys()
    // 2. 根据结果提交mutation
    if (result.code === 0) {
      const categorys = result.data
      commit(RECEIVE_CATEGORYS, {categorys})  // action提交给mutation的是包含数据的对象, 而不数据本身
    }
  },

  // 获取地址信息的异步action
  async getAddress({commit, state}) {
    const {longitude, latitude} = state
    // 1. 发送异步ajax请求
    const result = await reqAddress(longitude, latitude)
    // 2. 根据结果提交mutation
    if (result.code === 0) {
      const address = result.data
      commit(RECEIVE_ADDRESS, {address})  // action提交给mutation的是包含数据的对象, 而不数据本身
    }
  },

  // 保存user的同步action
  saveUser({commit}, user) {
    commit(RECEIVE_USER, {user})
  },

  // 获取当前用户的异步action
  async getUser({commit}) {
    const result = await reqUser()
    if(result.code===0) {
      const user = result.data
      commit(RECEIVE_USER, {user})
    }
  },

  // 请求登出的异步action
  async logout ({commit}) {
    const result = await reqLogout()
    if(result.code===0) {
      commit(RESET_USER)
    }
  }
}