let access, renew = null;

export function getAccess() {
  return access;
}

export function setAccess(a) {
  access = a;
}

export function refresh() {
  return renew;
}

export function setRefresh(r) {
  renew = r;
}
