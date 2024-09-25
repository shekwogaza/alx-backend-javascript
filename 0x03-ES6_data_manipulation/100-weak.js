// Create and export a WeakMap instance
export const weakMap = new WeakMap();

// Function to track API calls
export function queryAPI(endpoint) {
  // Get the current count of calls for the endpoint, defaulting to 0 if not present
  const count = weakMap.get(endpoint) || 0;

  // If the count is greater than or equal to 5, throw an error
  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }

  // Update the count in the WeakMap
  weakMap.set(endpoint, count + 1);
}
