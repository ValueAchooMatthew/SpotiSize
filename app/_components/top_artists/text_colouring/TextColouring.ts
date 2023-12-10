export default function textColouring(name: string, selected?: string) {
    return name == selected ? "text-purple" : "hover:scale-110";
  }