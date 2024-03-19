import React, { useState } from 'react';

const Modelos = () => {
  const [rows, setRows] = useState([{ id: 1 }]);

  const handleAddRow = () => {
    const newRow = { id: rows.length + 1 };
    setRows([...rows, newRow]);
  };

  const [showTypeSelect, setShowTypeSelect] = useState(false);
  const [showRequiredSelect, setShowRequiredSelect] = useState(false);
  const [showTrimSelect, setShowTrimSelect] = useState(false);
  const [showTimestampsSelect, setShowTimestampsSelect] = useState(false);
  const [showDefaultValueInput, setShowDefaultValueInput] = useState(false);
  const [showEnumValueInput, setShowEnumValueInput] = useState(false);
  const [showRefValueInput, setShowRefValueInput] = useState(false);

  const handleTypeCheckboxChange = (event) => {
    setShowTypeSelect(event.target.checked);
  };

  const handleRequiredCheckboxChange = (event) => {
    setShowRequiredSelect(event.target.checked);
  };

  const handleTrimCheckboxChange = (event) => {
    setShowTrimSelect(event.target.checked);
  };

  const handleTimestampsCheckboxChange = (event) => {
    setShowTimestampsSelect(event.target.checked);
  };

  const handleDefaultValueCheckboxChange = (event) => {
    setShowDefaultValueInput(event.target.checked);
  };

  const handleEnumCheckboxChange = (event) => {
    setShowEnumValueInput(event.target.checked);
  };

  const handleRefCheckboxChange = (event) => {
    setShowRefValueInput(event.target.checked);
  };

  return (
    <>
      <div>
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-4xl font-black">Herramientas</h1>
        </div>
        <div className="container mx-auto">
        <div className="w-full sm:w-1/6 md:w-1/12 mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={`endpoint-title`}>
                    Título del Endpoint
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id={`endpoint-title`}
                    type="text"
                    placeholder="Título del Endpoint"
                  />
                </div>
          {rows.map(row => (
            <form key={row.id} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div className="flex flex-wrap">
                <div className="w-full sm:w-1/6 md:w-1/12 mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={`name-${row.id}`}>
                    Nombre
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id={`name-${row.id}`}
                    type="text"
                    placeholder="Nombre"
                  />
                </div>

                <div className="w-full sm:w-1/6 md:w-1/12 mb-4">
                  <input
                    className="mr-2 leading-tight"
                    id="type"
                    type="checkbox"
                    onChange={handleTypeCheckboxChange}
                  />
                  <label className="text-sm text-gray-700" htmlFor="type">
                    Tipo
                  </label>
                  {showTypeSelect && (
                    <select
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
                      id="type-select"
                    >
                      <option value="string">String</option>
                      <option value="number">Num</option>
                      <option value="boolean">Boolean</option>
                    </select>
                  )}
                </div>

                <div className="w-full sm:w-1/6 md:w-1/12 mb-4">
                  <input
                    className="mr-2 leading-tight"
                    id="required"
                    type="checkbox"
                    onChange={handleRequiredCheckboxChange}
                  />
                  <label className="text-sm text-gray-700" htmlFor="required">
                    Requerido
                  </label>
                  {showRequiredSelect && (
                    <select
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
                      id="required-select"
                    >
                      <option value="true">true</option>
                      <option value="false">false</option>
                    </select>
                  )}
                </div>

                <div className="w-full sm:w-1/6 md:w-1/12 mb-4">
                  <input
                    className="mr-2 leading-tight"
                    id="trim"
                    type="checkbox"
                    onChange={handleTrimCheckboxChange}
                  />
                  <label className="text-sm text-gray-700" htmlFor="trim">
                    Trim
                  </label>
                  {showTrimSelect && (
                    <select
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
                      id="trim-select"
                    >
                      <option value="true">true</option>
                      <option value="false">false</option>
                    </select>
                  )}
                </div>

                <div className="w-full sm:w-1/6 md:w-1/12 mb-4">
                  <input
                    className="mr-2 leading-tight"
                    id="default"
                    type="checkbox"
                    onChange={handleDefaultValueCheckboxChange}
                  />
                  <label className="text-sm text-gray-700" htmlFor="default">
                    Default
                  </label>
                  {showDefaultValueInput && (
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
                      id="default-value"
                      type="text"
                      placeholder="Valor por defecto"
                    />
                  )}
                </div>

                <div className="w-full sm:w-1/6 md:w-1/12 mb-4">
                  <input
                    className="mr-2 leading-tight"
                    id="enum"
                    type="checkbox"
                    onChange={handleEnumCheckboxChange}
                  />
                  <label className="text-sm text-gray-700" htmlFor="enum">
                    Enum
                  </label>
                  {showEnumValueInput && (
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
                      id="enum-value"
                      type="text"
                      placeholder="Valores permitidos separados por coma"
                    />
                  )}
                </div>

                <div className="w-full sm:w-1/6 md:w-1/12 mb-4">
                  <input
                    className="mr-2 leading-tight"
                    id="timestamps"
                    type="checkbox"
                    onChange={handleTimestampsCheckboxChange}
                  />
                  <label className="text-sm text-gray-700" htmlFor="timestamps">
                    Timestamps
                  </label>
                  {showTimestampsSelect && (
                    <select
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
                      id="timestamps-select"
                    >
                      <option value="true">true</option>
                      <option value="false">false</option>
                    </select>
                  )}
                </div>

                <div className="w-full sm:w-1/6 md:w-1/12 mb-4">
                  <input
                    className="mr-2 leading-tight"
                    id="ref"
                    type="checkbox"
                    onChange={handleRefCheckboxChange}
                  />
                  <label className="text-sm text-gray-700" htmlFor="ref">
                    Ref
                  </label>
                  {showRefValueInput && (
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
                      id="ref-value"
                      type="text"
                      placeholder="Valor de referencia"
                    />
                  )}
                </div>
                </div>
            </form>
          ))}
        </div>
        <div className="flex items-center justify-center mt-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleAddRow}
          >
            Agregar Fila
          </button>
        </div>
      </div>
    </>
  );
};

export default Modelos;
