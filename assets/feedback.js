const form = document.querySelector('#feedback');
const input = document.querySelector('#feedback-message');
const button = form.querySelector('button');
const status = document.querySelector('#feedback-result');
let requestId;

button.disabled = false;
input.addEventListener('input', () => {
  requestId = undefined;
  status.textContent = '';
});

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const message = input.value.trim();
  if (!message || button.disabled) {
    if (!message) status.textContent = '请写下意见 / Enter your feedback';
    return;
  }

  button.disabled = true;
  input.readOnly = true;
  status.textContent = '提交中… / Sending…';
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 12000);
  try {
    requestId ??= crypto.randomUUID();
    const response = await fetch('https://aqr-feedback.joinwell52.chatgpt.site/api/feedback', {
      method: 'POST',
      credentials: 'omit',
      redirect: 'error',
      headers: { 'Content-Type': 'application/json' },
      signal: controller.signal,
      body: JSON.stringify({ id: requestId, message }),
    });
    if (response.status !== 204) throw new Error('Feedback submission failed');
    form.reset();
    requestId = undefined;
    status.textContent = '已提交，谢谢 / Feedback sent';
  } catch {
    status.textContent = '提交失败，请重试 / Could not send. Try again.';
  } finally {
    clearTimeout(timeout);
    input.readOnly = false;
    button.disabled = false;
  }
});
