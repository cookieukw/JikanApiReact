import styled from "styled-components";
import './Image.css'

export const Image = ({url, title})=> {

    return (
        <li className="img-container">
        <img src={url} alt={title}></img>
        <span className="title" >{title}</span>
        </li>
    )

}