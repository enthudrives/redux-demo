export function nextSection () {
  return {
    type: "NEXT_SECTION"
  }
}

export default function nextSectionReducer (state = 0, action) {
  return action.type === "NEXT_SECTION" ? state + 1 : state
}
