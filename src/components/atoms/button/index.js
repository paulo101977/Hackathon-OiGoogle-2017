import React, { Component } from 'react'
import styled from 'styled-components'


const Button = styled.button.attrs({
	// or we can define dynamic ones
	margin: props => props.size || '0;',
	padding: props => props.size || '2em;'
})`

	/* here we use the dynamically computed props */
	margin: ${props => props.margin};
	padding: ${props => props.padding};

	background: ${props => props.primary ? '#c72177' : 'white'};
	color: ${props => props.primary ? 'white' : '#c72177'};

    border: 1px solid #C72177;
    ${props => (props.full) && 'width: 20em;'}


	{/* normal button */}
	${
		props => (props.theme.button) &&
		   `background-color: ${ props.theme.button.normal.bg};
			color: ${ props.theme.button.normal.color};`  
	}

	{/* primary button */}
	${
		props => (props.primary && props.theme.button) &&
			 `background-color: ${ props.theme.button.primary.bg};
			color: ${ props.theme.button.primary.color};` 
	}

    &:hover {
	    background: linear-gradient(to right, #cd266f 0%, #fea20c 100%);
	    color: white;
	    cursor: pointer;


	    {/* normal button */}
	${
		props => (props.theme.button) &&
		   `background-color: ${ props.theme.button.primary.bg};
			color: ${ props.theme.button.primary.color};`  
	}

	{/* primary button */}
	${
		props => (props.primary && props.theme.button) &&
			 `background-color: ${ props.theme.button.normal.bg};
			color: ${ props.theme.button.normal.color};` 
	}


    }
    &:active {
	    background-color:  #a51c63;
	    color: white;
	    cursor: pointer;


	{/* normal button */}
	${
		props => (props.theme.button) &&
		   `background-color: ${ props.theme.button.normal.bg};
			color: ${ props.theme.button.normal.color};`  
	}

	{/* primary button */}
	${
		props => (props.primary && props.theme.button) &&
			 `background-color: ${ props.theme.button.primary.bg};
			color: ${ props.theme.button.primary.color};` 
	}


    }

`;

export default Button