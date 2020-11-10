export default function format(price: number, currency: string){
  return (price / 100).toLocaleString('de-DE', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}
