import { Button } from "@/components/ui/button";
import React from "react";

type Props = {
  params: {
    id: string;
  };
  searchParams: {
    genre: string;
  };
};

function GenrePage({ params: { id }, searchParams: { genre } }: Props) {
  return (
    <div>
      Genre Page with ID: {id} and genre : {genre}
      <Button>Button</Button>
    </div>
  );
}

export default GenrePage;
