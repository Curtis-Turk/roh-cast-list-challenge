function Creatives({ creativesArray }) {
  const creativeElementList = creativesArray?.map((creative) => {
    return (
      <li key={creative.name}>
        <div>
          {creative.name} - {creative.role}
        </div>
      </li>
    );
  });

  return <ul>{creativeElementList}</ul>;
}

export default Creatives;
