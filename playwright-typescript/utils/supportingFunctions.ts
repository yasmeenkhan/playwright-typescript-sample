export class Utils {
  parsePrices(priceText: string): number {
    return Number(priceText.trim().replace('$', ''));
  }
}
