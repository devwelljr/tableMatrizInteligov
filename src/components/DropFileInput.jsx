import PropTypes from "prop-types";
import React, { useContext, useRef, useState } from "react";
import Context from "../context/Context";

import uploadImg from "../images/cloud-upload-regular-240.png";
import csvImg from "../images/csv_icon.png";
import ContainerDropFileInput from "../styles/dropFileInput";

import Papa from "papaparse";
import { saveAs } from "file-saver";

function DropFileInput() {
  const wrapperRef = useRef(null);
  const { data, setData, setDataParse } = useContext(Context);
  const [file, setFile] = useState({});

  /* Adiociona classe ao arrastar arquivo */
  const onDragEnter = () => wrapperRef.current.classList.add("dragover");

  /* Remove classe ao arrastar arquivo */
  const onDragLeave = () => wrapperRef.current.classList.remove("dragover");

  /* Remove classe ao arrastar arquivo */
  const onDrop = () => wrapperRef.current.classList.remove("dragover");

  /* Logica para o input aceitar apenas CSV e setar no estado o novo arquivo */
  const onFileDrop = (e) => {
    const newFile = e.target.files[0];
    const typeFile = newFile.name.split(".")[1];

    Papa.parse(e.target.files[0], {
      header: true,
      complete: (results) => setDataParse(results.data),
    });

    Papa.parse(e.target.files[0], {
      complete: (results) => setData(results.data),
    });

    if (typeFile == "csv") {
      setFile({ name: newFile.name, size: newFile.size, type: newFile.type });
    }
  };

  /* Logica para remocao das infos do arquivo */
  const fileRemove = () => {
    setFile({});
    setData([]);
  };

  /* Logica para download do arquivo */
  const fileDownload = () => {
    return saveAs(
      new Blob([data], { type: "text/csv;charset=utf-8;" }),
      file.name
    );
  };

  return (
    <ContainerDropFileInput>
      <div
        ref={wrapperRef}
        className='drop-file-input'
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      >
        <div className='drop-file-input__label'>
          <img src={uploadImg} alt='Image upload cloud' />
          <p>Arraste e Solte seu arquivo CSV ou clique aqui</p>
        </div>
        <input type='file' accept='.csv' onChange={onFileDrop} />
      </div>
      {file.name ? (
        <div className='drop-file-preview'>
          <div className='drop-file-preview__item'>
            <img src={csvImg} alt='icone de arquivo csv' />
            <div className='drop-file-preview__item__info'>
              <p>{file.name}</p>
              <p>{`tamanho: ${file.size}`}</p>
            </div>
            <span
              className='drop-file-preview__item__del'
              onClick={() => fileRemove()}
            >
              X
            </span>
          </div>
          <button
            className='btn btn-outline-light'
            target='_blank'
            onClick={() => fileDownload()}
            download
          >
            Download Table
          </button>
        </div>
      ) : null}
    </ContainerDropFileInput>
  );
}

DropFileInput.propTypes = {
  onFileChange: PropTypes.func,
};

export default DropFileInput;
