// src/components/common/Table.jsx
export default function Table({ headers, data }) {
    return (
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b">
            <tr>
              {headers.map((header) => (
                <th key={header} className="p-4 font-semibold text-gray-600">{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex} className="border-b last:border-b-0 hover:bg-gray-50">
                {Object.values(row).map((cell, cellIndex) => (
                  <td key={cellIndex} className="p-4 text-gray-800">{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }