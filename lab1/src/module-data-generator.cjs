const fs = require("fs");

function randomDate(start, end) {
  const date = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
  return date.toISOString().split("T")[0];
}

function randomEyeColor() {
  const colors = ["blue", "green", "brown"];
  return colors[Math.floor(Math.random() * colors.length)];
}

fs.readFile(
  "/Users/justynamalinowska/Documents/ReactLab/lab1/src/names.txt",
  "utf8",
  (err, data) => {
    if (err) {
      console.error("Błąd wczytywania pliku names.txt:", err);
      return;
    }

    const names = data
      .split("\n")
      .map((name) => name.trim())
      .filter((name) => name.length > 0);

    let content = "export const data = [\n";

    const count = names.length;

    for (let i = 0; i < count; i++) {
      const randomName = names[Math.floor(Math.random() * names.length)];
      const person = {
        id: i + 1,
        name: randomName,
        birth: randomDate(new Date(1999, 0, 1), new Date(2001, 0, 1)),
        eyes: randomEyeColor(),
      };

      content += JSON.stringify(person) + ",\n";
    }

    content += "];";

    fs.writeFile(
      "/Users/justynamalinowska/Documents/ReactLab/lab1/src/module-data.js",
      content,
      (err) => {
        if (err) {
          console.error("Error saving module-data.js:", err);
        } else {
          console.log("File module-data.js has been created.");
        }
      }
    );
  }
);
