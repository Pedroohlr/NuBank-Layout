export function formatNumber(
    value: number,
    locale = 'pt-BR',
    options?: Intl.NumberFormatOptions
  ): string {
    return new Intl.NumberFormat(locale, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
      ...options
    }).format(value)
  }
  