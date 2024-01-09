import { authReducer } from "../../../auth/context/authReducer"
import { types } from "../../../auth/types/types";

const initialState =  {
    logged: false,
    user: null,
}
describe('Test in AuthReducer', () => { 
    
    test('should return the default value', () => {
        
        const state= authReducer(initialState , {});
        expect( state ).toBe(initialState)
     })

     test('should clall login auth and preset the user', () => { 
        const userLogin = {
            logged: true,
            user:{
                id:1,
                name:'Zoe Elizabeth'
            }
        }
        const action = {
            type: types.login,
            payload:{
                logged: !!userLogin,
                user: userLogin,
            }
        }
        const state = authReducer(initialState,action);
        expect( state ).toEqual({
            logged:true,
            user: action.payload
        })

      })

      test('should clall logout auth and preset the user', () => { 
        const userLogin = {
            logged: true,
            user:{
                id:1,
                name:'Zoe Elizabeth'
            }
        }
        const action = {
            type: types.logout,
            payload:{
                logged: false,
                user: null,
            }
        }
        const state = authReducer(userLogin,action);
        expect(state.logged).toBeFalsy();
      })
})