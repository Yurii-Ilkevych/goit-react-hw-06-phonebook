import { useState } from 'react';
import { Wrapper, Search } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { searchContact } from '../redux/filter/actions';

const Filter = () => {
const [value, setValue] = useState("")

const dispatch = useDispatch();

const handleValue = evt => {
  const { value } = evt.currentTarget;
setValue(value)

dispatch(searchContact(value))

  }




    return (
      <Wrapper>
        <label>
          Find contacts by name
          <Search
            name="text"
            type="text"
            value={value}
            onChange={handleValue}
          ></Search>
        </label>
        </Wrapper>
      )
    }

export default Filter;
