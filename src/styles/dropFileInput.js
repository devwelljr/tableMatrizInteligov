
  
import styled from "styled-components";

export default styled.section`
  background-color: #000639;
  border-radius: 20px;
  color: white;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 10px;
  max-height: 20%;
  min-width: 40%;
  .drop-file-input {
    align-items: center;
    background-color: #000639;
    border-radius: 20px;
    display: flex;
    height: 200px;
    justify-content: center;
    position: relative;
    max-height: 20%;
    width: 100%;
  }
  .drop-file-input input {
    cursor: pointer;
    left: 0;
    height: 100%;
    opacity: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
  .drop-file-input:hover,
  .drop-file-input.dragover {
    opacity: 0.6;
  }
  .drop-file-input__label {
    text-align: center;
    font-weight: 600;
    padding: 10px;
  }
  .drop-file-input__label img {
    max-width: 130px;
  }
  .drop-file-preview {
    align-items: center;
    display: flex;
    justify-content: center;
    min-width: 100%;
  }
  .drop-file-preview p {
    font-weight: 500;
  }
  .drop-file-preview__item {
    border-radius: 20px;
    display: flex;
    padding: 15px;
    position: relative;
    margin-bottom: 10px;
  }
  .drop-file-preview__item img {
    margin-right: 20px;
    width: 70px;
  }
  .drop-file-preview__item__info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .drop-file-preview__item__del {
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    height: 50px;
    position: absolute;
    width: 50px;
  }
  .drop-file-preview__item:hover .drop-file-preview__item__del {
    opacity: 1;
  }
`;