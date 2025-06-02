import Toolbar from './Toolbar';
import Gallery from './Gallery';
import ContadorPessoas from './ContadorPessoas';
import Counter from './Counter';
import BasicForm from './BasicForm';
import ContactForm from './ContactForm';
import RegistrationForm from './RegistrationForm';
import InteractiveCanvas from './InteractiveCanvas';
import FruitList from './FruitList';
import TodoList from './TodoList';
import TaskManager from './TaskManager';
import FrameworkFilter from './FrameworkFilter';
import AdventureList from './AdventureList';
import MultiCounter from './MultiCounter';
import ShapeCustomizer from './ShapeCustomizer';

export default function Ativ04() {
  return (
    <div className="container mt-4">
      <h1>Atividade 04 - Componentes e Interatividade</h1>

      <section className="mb-5">
        <h2>Toolbar</h2>
        <Toolbar />
      </section>

      <section className="mb-5">
        <h2>Galeria</h2>
        <Gallery />
      </section>

      <section className="mb-5">
        <h2>Contador de Pessoas</h2>
        <ContadorPessoas />
      </section>

      <section className="mb-5">
        <h2>Counter</h2>
        <Counter />
      </section>

      <section className="mb-5">
        <h2>Formulário Básico</h2>
        <BasicForm />
      </section>

      <section className="mb-5">
        <h2>Formulário de Contato</h2>
        <ContactForm />
      </section>

      <section className="mb-5">
        <h2>Registro de Usuário</h2>
        <RegistrationForm />
      </section>

      <section className="mb-5">
        <h2>Canvas Interativo</h2>
        <InteractiveCanvas />
      </section>

      <section className="mb-5">
        <h2>Lista de Frutas</h2>
        <FruitList />
      </section>

      <section className="mb-5">
        <h2>To-Do List</h2>
        <TodoList />
      </section>

      <section className="mb-5">
        <h2>Gerenciador de Tarefas</h2>
        <TaskManager />
      </section>

      <section className="mb-5">
        <h2>Filtro de Frameworks</h2>
        <FrameworkFilter />
      </section>

      <section className="mb-5">
        <h2>Lista de Aventuras</h2>
        <AdventureList />
      </section>

      <section className="mb-5">
        <h2>Multi-Contador</h2>
        <MultiCounter />
      </section>

      <section className="mb-5">
        <h2>Customização de Formas</h2>
        <ShapeCustomizer />
      </section>
    </div>
  );
}
