import { Table } from "reactstrap";

const MenuTable = ({items}) => (

<Table>
  <thead>
    <tr>
      <th>
        Dish
      </th>
      <th>
        Description
      </th>
      <th>
        Price
      </th>
      <th>
        Image
      </th>
    </tr>
  </thead>
  <tbody>
      {items.map((item, index) => (
        <tr key={index}>
          <td>{item.name}</td>
          <td>{item.description}</td>
          <td>{item.price}</td>
          <td>
            <img src={item.image} alt={item.name} style={{ height: '80px' }} />
          </td>
        </tr>
      ))}
  </tbody>
</Table>
);

export default MenuTable;
