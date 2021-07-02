interface PropTypes {
  size: number;
  alive: boolean;
  x: number;
  y: number;
  changeGrid: Function;
}
const Cell = ({ size, alive, x, y, changeGrid }: PropTypes) => {
  return (
    <div
      style={{
        height: `${size}px`,
        width: `${size}px`,
        borderRadius: 'none',
        border: '1px solid white',
        backgroundColor: alive ? '#1e88e5' : '#e3e3e3',
      }}
      onClick={() => changeGrid(x, y)}
    ></div>
  );
};

export default Cell;
