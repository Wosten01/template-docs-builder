import { useCallback, useState } from "react";

export const useCopy = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = useCallback((text: string, id?: string) => {
    navigator.clipboard.writeText(text.trim());
    const copyId = id || text;
    setCopiedId(copyId);
    setTimeout(() => setCopiedId(null), 1200);
  }, []);

  const isCopied = useCallback((id: string) => {
    return copiedId === id;
  }, [copiedId]);

  return { handleCopy, isCopied };
};