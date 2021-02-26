/**
 * 从 url location 获取是否编辑态
 */
export function isEditMode() {
  if (window) {
    return /mode=edit/.test(window.location.hash);
  }
  return false;
}
