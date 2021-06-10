import { shallow } from "enzyme"
import { TodoListItem } from "../../../components/08-useReducer/TodoListItem"


describe('Test in TodoListItem', () => {
    test('should show correctly', () => {
        
        const wrapper = shallow(<TodoListItem/>)
        expect(wrapper).toMatchSnapshot();
    })
        
})
