import React from "react";
import clsx from "clsx";
import "./Table.css";

export interface ITableHeader {
  key: string;
  text: React.ReactNode;
  render?: (any: any) => React.ReactNode;
  width?: string;
  align?: string;
}

export interface ITable {
  headers: ITableHeader[];
  items: Array<any>;
  className?: string;
  loading?: boolean;
}

const TableNotFound = ({ colSpan }: { colSpan: number }) => {
  return (
    <tr>
      <td colSpan={colSpan} className="py-5 px-8 text-center">
        Kayıt Bulunamadı
      </td>
    </tr>
  );
};
const TableLoading = ({ colSpan }: { colSpan: number }) => {
  return (
    <tr>
      <td colSpan={colSpan} className="py-5 px-8 text-center">
        Yükleniyor
      </td>
    </tr>
  );
};

const Table = ({ headers = [], items = [], className = "", loading = false, ...props }: ITable) => {
  const _getHeaders = headers.map((header) => (
    <div
      className="th"
      style={{ maxWidth: header.width, minWidth: header.width, justifyContent: header.align }}
      key={header.key}
    >
      {header.text}
    </div>
  ));
  const _getItems = items.map((item, k) => (
    <>
      {item.beforeRow ? (
        <div className="tr" key={`beforeRow_${k.toString()}`}>
          <td colSpan={headers.length} className="py-5 px-8 text-left">
            {item.beforeRow}
          </td>
        </div>
      ) : (
        <></>
      )}
      <div className="tr" key={`row_${k.toString()}`}>
        {headers.map((header) => (
          <div
            className="td"
            style={{ maxWidth: header.width, minWidth: header.width, justifyContent: header.align }}
            key={header.key}
          >
            {header.render ? header.render(item) : <div className="cell">{item[header.key]}</div>}
          </div>
        ))}
      </div>
      {item.afterRow ? (
        <div key={`afterRow_${k.toString()}`} className={"tr"}>
          <td colSpan={headers.length} className="py-5 px-8 text-left">
            {item.afterRow}
          </td>
        </div>
      ) : (
        <></>
      )}
    </>
  ));

  return (
    <div className={"overflow-hidden"}>
      <div className={clsx("table", className)} {...props}>
        <thead data-testid="tableHeader" className={"thead"}>
          <div className="tr">{_getHeaders}</div>
        </thead>
        <div data-testid="tableBody" className="tbody">
          {loading ? (
            <TableLoading colSpan={headers.length} />
          ) : items.length ? (
            _getItems
          ) : (
            <TableNotFound colSpan={headers.length} />
          )}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Table);
