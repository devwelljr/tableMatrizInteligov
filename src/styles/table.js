import styled from "styled-components";

export default styled.main`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  min-height: auto;
  overflow-x: scroll;

  .infinite-scroll-component__outerdiv {
    max-width: 100%;
  }
  
  table {
    border-spacing: 0;
    border: 1px solid black;
    table-layout: fixed;

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

      :last-child {
        border-right: 0;
      }
    }
  }
`;
