import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../auth";
import { PrivateRoute } from "../../router/PrivateRoute";
import { MemoryRouter } from "react-router-dom";

describe('test in PrivateRoute', () => { 
    test('should display the children if not authenticated', () => { 
        Storage.prototype.setItem = jest.fn();
        const contextValue = {
            logged:true,
            user: {
                id:1,
                name: 'lenar toledo'
            }
        }

        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/marvel']}>
                    <PrivateRoute>
                        <h1>Route private</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect(screen.getByText('Route private')).toBeTruthy();
        expect( localStorage.setItem ).toHaveBeenCalled();
     })
 })