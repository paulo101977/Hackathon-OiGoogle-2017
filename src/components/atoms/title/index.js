import React, { Component } from 'react'
import styled from 'styled-components'

const AmpH2 = (props) => (
    <amp-h2 style={props.style} >{props.children}</amp-h2>
)

const H1 = styled.h1`
	font-family: SimplonRegular;
	width: 100%;
	margin:0;
	padding:0;
	font-size: 240%;
	${ props => props.margin && 'margin: 1em 0;'}
	${ props => props.padding && 'padding: 1em;'}
	color: ${ props => props.theme.color && props.theme.color.title ? props.theme.color.title : '#000'};
	${ props => props.centered && 'align-self: center;' };
	${ props => props.isUpperCase && 'text-transform: uppercase' };
	${ props => props.isLowerCase && 'text-transform: lowercase' };
	& * {
		color: ${ props => props.theme.color && props.theme.color.title ? props.theme.color.title : '#000'};
	}
` 
const H2 = styled.h2`
	font-family: SimplonRegular;
	width: 100%;
	margin:0;
	padding:0;
	font-size: 220%;
	${ props => props.margin && 'margin: 1em 0;'}
	${ props => props.padding && 'padding: 1em;'}
	color: ${ props => props.theme.color && props.theme.color.title ? props.theme.color.title : '#000'};
	${ props => props.centered && 'align-self: center;' };
	${ props => props.isUpperCase && 'text-transform: uppercase' };
	${ props => props.isLowerCase && 'text-transform: lowercase' };
	& * {
		color: ${ props => props.theme.color && props.theme.color.title ? props.theme.color.title : '#000'};
	}
` 
const H3 = styled.h3`
	font-family: SimplonRegular;
	width: 100%;
	margin:0;
	padding:0;
	font-size: 180%;
	${ props => props.margin && 'margin: 1em 0;'}
	${ props => props.padding && 'padding: 1em;'}
	color: ${ props => props.theme.color && props.theme.color.title ? props.theme.color.title : '#000'};
	${ props => props.centered && 'align-self: center;' };
	${ props => props.isUpperCase && 'text-transform: uppercase' };
	${ props => props.isLowerCase && 'text-transform: lowercase' };
	& * {
		color: ${ props => props.theme.color && props.theme.color.title ? props.theme.color.title : '#000'};
	}
` 
const H4 = styled.h4`
	font-family: SimplonRegular;
	width: 100%;
	margin:0;
	padding:0;
	font-size: 160%;
	${ props => props.margin && 'margin: 1em 0;'}
	${ props => props.padding && 'padding: 1em;'}
	color: ${ props => props.theme.color && props.theme.color.title ? props.theme.color.title : '#000'};
	${ props => props.centered && 'align-self: center;' };
	${ props => props.isUpperCase && 'text-transform: uppercase' };
	${ props => props.isLowerCase && 'text-transform: lowercase' };
	& * {
		color: ${ props => props.theme.color && props.theme.color.title ? props.theme.color.title : '#000'};
	}
` 
const H5 = styled.h5`
	font-family: SimplonRegular;
	width: 100%;
	margin:0;
	padding:0;
	font-size: 130%;
	${ props => props.margin && 'margin: 1em 0;'}
	${ props => props.padding && 'padding: 1em;'}
	color: ${ props => props.theme.color && props.theme.color.title ? props.theme.color.title : '#000'};
	${ props => props.centered && 'align-self: center;' };
	${ props => props.isUpperCase && 'text-transform: uppercase' };
	${ props => props.isLowerCase && 'text-transform: lowercase' };
	& * {
		color: ${ props => props.theme.color && props.theme.color.title ? props.theme.color.title : '#000'};
	}
` 
const H6 = styled.h6`
	font-family: SimplonRegular;
	width: 100%;
	margin:0;
	padding:0;
	font-size: 100%;
	${ props => props.margin && 'margin: 1em 0;'}
	${ props => props.padding && 'padding: 1em;'}
	color: ${ props => props.theme.color && props.theme.color.title ? props.theme.color.title : '#000'};
	${ props => props.centered && 'align-self: center;' };
	${ props => props.isUpperCase && 'text-transform: uppercase' };
	${ props => props.isLowerCase && 'text-transform: lowercase' };
	& * {
		color: ${ props => props.theme.color && props.theme.color.title ? props.theme.color.title : '#000'};
	}
` 
export default H2
export { H1, H2, H3, H4, H5, H6 }