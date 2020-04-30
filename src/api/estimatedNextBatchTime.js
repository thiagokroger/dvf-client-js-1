const { get } = require('request-promise')

module.exports = async dvf => {
  const url = dvf.config.api + '/v1/trading/r/estimatedNextBatchTime'

  const result = await get(url)
  return JSON.parse(result)
}
