import React from 'react';

const Card = ({ status, correctas, erroneas, ids }) => {
  return (
    <div className="rounded-xl shadow-xl p-4 m-2 transition-transform transform-gpu duration-300 hover:scale-110 bg-white">
      <div className="flex flex-col items-center">
        <h2 className="text-lg font-semibold mb-2 uppercase">Resultados: </h2>
        <p className="text-gray-600 mb-4 text-center">{status}</p>
        <p className="text-green-600 mb-4 text-center">{correctas}</p>
        <p className="text-red-600 mb-4 text-center">{erroneas}</p>
        {ids.length > 0 && (
          <textarea className="w-full mt-4" readOnly value={ids.join('\n')} />
        )}
      </div>
    </div>
  );
};

export default Card;