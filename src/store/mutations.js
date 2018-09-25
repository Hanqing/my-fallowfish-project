const mutations = {
  setCurIndex (state, index) {
    state.curIndex = index
  },
  hasLogin (state) {
    state.isLogin = true
  },
  setUsername (state, username) {
    state.username = username
  },
  setStarnum (state) {
    state.starnum++
  },
  cutStarnum (state) {
    state.starnum--
  },
  setFannum (state) {
    state.fannum++
  },
  cutFannum (state) {
    state.fannum--
  },
  setFocusnum (state) {
    state.focusnum++
  },
  cutFocusnum (state) {
    state.focusnum--
  },
  setFabunum (state) {
    state.fabunum++
  },
  cutFabunum (state) {
    state.fabunum--
  },
  setSellnum (state) {
    state.sellnum++
  },
  cutSellnum (state) {
    state.sellnum--
  },
  setBuynum (state) {
    state.buynum++
  },
  cutBuynum (state) {
    state.buynum--
  },
  setLikenum (state) {
    state.likenum++
  },
  cutLikenum (state) {
    state.likenum--
  },
  setUserinfo (state, userinfo) {
    window.localStorage.setItem('useravatar', userinfo.avatar)
    state.userinfo = userinfo
  },
  noLogin (state) {
    state.isLogin = false
  },
  setNews (state, news) {
    state.news = news
  },
  setAddr (state, address) {
    state.address = address
  },
  setGoods (state, good) {
    state.goods.push(good)
  },
  cutGoods (state, index) {
    state.goods.splice(index, 1)
    state.buynum--
  },
  setReceive (state, obj) {
    state.goods[obj.index].receive = obj.receive
  },
  setDel (state, obj) {
    state.goods[obj.index].del = obj.del
  },
  setFabuinfo (state, info) {
    state.fabuinfo.push(info)
  },
  cutFabuinfo (state, index) {
    state.fabuinfo.splice(index, 1)
    state.fabunum--
  }
}

export default mutations
