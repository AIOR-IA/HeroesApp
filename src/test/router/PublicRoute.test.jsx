import { render, screen } from "@testing-library/react"
import { PublicRoute } from "../../router/PublicRoute"
import { AuthContext } from "../../auth"
import { MemoryRouter, Route, Routes } from "react-router-dom"

describe('Test in <PublicRoute/>', () => { 
    test('should display the children if not authenticated', () => { 
        
        const contextValue = {
            logged:false,
        }

        render(
            <AuthContext.Provider value={ contextValue }>
                <PublicRoute>
                    <h1>Route public</h1>
                </PublicRoute>
            </AuthContext.Provider>
        )

        expect(screen.getByText('Route public')).toBeTruthy();
     })

     test('should navigate if is authenticated', () => { 
        const contextValue = {
            logged:true,
            user:{
                id:10,
                name:'Juan Perez'
            }
        }

        render(
            <AuthContext.Provider value={ contextValue }>
               <MemoryRouter initialEntries={['/login']}>
                <Routes>
                    <Route path="login" element={
                        <PublicRoute>
                            <h1>Route public</h1>
                        </PublicRoute>
                    }/>
                    <Route path="marvel" element={ <h1> Page Marvel </h1> }/>
                </Routes>
               </MemoryRouter>
            </AuthContext.Provider>
        )
        expect(screen.getByText('Page Marvel')).toBeTruthy();
        screen.debug();
      })
 })