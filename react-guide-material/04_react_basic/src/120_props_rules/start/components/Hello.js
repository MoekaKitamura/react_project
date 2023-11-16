const Hello = (props) => {
  const props1 =   Reflect.getOwnPropertyDescriptor(props, "name")
  console.log(props1)
  return (
    <div>
      <h3>Hello {props.name}</h3>
    </div>
  );
};

export default Hello;
