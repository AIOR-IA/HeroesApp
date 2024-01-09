import { fireEvent, render, screen } from "@testing-library/react";
import { Navbar } from "../../../ui/components/NavBar";
import { useContext } from "react";
import { AuthContext, AuthProvider } from "../../../auth";
import { MemoryRouter } from "react-router-dom";

const mockedUseNavigate = jest.fn();

jest.mock( 'react-router-dom',() => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate,
}));

describe('Test in <Navbar/>', () => { 
    const context = {
        logged: true,
        user: {
            id: 1,
            name:' David Mamani'
        },
        logout: jest.fn()
    }
    beforeEach( () => {
        jest.clearAllMocks();
    })

    test('should display the name of user', () => { 
        
        render(
            <AuthContext.Provider value={context}>
                <MemoryRouter>
                    <Navbar/>
                </MemoryRouter>
            </AuthContext.Provider>
        )
        screen.debug();
        expect(screen.getByText('David Mamani')).toBeTruthy();
     });

    test('should call the logout and navigate when we do click on the button', () => { 


        render(
            <AuthContext.Provider value={context}>
                <MemoryRouter>
                    <Navbar/>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        const logoutBtn = screen.getByRole('button');
        fireEvent.click(logoutBtn);
        expect(context.logout).toHaveBeenCalled();
        expect(mockedUseNavigate).toHaveBeenCalledWith("/login", {"replace": true});
     })

    
 })