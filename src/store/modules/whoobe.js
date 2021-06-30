const whoobe = {
    state: {
        login: false,
        user: {},
        message: '',
        popup: null,
        meta: null,
        article: null
    },
    mutations: {
        login ( state , login ){
            state.login = login
        },
        user ( state , user ){
            state.user = user
        },
        popup ( state , payload ){
            state.popup = payload
        },
        message ( state , message ){
            state.message = message
        },
        meta ( state , meta ){
            state.meta = meta
        },
        article ( state , article ){
            state.article = article
        }
    },
    actions: {
        login( { commit } , login ){
            commit ( 'login' , login )
        },
        user( { commit } , user ){
            commit ( 'user' , user )
        },
        popup( { commit } , payload ){
            commit ( 'popup' , payload )
        },
        message( { commit } , message ){
            commit ( 'message' , message )
        },
        meta ( {commit} , meta ){
            commit ( 'meta' , meta )
        },
        article ( { commit } , article ){
            commit ( 'article' , article )
        }
    }

}
export default whoobe