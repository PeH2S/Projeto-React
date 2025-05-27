  // src/Ativ04.js
  import React from 'react';
  import Toolbar            from './Toolbar';
  import Gallery            from './components/Gallery';
  import ContadorPessoas    from './ContadorPessoas';
  import Counter            from './Counter';
  import BasicForm          from './BasicForm';
  import ContactForm        from './ContactForm';
  import RegistrationForm   from './RegistrationForm';
  import InteractiveCanvas  from './InteractiveCanvas';
  import FruitList          from './FruitList';
  import TodoList           from './TodoList';
  import TaskManager        from './TaskManager';
  import FrameworkFilter    from './FrameworkFilter';
  import AdventureList      from './AdventureList';
  import MultiCounter       from './MultiCounter';
  import ShapeCustomizer    from './ShapeCustomizer';

  export default function Ativ04() {
    const sections = [
      ['Toolbar',               <Toolbar />],
      ['Galeria',               <Gallery />],
      ['Contador de Pessoas',   <ContadorPessoas />],
      ['Counter',               <Counter />],
      ['Form Básico',           <BasicForm />],
      ['Form de Contato',       <ContactForm />],
      ['Registro de Usuário',   <RegistrationForm />],
      ['Canvas Interativo',     <InteractiveCanvas />],
      ['Lista de Frutas',       <FruitList />],
      ['To-Do List',            <TodoList />],
      ['Gerenciador de Tarefas',<TaskManager />],
      ['Filtro de Frameworks',  <FrameworkFilter />],
      ['Lista de Aventuras',    <AdventureList />],
      ['Multi-Contador',        <MultiCounter />],
      ['Customização de Formas',<ShapeCustomizer />],
    ];

    return (
      <div className="container mt-4">
        <h1>Atividade 04 – Componentes e Interatividade</h1>
        {sections.map(([title, Component], i) => (
          <section key={i} className="mb-5">
            <h2>{title}</h2>
            {Component}
          </section>
        ))}
      </div>
    );
  }
