import React from 'react';
export default function ButtonLink(props) {
    /* props : 
    {
        className : value, 
        href : value,

    }
    */
    return (
        <a className={props.className} href={props.href}>
            {props.children}
        </a>
    );
};