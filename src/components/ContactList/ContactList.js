import { Wrapper, List, Item, WrapperItem, Delete } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { getFilterValue, getContacts } from '../redux/selectors';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'components/redux/contactsSlice';

const ContactList = () => {
  const dispatch = useDispatch();

  const getVisibleContacts = (filterValue, contacts) => {
if(contacts.length === 0){
  return 0
}
    const normalizeFilter = filterValue.toLowerCase();
    const filterContact = contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizeFilter)
    );
    return filterContact;
  };


  const filterValue = useSelector(getFilterValue);
  const contacts = useSelector(getContacts);
  const visibleContacts = getVisibleContacts(filterValue, contacts);

  const hundleContact = contactId => dispatch(deleteContact(contactId))

  return (
    <div>
      {visibleContacts.length > 0 && (
        <Wrapper>
          <List>
            {visibleContacts.map(contact => {
              return (
                <WrapperItem key={contact.id}>
                  <Item>
                    {contact.name}: {contact.number}
                  </Item>
                  <Delete
                    type="button"
                    onClick={() => {
                      hundleContact(contact.id);
                    }}
                  >
                    Delete
                  </Delete>
                </WrapperItem>
              );
            })}
          </List>
        </Wrapper>
      )}
    </div>
  );
};
export default ContactList;

