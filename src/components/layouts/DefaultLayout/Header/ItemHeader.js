import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
function ItemHeader(props) {
  let ItemLink = 'a';
  if (props.to) {
    ItemLink = Link;
  }

  return (
    <div >
      <ItemLink to={props.to} href={props.href} className="ItemHeader-link">
        <FontAwesomeIcon icon={props.icon} className="ItemHeader-icon" />
        <h3 className="ItemHeader-title">{props.title}</h3>
      </ItemLink>
    </div>
  );
}
export default ItemHeader;
