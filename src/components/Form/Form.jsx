import React, { useState } from 'react';
import './styles.css'

const Form = () => {
  const [postData, setPostData] = useState({
    creator: '',
    title: '',
    message: '',
    tags: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(postData);
  };

  return (
    <div>
      <form className="wrap-form" onSubmit={ handleSubmit }>
        <input 
          type="text" 
          name="criador" 
          placeholder="Criador" 
          value={ postData.creator } 
          onChange={ ({ target }) => setPostData({ ...postData, creator: target.value }) }
        />
        <input 
          type="text" 
          name="titulo" 
          placeholder="título" 
          value={ postData.title } 
          onChange={ ({ target }) => setPostData({ ...postData, title: target.value }) }
        />
        <input
          type="text" 
          name="mensagem" 
          placeholder="mensagem" 
          value={ postData.message } 
          onChange={ ({ target }) => setPostData({ ...postData, message: target.value }) }
        />
        <input 
          type="text" 
          name="tags" 
          placeholder="tags" 
          value={ postData.tags } 
          onChange={ ({ target }) => setPostData({ ...postData, tags: target.value }) }
        />
        <button type="submit">Enviar</button>
        <button type="submit">Limpar</button>
      </form>
    </div>
  );
}

export default Form;