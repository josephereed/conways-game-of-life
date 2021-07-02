interface PropTypes {
  size: number;
  alive: boolean;
}
const Cell = ({ size, alive }: PropTypes) => {
  return (
    <div
      style={{
        height: `${size}px`,
        width: `${size}px`,
        borderRadius: 'none',
        border: '1px solid white',
        backgroundColor: alive ? '#1e88e5' : '#e3e3e3',
      }}
    ></div>
  );
};

export default Cell;
