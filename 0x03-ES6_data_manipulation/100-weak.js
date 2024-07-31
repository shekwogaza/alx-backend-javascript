// Create and export a WeakMap instance
export const weakMap = new WeakMap();

// Function to track API calls
export function queryAPI(endpoint) {
  // Check if the endpoint is an object, as WeakMap keys must be objects
  if (typeof endpoint !== 'object' || endpoint === null) {
    throw new Error('Invalid endpoint: Must be a non-null object');
  }

  // Get the current count of calls for the endpoint
  const count = weakMap.get(endpoint) || 0;

  // If the count is greater than or equal to 5, throw an error
  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }

  // Update the count in the WeakMap
  weakMap.set(endpoint, count + 1);
}
