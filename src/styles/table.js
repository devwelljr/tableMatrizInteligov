import styled from "styled-components";

export default styled.main`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  margin: 0 auto;
  width: 100%;
  min-height: auto;
  
  table {
    border-spacing: 0;
    border: 1px solid black;
    overflow-x: auto;
    min-width: 100%;

    tbody {
      white-space: nowrap;
    }

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;
      text-align: initial;
      position: relative;

      :last-child {
        border-right: 0;
      }
    }
  }
`;
