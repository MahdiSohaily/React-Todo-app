import Header from './features/header/Header';
import TodoList from './features/todos/TodoList';
import Footer from './features/footer/Footer';

function App() {
  return (
    <div className="App">
      <main>
        <section className="medium-container">
          <h1>Todos</h1>
          <div className="todoapp">
            <Header />
            <TodoList />
            <Footer />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
