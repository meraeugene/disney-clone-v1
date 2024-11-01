import { notFound } from "next/navigation";

type Props = {
  params: {
    term: string;
  };
};

async function SearchPage({ params }: Props) {
  const { term } = await params;
  if (!term) notFound();

  const termToUse = decodeURI(term);

  //   API call to get the Searched movies
  //  API call to get the Popular Movies

  return <div> Search Page : {termToUse}</div>;
}

export default SearchPage;
