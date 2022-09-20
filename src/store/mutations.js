export default {
    LoginUser : function (state ,data){
        state.user = data
        state.isLogin = true
    },
    LogoutUser : function (state ,data){
        state.user = {
            name : '',
            id : ''
        }
        state.isLogin = false
    },
}