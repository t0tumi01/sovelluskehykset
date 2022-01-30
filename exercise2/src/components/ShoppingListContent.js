import React from 'react';

export default function ShoppingListContent(props) {
  /* Return ShoppingList JSX */
  return (<table><tbody>
      {
        props.listItems.map((i, idx) => {
          if (i.qty > 0) {
            let plural = "";
            if (i.usePluralForm && i.qty > 1) plural = "s";
            return (
              <tr key={idx}>
                <td>{i.qty}{i.unit}</td>
                <td>{i.itemName}{plural}</td>
              </tr>
            )
          }
        })
    }
  </tbody></table>);
}
