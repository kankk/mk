const shadowInput = (() => {
  const input = document.createElement('input');
  input.setAttribute('style', 'position: fixed; left: 0; top: 0; opacity: 0.01; width: 1px; height: 1px;');
  document.body.appendChild(input);
  return input;
})();

export async function copy(text: string) {
  shadowInput.value = text;
  shadowInput.select();
  await document.execCommand('copy');
  shadowInput.value = '';
}
