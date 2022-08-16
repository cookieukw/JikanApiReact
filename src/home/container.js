import styled from "styled-components";

export const Container = styled.div`
h1 {
    text-align: center;
    margin: 10px;
    background-color: white;
    border-radius: 1rem;
    padding: 1rem;
    margin-bottom: 2rem;
    font-size: 2rem;
    top: 2%;
    position: sticky;
    z-index: 1;
}
ul {
    width: 100%;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    column-gap: 3rem;
    row-gap: 4rem;
    align-items: stretch;
}

li {
    display: flex;
    flex-direction: column;
    align-items: center;
}

padding-left: 2rem;
padding-right: 2rem;
padding-bottom: 2rem;
`