import { createSignal } from 'solid-js';
import banner from './assets/banner.png'
import Card from './components/Card';


function App() {

  const [darkTheme, setDarkTheme] = createSignal(false)

  const toggleTheme = () => {
    setDarkTheme(!darkTheme())
  }

  return (
    <div class="container m-auto" >
      <header class="my-4 p-2 text-xl flex items-center gap-4"
        classList={{ "bg-neutral-900": darkTheme(), "text-white": darkTheme() }}>

        <span
          class="material-symbols-outlined cursor-pointer"
          onClick={toggleTheme}>
          light_mode
        </span>

        <h1>Ninja Merch</h1>
      </header>
      <img class="rounded-md mb-10" src={banner} alt="" />

      <div class="grid grid-cols-4 gap-10 my-04 ">
        <Card>
          <h2> Ninja Tee</h2>
          <p>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero accusamus laborum reprehenderit iusto earum?</p>
          <button class="btn">Click Me</button>
        </Card>
        <Card>
          <h2> Ninja Tote</h2>
          <p>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero accusamus laborum reprehenderit iusto earum?</p>
          <button class="btn">Click Me</button>
        </Card>
        <Card>
          <h2> Ninja Hoodi</h2>
          <p>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero accusamus laborum reprehenderit iusto earum?</p>
          <button class="btn">Click Me</button>
        </Card>
      </div>

    </div>
  );
}

export default App;
