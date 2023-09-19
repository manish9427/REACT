function Rules() {
  const x = 10;
  return (
    <>
      <h1 className="x">React Rules</h1>
      <p>{x > 5 ? "greater" : "smaller"}</p>
      <hr />
    </>
  );
}

export default Rules;
