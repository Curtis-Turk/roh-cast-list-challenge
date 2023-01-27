const Cast = ({ castArray }) => {
  const castElementList = castArray?.map((castMember) => (
    <li key={castMember}>
      <div>{castMember}</div>
    </li>
  ));

  return <ul>{castElementList}</ul>;
};

export default Cast;
