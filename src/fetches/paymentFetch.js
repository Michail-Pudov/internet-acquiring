export async function payment(data) {
  console.log(data);

  let response = await fetch("https://securepay.tinkoff.ru/v2/Init", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8"
    },
    body: JSON.stringify({
      TerminalKey: "TinkoffBankTest",
      Amount: data.amount,
      OrderId: "212050",
      Description: `Покупка кроссовок на ${data.amount}`,
      DATA: {
        Phone: "+71234567890",
        Email: "a@test.com"
      },
      Receipt: {
        Email: "a@test.ru",
        Phone: "+79031234567",
        EmailCompany: "b@test.ru",
        Taxation: "osn",
        Items: data.items
      }
    })
  });
  let result = await response.json();
  return result
}
