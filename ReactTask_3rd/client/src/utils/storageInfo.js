export async function getStorageInfo() {
  if (!navigator.storage?.estimate) {
    return null;
  }

  const { quota, usage } = await navigator.storage.estimate();

  return {
    quotaMB: (quota / 1024 / 1024).toFixed(1),
    usedMB: (usage / 1024 / 1024).toFixed(1),
    freeMB: ((quota - usage) / 1024 / 1024).toFixed(1),
  };
}
