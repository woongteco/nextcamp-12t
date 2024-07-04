const ids = {
  tech: [160, 201, 341, 366, 367, 529, 668, 739, 802, 942, 781],
  desk: [20, 26, 24, 36, 48, 60, 119, 180, 252, 532, 370],
  nature: [28, 29, 35, 38, 68, 98, 106, 136, 137, 239, 789],
  art: [91, 101, 104, 117, 134, 145, 157, 158, 250, 304, 319],
  architect: [954, 972, 983, 952, 947, 945, 936, 900, 898, 887, 864, 860, 1075],
  animal: [40, 219, 237, 433, 577, 582, 584, 593, 659, 718, 783, 790, 837],
};

type IdTypes =
  | "tech"
  | "desk"
  | "nature"
  | "art"
  | "architect"
  | "animal"
  | "all";

export function getImageUrl(type?: IdTypes, width = 200, height = 200): string {
  const key = type || "all";
  const idsByKey =
    key === "all"
      ? Object.values(ids).reduce((prev, curr) => [...prev, ...curr], [])
      : ids[key];
  const randomIndex = Math.floor(Math.random() * idsByKey.length);
  console.log(randomIndex, idsByKey[randomIndex]);
  return `https://picsum.photos/id/${idsByKey[randomIndex]}/${width}/${height}`;
}

export function getImageUrls(
  type?: IdTypes,
  width = 200,
  height = 200
): string[] {
  const key = type || "all";
  const idsByKey =
    key === "all"
      ? Object.values(ids).reduce((prev, curr) => [...prev, ...curr], [])
      : ids[key];
  return idsByKey.map(
    (id) => `https://picsum.photos/id/${id}/${width}/${height}`
  );
}
