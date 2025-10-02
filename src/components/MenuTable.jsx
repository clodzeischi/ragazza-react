import { Table } from "reactstrap";

const MenuTable = ({items}) => (

<Table>
  <thead>
    <tr>
      <th>
        Photo
      </th>
      <th>
        Item
      </th>
      <th>
        Description
      </th>
      <th>
        Price
      </th>
    </tr>
  </thead>
  <tbody>
      {items.map((item, index) => (
        <tr key={index}>
            <td>
                <img src={item.img} alt={item.name} style={{ height: '120px' }} />
            </td>
            <td>{item.name}</td>
            <td>{item.description}</td>
            <td>{item.price}</td>
        </tr>
      ))}
  </tbody>
</Table>
);

export default MenuTable;
