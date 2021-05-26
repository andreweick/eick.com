const tndSearchStrings = {
  civilwar: "Civil War",
  familytree: "Family Tree",
}
export let tndWidgets = {
  menu: {
    transformItems(items) {
      return items.map(item => ({
        ...item,
        label: item.label in tndSearchStrings ? `${tndSearchStrings[item.label]} (${item.count})` : `${item.label} (${item.count})`
      }));
    },
  }
}