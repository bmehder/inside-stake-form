export const post = async request => {
  const name = request.body.get('name')
  const email = request.body.get('email')

  const res = await fetch(
    `https://docs.google.com/forms/d/e/1FAIpQLSfxtoB1g3xH5gPPX4W9OLzqvxLuA6SePdophdTapmCzhhJzfQ/formResponse?usp=pp_url&entry.162431829=Acme+Investment+Group&entry.1781906895=Check&entry.1440485456=Business&entry.1021862647=Acme+Business&entry.1684099418=Brad&entry.1425369883=Mehder&entry.31807725=84+Shady+Oak+Drive&entry.2051771582=Suite+32&entry.2132796715=Asheville&entry.184029313=NC&entry.1607422866=28803&entry.1664345986=8286800032&entry.1012997659=bmehder@gmail.com&entry.1956771599=First+Bank&entry.559012598=1234567&entry.2045576081=98765432&entry.1217910360=Savings&entry.1163836722=I+agree+to+any+reasonable+fees+associated+with+sending+a+direct+payment+to+my+bank+not+to+exceed+$30+total+per+transfer+(up+to+$10+for+ACH+and+$30+for+Wires+Transfers)&entry.1163836722=I+recognize+it+may+take+several+days+to+verify+my+account+and+banking+info.&entry.1163836722=By+Initialing+here+I+authorize+the+Manager+to+use+this+information+confidentially+to+enable+payments+of+distributions+to+my+account.+No+other+actions+will+be+taken+with+this+information.&submit=Submit`
  )

  if (res.status === 200) {
    return {
      status: 200,
      body: {
        message: 'success',
      },
    }
  } else {
    return {
      status: 404,
      body: {
        message: 'failed',
      },
    }
  }
}
