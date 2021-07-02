interface PropTypes {
  size: number;
  alive: boolean;
  x: number;
  y: number;
  changeGrid: Function;
  draw: boolean;
}
const Cell = ({ size, alive, x, y, changeGrid, draw }: PropTypes) => {
  return (
    <div
      style={{
        height: `${size}px`,
        width: `${size}px`,
        borderRadius: 'none',
        border: '1px solid white',
        backgroundColor: alive ? '#1e88e5' : '#e3e3e3',
      }}
      onMouseOver={() => {
        if (draw) changeGrid(x, y);
      }}
      onClick={() => changeGrid(x, y)}
    ></div>
  );
};

export default Cell;
