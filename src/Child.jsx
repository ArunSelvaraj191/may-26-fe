const Child = ({ count }) => {
  console.log("Child rendered with count:", count);
  return <div>Child Component with count: {count}</div>;
};

export default Child;
