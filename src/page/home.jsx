import Button from '../components/Button';

function Home() {
  
  const handleClick = () => {
    alert("Welcome to the Home Page!");
  };

  return (
    <div>
      <h1>Home Page123</h1>
      <Button label="Click Me" onClick={handleClick} />
    </div>
  );
}

export default Home;