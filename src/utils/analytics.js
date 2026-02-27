/**
 * Capture UTM parameters from the current URL
 */
export function getUtmParams() {
  const params = new URLSearchParams(window.location.search)
  return {
    utm_source: params.get('utm_source') || '',
    utm_medium: params.get('utm_medium') || '',
    utm_campaign: params.get('utm_campaign') || '',
    utm_content: params.get('utm_content') || '',
  }
}

/**
 * Store UTM params in sessionStorage on first visit
 */
export function captureUtmParams() {
  const utms = getUtmParams()
  const hasAny = Object.values(utms).some(v => v)
  if (hasAny) {
    sessionStorage.setItem('mana88_utm', JSON.stringify(utms))
  }
}

/**
 * Retrieve stored UTM params (from session or current URL)
 */
export function getStoredUtmParams() {
  const stored = sessionStorage.getItem('mana88_utm')
  if (stored) {
    try { return JSON.parse(stored) } catch { /* fall through */ }
  }
  return getUtmParams()
}
