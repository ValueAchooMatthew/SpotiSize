interface HasCoords {
  x: number;
  y: number;
}

/**
 * @param event any given event
 * @returns object with x and y coords or undefined if input event did not contain coords
 */
export function tryGetCoordsFromEvent(event: any): HasCoords | undefined {
  if (
    event.x && event.y &&
    typeof event.x == "number" && typeof event.y == "number"
  ) {
    return { x: event.x, y: event.y };
  }
  return undefined;
}
