export function getNewQuantity(oldQuantity, quantity, action) {
  const newQuantity =
    action === 'increase' ? oldQuantity + quantity : oldQuantity - quantity;

  if (newQuantity < 0) {
    throw new Error('Остаток меньше нуля');
  }

  return newQuantity;
}

export async function sendAction(body) {
  const host = String(process.env.SERVER_HISTORY_HOST || 'localhost');
  const port = Number(process.env.SERVER_HISTORY_PORT || 3001);

  const res = await fetch(`http://${host}:${port}/api/history`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  return res.ok;
}
