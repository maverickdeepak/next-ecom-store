// export class APIError extends Error {
//   constructor(url, status) {
//     super(`${url} returned - ${status}`);
//     if (Error.captureStackTrace) {
//       Error.captureStackTrace(this, APIError);
//     }
//     this.name = "APIError";
//     this.status = status;
//   }
// }

export async function fetchJson(url, options) {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(response.message);
  }
  return await response.json();
}
