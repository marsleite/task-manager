import React from 'react';

const Form = () => {
  return (
    <div>
      <form onSubmit={ handleSubmit }>
        <input type="text" name="criador" placeholder="Cridor" />
        <input type="text" name="titulo" placeholder="título" />
        <input type="text" name="mensagem" placeholder="mensagem" />
        <input type="text" name="tags" placeholder="tags" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}