import { useEffect } from "react";

export const useChangeDocumentTitle = (title: string) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};
