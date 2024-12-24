export const removeLastLetter = (str: string) => {
  return str.slice(0, -1);
};

export const sentenceCase = (str: string) => {
  if (!str) return "";

  return str?.charAt(0).toUpperCase() + str?.slice(1)?.toLowerCase();
};

export function sentenceCaseEachWord(str: string) {
  if (str) {
    return str
      .split(" ")
      .map(
        (word) => word?.charAt(0)?.toUpperCase() + word?.slice(1)?.toLowerCase()
      )
      .join(" ");
  }
  return "";
}

export function splitAmountByThousands(amount: number) {
  if (!amount) return null;
  const parts = [];
  let remaining = amount?.toString();

  while (remaining.length > 3) {
    parts.unshift(remaining.slice(-3));
    remaining = remaining.slice(0, -3);
  }

  if (remaining.length > 0) {
    parts.unshift(remaining);
  }

  return parts.join(",");
}
