export function sorting(arr, { path, order }) {
  return [...arr].sort((a, b) => {
    switch (path) {
      case "name":
        if (order === "asc") {
          if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
          if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
          return 0;
        } else {
          if (b.name.toLowerCase() > a.name.toLowerCase()) return 1;
          if (b.name.toLowerCase() < a.name.toLowerCase()) return -1;
          return 0;
        }
      case "subscription":
        if (order === "asc") {
          if (a.subscription > b.subscription) return 1;
          if (a.subscription < b.subscription) return -1;
          return 0;
        } else {
          if (b.subscription > a.subscription) return 1;
          if (b.subscription < a.subscription) return -1;
          return 0;
        }
      case "employment":
        if (order === "asc") {
          return a.employment - b.employment;
        } else {
          return b.employment - a.employment;
        }
      case "age":
        if (order === "asc") {
          return Number(a.age) - Number(b.age);
        } else {
          return Number(b.age) - Number(a.age);
        }
      default:
        return 0;
    }
  });
}
