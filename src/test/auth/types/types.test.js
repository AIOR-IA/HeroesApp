import { types } from "../../../auth/types/types"

describe('Test in Types', () => { 
    test('should return these types', () => { 
        expect(types).toEqual({
            login: '[Auth] Login',
            logout: '[Auth] Logout'
        })
     })
 })