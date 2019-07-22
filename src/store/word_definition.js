import axios from './api';


const state = {

    response: [],

    no_definition_found: false,

    loading: false

}

const getters = {

    definitions : state => {

        // in case we did not find definitions we show suggestions

        if( typeof( state.response[0] ) == "string" ){

            return state.response.join(', ')

        } 

        return _.map( state.response, function( item ){

                return item.shortdef

        })

    },

    no_definitions_found : state => {

         return typeof( state.response[0] ) == "string" 

    },

    loading: state => {

        return state.loading;

    }

}

const actions = {

    GET: async (context, payload) => {

        context.commit('SET_LOADING', true)

        await axios.get( payload )
        
        .catch(()=>{})
        
        .then(( response )=> {

            // console.log(response.data)

            _.delay(function(){

                context.commit('SET_LOADING', false)
                context.commit('SET_RESPONSE', response.data)

            }, 1000)


        })

    }

}

const mutations = {

    'SET_RESPONSE': (state, payload) =>{

        state.response = payload

    },

    'SET_LOADING': (state, payload) => {

        state.loading = payload

    }

}

export default {

    state, getters, actions, mutations, namespaced: true

}