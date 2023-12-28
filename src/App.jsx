import { ImageSlider } from "./ImageSlider";

const App = () => {

  const slides = [
    {
      url: './image/1.jpg',
      title: 'slide 1'
    },
    {
      url: './image/2.jpg',
      title: 'slide 2'
    },
    {
      url: './image/3.jpg',
      title: 'slide 3'
    },
    {
      url: './image/4.jpg',
      title: 'slide 4'
    },
    {
      url: './image/5.jpg',
      title: 'slide 5'
    },
    {
      url: './image/6.jpg',
      title: 'slide 6'
    },
    {
      url: './image/7.jpg',
      title: 'slide 7'
    },
    {
      url: './image/8.jpg',
      title: 'slide 8'
    },
    {
      url: './image/9.jpg',
      title: 'slide 9'
    },
    {
      url: './image/10.jpeg',
      title: 'slide 10'
    }
  ]

  const containerStyles = {
    width: "960px",
    height: "540px",
    margin: "0 auto",
  }

  return (
    <div className="app">
      <h1>Hello monsterlessons</h1>
      <h2>SLIDER</h2>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
}

export default App;
