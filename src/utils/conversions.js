function toCelsius(f) {
  if (typeof f !== 'number' || !Number.isFinite(f)) {
    throw new TypeError('Input must be a finite number');
  }
  return Number(((f - 32) * 5 / 9).toFixed(1));
}

function toFahrenheit(c) {
  if (typeof c !== 'number' || !Number.isFinite(c)) {
    throw new TypeError('Input must be a finite number');
  }
  return Number(((c * 9 / 5) + 32).toFixed(1));
}

function movingAverage(series, window) {
  if (!Array.isArray(series) || series.some(v => typeof v !== 'number' || !Number.isFinite(v))) {
    throw new TypeError('Series must contain only finite numbers');
  }
  if (!Number.isInteger(window) || window < 2 || window > series.length) {
    throw new RangeError('Window must be an integer between 2 and series.length');
  }

  const result = [];
  for (let i = 0; i <= series.length - window; i++) {
    const slice = series.slice(i, i + window);
    const avg = slice.reduce((a, b) => a + b, 0) / window;
    result.push(Number(avg.toFixed(2)));
  }
  return result;
}

module.exports = { toCelsius, toFahrenheit, movingAverage };



