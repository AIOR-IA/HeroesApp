import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { SearchPage } from "../../../heroes/pages/SearchPage"
import queryString from 'query-string';
describe('test in <SearchPage/>', () => { 
    test('should display correctly with defaul values', () => { 
        const {container }= render( 
            <MemoryRouter>
                <SearchPage/>
            </MemoryRouter>
        )
        expect( container ).toMatchSnapshot();
     })

     test('should display Batman and the input with the value of queryString', () => { 
        render( 
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchPage/>
            </MemoryRouter>
        )
        const input = screen.getByRole('textbox');
        expect( input.value ).toBe('batman');

        const alert = screen.getByLabelText('alert-danger');
        console.log(alert.style)
        expect( alert.style.display ).toBe('none');
      });

      test('should display an error if the hero is not found', () => { 
        render( 
            <MemoryRouter initialEntries={['/search?q=zzz']}>
                <SearchPage/>
            </MemoryRouter>
        )
        screen.debug();


        const alert = screen.getByText('No hero with');
        expect(alert).toBeTruthy();
       })

       test('should call the navigate to the new screen', () => { second })
 })