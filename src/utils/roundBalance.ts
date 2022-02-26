export default function roundBalance(balance: string, decimals: number = 2) {
  return `${Number(balance).toFixed(decimals)}`;
}
