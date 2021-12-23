export const post = async request => {
  const investmentGroupName = request.body.get('investmentGroupName')
  const preferToPayBy = request.body.get('preferToPayBy')
  const formOfAccount = request.body.get('formOfAccount')
  const businessName = request.body.get('businessName')
  const firstName = request.body.get('firstName')
  const lastName = request.body.get('lastName')
  const address1 = request.body.get('address1')
  const address2 = request.body.get('address2')
  const city = request.body.get('city')
  const state = request.body.get('state')
  const zip = request.body.get('zip')
  const phone = request.body.get('phone')
  const email = request.body.get('email')
  const bankName = request.body.get('bankName')
  const routing = request.body.get('routing')
  const accountNumber = request.body.get('accountNumber')
  const accountType = request.body.get('accountType')
  const isFee = request.body.get('isFee')
  const isSeveralDays = request.body.get('isSeveralDays')
  const isAuthorize = request.body.get('isAuthorize')

  const res = await fetch(
    `https://docs.google.com/forms/d/e/1FAIpQLSfxtoB1g3xH5gPPX4W9OLzqvxLuA6SePdophdTapmCzhhJzfQ/formResponse?usp=pp_url&entry.162431829=${investmentGroupName}&entry.1781906895=${preferToPayBy}&entry.1440485456=${formOfAccount}&entry.1021862647=${businessName}&entry.1684099418=${firstName}&entry.1425369883=${lastName}&entry.31807725=${address1}&entry.2051771582=${address2}&entry.2132796715=${city}&entry.184029313=${state}&entry.1607422866=${zip}&entry.1664345986=${phone}&entry.1012997659=${email}&entry.1956771599=${bankName}&entry.559012598=${routing}&entry.2045576081=${accountNumber}&entry.1217910360=${accountType}&entry.1163836722=I+agree+to+any+reasonable+fees+associated+with+sending+a+direct+payment+to+my+bank+not+to+exceed+$30+total+per+transfer+(up+to+$10+for+ACH+and+$30+for+Wires+Transfers)&entry.1163836722=I+recognize+it+may+take+several+days+to+verify+my+account+and+banking+info.&entry.1163836722=By+Initialing+here+I+authorize+the+Manager+to+use+this+information+confidentially+to+enable+payments+of+distributions+to+my+account.+No+other+actions+will+be+taken+with+this+information.&submit=Submit`
  )

  // if (res.status === 200) {
  //   return {
  //     status: 200,
  //     body: {
  //       message: 'success',
  //     },
  //   }
  // } else {
  //   return {
  //     status: 404,
  //     body: {
  //       message: 'failed',
  //     },
  //   }
  // }
  if (res.status === 200) {
    return {
      status: 200,
      body: {
        message: 'success',
      },
    }
  }
}
