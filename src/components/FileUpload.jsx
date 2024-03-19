import React, { useState } from 'react';
import clienteAxios from '../config/clienteAxios';
import Card from '../components/Card.jsx'

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');
  const [isFileValid, setIsFileValid] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState();
  const [correctas, setCorrectas] = useState();
  const [erroneas, setErroneas] = useState();
  const [ids, setIds] = useState([]);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile && selectedFile.name.endsWith('.txt')) {
      setFile(selectedFile);
      setIsFileValid(true);
      setMessage('Archivo válido');
    } else {
      setFile(null);
      setIsFileValid(false);
      setMessage('Por favor, selecciona un archivo .txt');
    }
  };

  const handleFileDrop = (event) => {
    event.preventDefault();
    const selectedFile = event.dataTransfer.files[0];

    if (selectedFile && selectedFile.name.endsWith('.txt')) {
      setFile(selectedFile);
      setIsFileValid(true);
      setMessage('Archivo válido');
    } else {
      setFile(null);
      setIsFileValid(false);
      setMessage('Por favor, arrastra un archivo .txt');
    }
  };

  const handleFileSubmit = async () => {
    if (file) {
      setIsLoading(true);

      const formData = new FormData();
      formData.append('file', file, 'file.txt');

      try {
        const token = localStorage.getItem('token');
        const response = await clienteAxios.post('/reenbolsos', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
          },
        });

        setStatus(response.data.status);
        setCorrectas(response.data.totalAffected);
        setErroneas(response.data.totalUnaffected);
        setIds(response.data.unsuccessfulIds.map((item) => item.merchantId));
        console.log(response.data);

        setMessage('Archivo enviado correctamente');
      } catch (error) {
        console.error('Error al enviar el archivo:', error.message);
        setMessage('Error al enviar el archivo');
      } finally {
        setIsLoading(false);
      }
    } else {
      setMessage('Por favor, selecciona un archivo válido primero');
    }
  };

  return (
    <div className="flex flex-col items-center bg-white p-5 rounded-">
      <div
        className={`flex flex-col items-center border-dashed bg-indigo-100 h-[150px] border-2 p-4 ${isFileValid ? 'border-gray-300' : 'border-red-500'}`}
        onDrop={handleFileDrop}
        onDragOver={(event) => event.preventDefault()}
      >
        <input
          type="file"
          accept=".txt"
          onChange={handleFileChange}
          className="hidden"
        />
        <p className="text-lg pt-5 font-bold text-center">
          Arrastra un archivo .txt o haz clic para seleccionar uno.
          <svg className="h-10 w-10 text-gray-600 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="17 8 12 3 7 8" />
            <line x1="12" y1="3" x2="12" y2="15" />
          </svg>
        </p>
      </div>

      {isLoading && <div class="fixed top-0 left-0 h-screen w-screen bg-black opacity-70 flex justify-center items-center">
        <span class="text-3xl mr-4 text-white font-bold">Cargando ...</span>
        <div class="relative inline-flex">
          <div class="w-8 h-8 bg-blue-500 rounded-full"></div>
          <div class="w-8 h-8 bg-blue-500 rounded-full absolute top-0 left-0 animate-ping"></div>
          <div class="w-8 h-8 bg-blue-500 rounded-full absolute top-0 left-0 animate-pulse"></div>
        </div>
      </div>}
      {message && !isLoading && (
        <p className={`mt-4 ${isFileValid ? 'text-green-600' : 'text-red-500'}`}>
          {message}
        </p>
      )}
      <button
        onClick={handleFileSubmit}
        className={`mt-4 px-6 py-2 bg-blue-500 text-white rounded-md ${file && isFileValid ? '' : 'cursor-not-allowed opacity-50'
          }`}
        disabled={!file || !isFileValid || isLoading}
      >
        Enviar Archivo
      </button>
      {!isLoading && status && (
      <Card status={status} correctas={correctas} erroneas={erroneas} ids={ids} />
    )}
    </div>
  );
};

export default FileUpload;