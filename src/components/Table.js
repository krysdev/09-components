import { Fragment } from 'react';

function Table({ data, config }) {

  const renderedHeaders = config.map((cfg) => {
    if (cfg.header) {
      return <Fragment key={cfg.label}>{cfg.header()}</Fragment>;
    }
    return <th key={cfg.label}>{cfg.label}</th>;
  });

  // 'dataObject' argument is used in TablePage.js as 'dataObj' (through the 'config' prop)
  const renderedRows = data.map((dataObject) => {
    return (
      <tr className="border-b" key={dataObject.name}>
        {config.map((configObject) => {
          return (
            <td key={configObject.label} className="p-3">
              {configObject.render(dataObject)}
            </td>
          );
        })}
      </tr>
    );
  });

  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">{renderedHeaders}</tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
}

export default Table;
