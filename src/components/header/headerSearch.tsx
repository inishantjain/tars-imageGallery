function HeaderSearch({ query }: { query: string }) {
  return (
    <section className="dark:bg-neutral-800">
      <div className="mx-auto dark:text-neutral-200 text-xl md:text-3xl max-w-screen-xl w-11/12 pt-5 pb-3">
        <h2 className="text-start bold">
          Search Results for : <i>{query}</i>{" "}
        </h2>
      </div>
    </section>
  );
}

export default HeaderSearch;
