import React from 'react';
/**
 * 
 * React: props: propriedade padrao, incluir parametro no elemento e recuperar no props 
 * ou utilizar props.children que pegara o conteudo entre o elemento(ex:<div>valor para children</div>) 
 * e utilizar destruction para recuperar os parametros dentro do compontente} param0 
 */
export default function Header({children}){
    return (
        <header>
            <h1>{children}</h1>
        </header>
    )
}