export async function apiFetchCustomerInfo (aonr) {
  let response = await fetch(`/ResursBank/CustomerInfo?aonr=${aonr}&di=1`, {
    method: 'GET'
  })

  if (response.status === 200) {
    let data = await response.json()
    return { status: response.status, data: data }
  } else {
    return { status: response.status, data: null }
  }
}

// POST

export async function apiMakePayment (apiData) {
  let jsonObj = JSON.stringify(apiData)
  let response = await fetch(`/ResursBank/MakePaymentPurchase`, {// ?aonr=${aonr}&di=1`, {
    method: 'POST',
    body: jsonObj
  })

  if (response.status === 200) {
    let data = await response.json()
    return { status: response.status, data: data }
  } else {
    return { status: response.status, data: null }
  }
}
