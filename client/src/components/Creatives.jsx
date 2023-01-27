function Creatives({ creativesArray }) {
  const creativeElementList = creativesArray?.map((creative) => {
    return (
      <li>
        <div>{creative.name}</div>
        <div>{creative.role}</div>
      </li>
    );
  });

  return <ul>{creativeElementList};</ul>;
}

export default Creatives;
