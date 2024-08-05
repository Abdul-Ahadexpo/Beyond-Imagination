function confirmDownload(fileName) {
  const userConfirmed = confirm(
    `Are you sure you want to download ${fileName}?`
  );
  if (!userConfirmed) {
    event.preventDefault();
  }
}
