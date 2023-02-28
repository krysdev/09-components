function Table({ data }) {
  const renderedRows = data.map((el) => {
    return (
      <tr className="border-b" key={el.name}>
        <td className="p-3">{el.name}</td>
        <td className="p-3">
          <div className={`p-3 m-2 ${el.colour}`}></div>
        </td>
        <td className="p-3">{el.score}</td>
      </tr>
    );
  });

  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">
          <th>Friut</th>
          <th>Colour</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
}

export default Table;
